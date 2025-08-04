import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';

let knex: Knex.Knex;

class User extends Model {
  id!: number;
  name!: string;
  age!: number;

  static tableName = 'users';
  static jsonSchema = {
    type: 'object',
    required: ['name', 'age'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
      age: { type: 'integer', minimum: 1 },
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
    table.integer('age');
  });
});

afterAll(async () => {
  await knex.destroy();
});

test('app', async () => {
  const querySpy = jest.spyOn(knex.client, 'query');

  await User.query().deleteById(1);

  const sql1 = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();

  expect(sql1.sql).toEqual('delete from `users` where `users`.`id` = ?');
  expect(sql1.bindings).toEqual([1]);
});
