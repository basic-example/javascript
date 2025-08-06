import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';

let knex: Knex.Knex;

class User extends Model {
  id!: number;
  name!: string;

  static tableName = 'users';
  static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
    },
  };
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
  const result1 = await User.query().page(0, 2);
  const result2 = await User.query().page(1, 2);
  const sql1 = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();
  const sql2 = (querySpy.mock.calls[1][1] as Knex.Knex.Sql).toNative();
  const sql3 = (querySpy.mock.calls[2][1] as Knex.Knex.Sql).toNative();
  const sql4 = (querySpy.mock.calls[3][1] as Knex.Knex.Sql).toNative();

  expect(querySpy).toHaveBeenCalled();
  expect(querySpy.mock.calls.length).toEqual(4);
  expect(result1.total).toEqual(3);
  expect(result2.total).toEqual(3);
  expect(result1.results[0].name).toEqual('foo');
  expect(result2.results[0].name).toEqual('baz');
  expect(sql1.sql).toEqual('select `users`.* from `users` limit ?');
  expect(sql1.bindings).toEqual([2]);
  expect(sql2.sql).toEqual(
    'select count(*) as `count` from (select `users`.* from `users`) as `temp`',
  );
  expect(sql2.bindings).toEqual([]);
  expect(sql3.sql).toEqual('select `users`.* from `users` limit ? offset ?');
  expect(sql3.bindings).toEqual([2, 2]);
  expect(sql4.sql).toEqual(
    'select count(*) as `count` from (select `users`.* from `users`) as `temp`',
  );
  expect(sql4.bindings).toEqual([]);
});
