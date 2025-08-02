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
  await User.query().insert({ name: 'bar', age: 27 });
  await User.query().insert({ name: 'foo', age: 25 });

  const user1 = await User.query().findById(1);
  const user2 = await User.query().findById(2);

  expect(user1).toBeInstanceOf(User);
  expect(user1?.name).toEqual('bar');
  expect(user2).toBeInstanceOf(User);
  expect(user2?.name).toEqual('foo');
});
