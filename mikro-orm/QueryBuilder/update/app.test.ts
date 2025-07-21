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
  const qb1 = em.createQueryBuilder(User).update({ name: 'abcd' });
  const qb2 = em
    .createQueryBuilder(User)
    .update({ name: 'abcd' })
    .where({ id: 1 });

  expect(qb1.getQuery()).toEqual('update `user` set `name` = ?');
  expect(qb1.getParams()).toEqual(['abcd']);

  expect(qb2.getQuery()).toEqual('update `user` set `name` = ? where `id` = ?');
  expect(qb2.getParams()).toEqual(['abcd', 1]);
});
