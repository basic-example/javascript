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
  const beforeInsertCount = await em.createQueryBuilder(User).count();
  const result = await em.createQueryBuilder(User).insert({
    name: 'abcd',
  });
  const afterInsertCount = await em.createQueryBuilder(User).count();

  expect(beforeInsertCount).toBe(0);
  expect(afterInsertCount).toBe(1);
  expect(result.affectedRows).toBe(1);
  expect(result.insertId).toBe(1);
  expect(result.rows).toEqual([{ id: 1 }]);
});
