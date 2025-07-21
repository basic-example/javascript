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
  const sql1 = em.createQueryBuilder(User).select('*').getQuery();
  const sql2 = em.createQueryBuilder(User).select(['id', 'name']).getQuery();

  expect(sql1).toBe('select `u0`.* from `user` as `u0`');
  expect(sql2).toBe('select `u0`.`id`, `u0`.`name` from `user` as `u0`');
});
