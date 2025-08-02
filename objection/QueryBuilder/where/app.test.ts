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
  await User.query().insert({ name: 'Bar', age: 27 });
  await User.query().insert({ name: 'Foo', age: 25 });

  const qry1 = User.query().where('id', 1);
  const qry2 = User.query().where('id', 'abcd');
  const qry3 = User.query().where('id', '>', 1);
  const qry4 = User.query().where('name', -1234);

  expect(qry1.toKnexQuery().toString()).toEqual(
    'select `users`.* from `users` where `id` = 1',
  );
  expect(qry2.toKnexQuery().toString()).toEqual(
    "select `users`.* from `users` where `id` = 'abcd'",
  );
  expect(qry3.toKnexQuery().toString()).toEqual(
    'select `users`.* from `users` where `id` > 1',
  );
  expect(qry4.toKnexQuery().toString()).toEqual(
    'select `users`.* from `users` where `name` = -1234',
  );
  await expect(qry1).resolves.not.toThrow();
  await expect(qry2).resolves.not.toThrow();
  await expect(qry3).resolves.not.toThrow();
  await expect(qry4).resolves.not.toThrow();
});
