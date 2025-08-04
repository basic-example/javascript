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

  static tableName = 'posts';
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
    });
});

afterAll(async () => {
  await knex.destroy();
});

test('app', async () => {
  const querySpy = jest.spyOn(knex.client, 'query');

  await User.query().insertGraph({
    name: 'foo',
    posts: [{ title: 'first post' }, { title: 'second post' }],
  });

  const sql1 = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();
  const sql2 = (querySpy.mock.calls[1][1] as Knex.Knex.Sql).toNative();
  const sql3 = (querySpy.mock.calls[2][1] as Knex.Knex.Sql).toNative();

  expect(querySpy).toHaveBeenCalled();
  expect(querySpy.mock.calls.length).toEqual(3);
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
});
