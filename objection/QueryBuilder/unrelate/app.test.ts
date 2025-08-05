import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';

let knex: Knex.Knex;

export class User extends Model {
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

export class Post extends Model {
  id!: number;
  title!: string;
  userId!: number;

  user?: User;

  static tableName = 'posts';

  static relationMappings = () => ({
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'posts.user_id',
        to: 'users.id',
      },
    },
  });
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
      table.integer('age');
    })
    .createTable('posts', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.integer('user_id').references('users.id');
    });
});

afterAll(async () => {
  await knex.destroy();
});

test('app', async () => {
  const user1 = await User.query().insert({ name: 'foo' });
  const user2 = await User.query().insert({ name: 'bar' });
  const post1 = await Post.query().insert({ title: 'hello1', user: user2 });
  await Post.query().insert({ title: 'hello2', user: user1 });

  const querySpy = jest.spyOn(knex.client, 'query');

  await user1.$relatedQuery('posts').unrelate();
  await post1.$relatedQuery('user').unrelate();

  const sql1 = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();
  const sql2 = (querySpy.mock.calls[1][1] as Knex.Knex.Sql).toNative();

  expect(querySpy.mock.calls.length).toEqual(2);

  expect(sql1.sql).toBe(
    'update `posts` set `user_id` = ? where `posts`.`user_id` in (?)',
  );
  expect(sql1.bindings).toEqual([null, 1]);
  expect(sql2.sql).toBe(
    'update `posts` set `user_id` = ? where `posts`.`id` in (?)',
  );
  expect(sql2.bindings).toEqual([null, 1]);
});
