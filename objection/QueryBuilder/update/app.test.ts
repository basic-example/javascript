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
  await User.query().insert({ name: 'bar', age: 27 });
  await User.query().insert({ name: 'foo', age: 25 });

  const qry1 = User.query().update({ name: 'zoo', age: 1 });
  const qry2 = User.query().update({ name: 'zoo' });
  const qry3 = User.query().update({ name: 'zoo', age: -1 });

  expect(qry1.toKnexQuery().toString()).toBe(
    "update `users` set `name` = 'zoo', `age` = 1",
  );
  await expect(qry1).resolves.not.toThrow();
  await expect(qry2).rejects.toThrow();
  await expect(qry3).rejects.toThrow();
});
