import knex, { Knex } from 'knex';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: ':memory:',
  },
  useNullAsDefault: true,
});

beforeAll(async () => {
  await db.schema.createTable('users', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.string('name');
    table.integer('age');
  });

  await db<{
    id: number;
    name: string;
    age: number;
  }>('users').insert([
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
  ]);
});

afterAll(async () => {
  await db.destroy();
});

test('app', async () => {
  const sql = db.select('*').from('users').where('id', 1).toSQL();

  expect(sql.bindings).toEqual([1]);
  expect(sql.sql).toEqual('select * from `users` where `id` = ?');
  expect(sql.toNative().bindings).toEqual([1]);
  expect(sql.toNative().sql).toEqual('select * from `users` where `id` = ?');
});
