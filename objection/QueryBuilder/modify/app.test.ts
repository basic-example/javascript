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
  const querySpy = jest.spyOn(knex.client, 'query');

  await User.query()
    .modifiers({
      customSelect: (builder) => {
        builder.select('id', 'name');
      },
    })
    .modify('customSelect');

  const sql = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();

  expect(sql.sql).toEqual('select `id`, `name` from `users`');
});
