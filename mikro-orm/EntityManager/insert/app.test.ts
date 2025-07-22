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
  const beforeInsertCount = await em.count(User);
  const insertId1 = await em.insert(User, {
    name: 'abcd',
  });
  const insertId2 = await em.insert(User, {
    name: 'abcd',
  });
  const afterInsertCount = await em.count(User);

  expect(beforeInsertCount).toBe(0);
  expect(afterInsertCount).toBe(2);
  expect(insertId1).toBe(1);
  expect(insertId2).toBe(2);
});
