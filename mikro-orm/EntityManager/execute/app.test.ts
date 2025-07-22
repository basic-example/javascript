import { Entity, MikroORM, PrimaryKey, Property } from '@mikro-orm/core';
import { EntityManager, SqliteDriver } from '@mikro-orm/sqlite';

let orm: MikroORM;

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;
}

beforeAll(async () => {
  const config = {
    entities: [User],
    dbName: ':memory:',
    driver: SqliteDriver,
    allowGlobalContext: true,
  } as Parameters<typeof MikroORM.init<SqliteDriver>>[0];
  orm = await MikroORM.init(config);
  await orm.getSchemaGenerator().createSchema();
});

afterAll(async () => {
  await orm.close(true);
});

test('app', async () => {
  const em = orm.em as EntityManager;

  em.create(User, {
    name: 'abcd',
  });
  em.create(User, {
    name: 'bcde',
  });
  await em.flush();

  const result = await em.execute('select * from user');

  expect(result.length).toBe(2);
  expect(result[0]).not.toBeInstanceOf(User);
  expect(result[1]).not.toBeInstanceOf(User);
  expect(result[0].name).toBe('abcd');
  expect(result[1].name).toBe('bcde');
});
