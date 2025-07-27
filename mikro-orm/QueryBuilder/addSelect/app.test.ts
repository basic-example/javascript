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

  const sql1 = await em.createQueryBuilder(User, 'u0').getQuery();

  expect(sql1).toBe('select `u0`.* from `user` as `u0`');

  const sql2 = await em
    .createQueryBuilder(User, 'u0')
    .addSelect(['name'])
    .getQuery();

  expect(sql2).toBe('select `u0`.`name` from `user` as `u0`');

  const sql3 = await em
    .createQueryBuilder(User, 'u0')
    .select(['id'])
    .addSelect(['name'])
    .getQuery();

  expect(sql3).toBe('select `u0`.`id`, `u0`.`name` from `user` as `u0`');
});
