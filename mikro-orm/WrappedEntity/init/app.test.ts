import { Entity, MikroORM, PrimaryKey, Property, wrap } from '@mikro-orm/core';
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
  await em.flush();
  em.clear();

  const user = em.getReference(User, 1);
  const dbQuerySpy = jest.spyOn(em.getConnection(), 'execute');
  const userWrap = wrap(user);

  expect(userWrap.isInitialized()).toBe(false);
  expect(user.name).toBe(undefined);

  await userWrap.init();
  await userWrap.init();
  await userWrap.init();

  expect(user.name).toBe('abcd');
  expect(userWrap.isInitialized()).toBe(true);
  expect(dbQuerySpy).toHaveBeenCalledTimes(3);
});
