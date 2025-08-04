import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';

let knex: Knex.Knex;

class User extends Model {
  id!: number;
  name!: string;

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
  });
});

afterAll(async () => {
  await knex.destroy();
});

test('app', async () => {
  await User.query().insert({ name: 'foo' });
  await User.query().insert({ name: 'bar' });
  await User.query().insert({ name: 'baz' });

  const querySpy = jest.spyOn(knex.client, 'query');

  await User.query().patchAndFetchById(1, {
    name: 'qux',
  });

  const sql1 = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();
  const sql2 = (querySpy.mock.calls[1][1] as Knex.Knex.Sql).toNative();

  expect(querySpy).toHaveBeenCalled();
  expect(querySpy.mock.calls.length).toEqual(2);
  expect(sql1.sql).toEqual(
    'update `users` set `name` = ? where `users`.`id` = ?',
  );
  expect(sql1.bindings).toEqual(['qux', 1]);
  expect(sql2.sql).toEqual(
    'select `users`.* from `users` where `users`.`id` = ?',
  );
  expect(sql2.bindings).toEqual([1]);

  await User.query().where('name', 'abcd').patchAndFetchById(1234, {
    name: 'qux',
  });

  const sql3 = (querySpy.mock.calls[2][1] as Knex.Knex.Sql).toNative();

  expect(querySpy.mock.calls.length).toEqual(3);
  expect(sql3.sql).toEqual(
    'update `users` set `name` = ? where `name` = ? and `users`.`id` = ?',
  );
  expect(sql3.bindings).toEqual(['qux', 'abcd', 1234]);
});
