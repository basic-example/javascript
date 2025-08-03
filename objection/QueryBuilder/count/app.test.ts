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
  await User.query().insert({ name: 'foo', age: 24 });
  await User.query().insert({ name: 'bar', age: 25 });
  await User.query().insert({ name: 'baz', age: 26 });

  const result = await User.query().count().castTo<[{ 'count(*)': number }]>();

  expect(result[0]['count(*)']).toEqual(3);
});
