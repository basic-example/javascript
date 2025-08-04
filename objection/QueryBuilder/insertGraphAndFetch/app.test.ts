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
  const querySpy = jest.spyOn(knex.client, 'query');

  await User.query().insertGraphAndFetch({
    name: 'foo',
    posts: [
      {
        title: 'first post',
        comments: [
          { message: 'nice post!' },
          { message: 'thanks for sharing.' },
        ],
      },
      {
        title: 'second post',
        comments: [{ message: 'very interesting.' }],
      },
    ],
  });

  const sql1 = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();
  const sql2 = (querySpy.mock.calls[1][1] as Knex.Knex.Sql).toNative();
  const sql3 = (querySpy.mock.calls[2][1] as Knex.Knex.Sql).toNative();
  const sql4 = (querySpy.mock.calls[3][1] as Knex.Knex.Sql).toNative();
  const sql5 = (querySpy.mock.calls[4][1] as Knex.Knex.Sql).toNative();
  const sql6 = (querySpy.mock.calls[5][1] as Knex.Knex.Sql).toNative();
  const sql7 = (querySpy.mock.calls[6][1] as Knex.Knex.Sql).toNative();
  const sql8 = (querySpy.mock.calls[7][1] as Knex.Knex.Sql).toNative();
  const sql9 = (querySpy.mock.calls[8][1] as Knex.Knex.Sql).toNative();

  expect(querySpy).toHaveBeenCalled();
  expect(querySpy.mock.calls.length).toEqual(9);
  expect(sql1.sql).toEqual('insert into `users` (`name`) values (?)');
  expect(sql1.bindings).toEqual(['foo']);
  expect(sql2.sql).toEqual(
    'insert into `posts` (`title`, `user_id`) values (?, ?)',
  );
  expect(sql2.bindings).toEqual(['first post', 1]);
  expect(sql3.sql).toEqual(
    'insert into `posts` (`title`, `user_id`) values (?, ?)',
  );
  expect(sql3.bindings).toEqual(['second post', 1]);
  expect(sql4.sql).toEqual(
    'insert into `comments` (`message`, `post_id`) values (?, ?)',
  );
  expect(sql4.bindings).toEqual(['nice post!', 1]);
  expect(sql5.sql).toEqual(
    'insert into `comments` (`message`, `post_id`) values (?, ?)',
  );
  expect(sql5.bindings).toEqual(['thanks for sharing.', 1]);
  expect(sql6.sql).toEqual(
    'insert into `comments` (`message`, `post_id`) values (?, ?)',
  );
  expect(sql6.bindings).toEqual(['very interesting.', 2]);
  expect(sql7.sql).toEqual(
    'select `users`.* from `users` where `users`.`id` in (?)',
  );
  expect(sql7.bindings).toEqual([1]);
  expect(sql8.sql).toEqual(
    'select `posts`.* from `posts` where `posts`.`user_id` in (?)',
  );
  expect(sql8.bindings).toEqual([1]);
  expect(sql9.sql).toEqual(
    'select `comments`.* from `comments` where `comments`.`post_id` in (?, ?)',
  );
  expect(sql9.bindings).toEqual([1, 2]);
});
