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
  const qry1 = em.createQueryBuilder(User).count();
  const qry2 = em.createQueryBuilder(User).count('id');
  const qry3 = em.createQueryBuilder(User).count('id', true);

  expect(qry1.getQuery()).toBe(
    'select count(*) as `count` from `user` as `u0`',
  );
  expect(qry2.getQuery()).toBe(
    'select count(`u0`.`id`) as `count` from `user` as `u0`',
  );
  expect(qry3.getQuery()).toBe(
    'select count(distinct `u0`.`id`) as `count` from `user` as `u0`',
  );
});
