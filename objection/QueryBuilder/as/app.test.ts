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
  const querySpy = jest.spyOn(knex.client, 'query');

  await Model.query()
    .from(User.query().select('id', 'name').as('u'))
    .select('name');

  const sql1 = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();

  expect(sql1.sql).toBe(
    'select `name` from (select `id`, `name` from `users`) as `u`',
  );
});
