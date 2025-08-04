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
  await User.query().insert({ name: 'foo', age: 25 });
  await User.query().insert({ name: 'bar', age: 23 });
  await User.query().insert({ name: 'baz', age: 27 });
  await User.query().insert({ name: 'qux', age: 21 });

  const users = await User.query().findByIds([2, 1, 3]);

  expect(users.length).toEqual(3);
  expect(users[0].id).toEqual(1);
  expect(users[0].name).toEqual('foo');
  expect(users[1].id).toEqual(2);
  expect(users[1].name).toEqual('bar');
  expect(users[2].id).toEqual(3);
  expect(users[2].name).toEqual('baz');
});
