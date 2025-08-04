import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';

let knex: Knex.Knex;

class User extends Model {
  id!: number;
  name!: string;
  age!: number;

  static tableName = 'users';
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

  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('age');
  });
});

afterAll(async () => {
  await knex.destroy();
});

test('app', async () => {
  await User.query().insert({ name: 'foo', age: 25 });
  await User.query().insert({ name: 'bar', age: 27 });

  const querySpy = jest.spyOn(knex.client, 'query');

  await User.query().where('id', 1);
  await User.query().aliasFor('users', 'u').where('u.id', 1);

  const sql1 = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();
  const sql2 = (querySpy.mock.calls[1][1] as Knex.Knex.Sql).toNative();

  expect(sql1.sql).toBe('select `users`.* from `users` where `id` = ?');
  expect(sql1.bindings).toEqual([1]);
  expect(sql2.sql).toBe('select `u`.* from `users` as `u` where `u`.`id` = ?');
  expect(sql2.bindings).toEqual([1]);
});
