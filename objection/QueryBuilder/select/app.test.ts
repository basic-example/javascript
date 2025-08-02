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
  await User.query().insert({ name: 'Bar', age: 27 });
  await User.query().insert({ name: 'Foo', age: 25 });

  const qry1 = User.query().select('id');
  const qry2 = User.query().select('name');
  const qry3 = User.query().select('id', 'name');

  expect(qry1.toKnexQuery().toString()).toEqual('select `id` from `users`');
  expect(qry2.toKnexQuery().toString()).toEqual('select `name` from `users`');
  expect(qry3.toKnexQuery().toString()).toEqual(
    'select `id`, `name` from `users`',
  );
});
