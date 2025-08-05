import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';

let knex: Knex.Knex;

class User extends Model {
  id!: number;
  name!: string;
  posts?: Post[];

  static tableName = 'users';
  static relationMappings = () => ({
    posts: {
      relation: Model.HasManyRelation,
      modelClass: Post,
      join: {
        from: 'users.id',
        to: 'posts.user_id',
      },
    },
  });
}

class Post extends Model {
  id!: number;
  title!: string;
  userId!: number;
  comments?: Comment[];

  static tableName = 'posts';
  static relationMappings = () => ({
    comments: {
      relation: Model.HasManyRelation,
      modelClass: Comment,
      join: {
        from: 'posts.id',
        to: 'comments.post_id',
      },
    },
  });
}

class Comment extends Model {
  id!: number;
  message!: string;
  postId!: number;

  static tableName = 'comments';
}

beforeAll(async () => {
  knex = Knex({
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
    useNullAsDefault: true,
    ...knexSnakeCaseMappers(),
  });
  Model.knex(knex);

  await knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
    })
    .createTable('posts', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.integer('user_id').references('users.id');
    })
    .createTable('comments', (table) => {
      table.increments('id').primary();
      table.string('message');
      table.integer('post_id').references('posts.id');
    });
});

afterAll(async () => {
  await knex.destroy();
});

test('app', async () => {
  await User.query().insertGraph({
    name: 'foo',
    posts: [
      {
        title: 'first post',
        comments: [
          { message: 'nice post!' },
          { message: 'thanks for sharing.' },
        ],
      },
    ],
  });
  await User.query().insertGraph({
    name: 'bar',
    posts: [
      {
        title: 'second post',
        comments: [{ message: 'very interesting.' }],
      },
    ],
  });

  const qry = User.query().withGraphFetched('posts');
  const graph = qry.graphExpressionObject();
  const querySpy = jest.spyOn(knex.client, 'query');

  graph.posts.$childNames.push('comments');
  graph.posts = {
    ...graph.posts,
    comments:
      // eslint-disable-next-line
      require('objection').RelationExpression.create('comments').node.comments,
  };
  await qry.clone().clearWithGraph().withGraphFetched(graph);

  const sql = (querySpy.mock.calls[2][1] as Knex.Knex.Sql).toNative();

  expect(querySpy).toHaveBeenCalled();
  expect(querySpy.mock.calls.length).toEqual(3);
  expect(sql.sql).toBe(
    'select `comments`.* from `comments` where `comments`.`post_id` in (?, ?)',
  );
  expect(sql.bindings).toEqual([1, 2]);
});
