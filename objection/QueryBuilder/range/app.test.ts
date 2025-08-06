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
  await User.query().insert({ name: 'qux' });

  const querySpy = jest.spyOn(knex.client, 'query');
  const result = await User.query().range(1, 2);
  const sql1 = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();
  const sql2 = (querySpy.mock.calls[1][1] as Knex.Knex.Sql).toNative();

  expect(querySpy).toHaveBeenCalled();
  expect(querySpy.mock.calls.length).toEqual(2);
  expect(result.total).toEqual(4);
  expect(result.results.length).toEqual(2);
  expect(result.results[0].id).toEqual(2);
  expect(result.results[1].id).toEqual(3);
  expect(sql1.sql).toBe('select `users`.* from `users` limit ? offset ?');
  expect(sql1.bindings).toEqual([2, 1]);
  expect(sql2.sql).toBe(
    'select count(*) as `count` from (select `users`.* from `users`) as `temp`',
  );
  expect(sql2.bindings).toEqual([]);
});
