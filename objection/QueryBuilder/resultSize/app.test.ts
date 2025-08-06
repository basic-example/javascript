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
  const result1 = await User.query().where('id', '>=', 1).resultSize();
  const result2 = await User.query().count().resultSize();

  const sql1 = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();
  const sql2 = (querySpy.mock.calls[1][1] as Knex.Knex.Sql).toNative();

  expect(querySpy).toHaveBeenCalled();
  expect(querySpy.mock.calls.length).toEqual(2);
  expect(result1).toEqual(3);
  expect(result2).toEqual(1);
  expect(sql1.sql).toEqual(
    'select count(*) as `count` from (select `users`.* from `users` where `id` >= ?) as `temp`',
  );
  expect(sql1.bindings).toEqual([1]);
  expect(sql2.sql).toEqual(
    'select count(*) as `count` from (select count(*) from `users`) as `temp`',
  );
  expect(sql2.bindings).toEqual([]);
});
