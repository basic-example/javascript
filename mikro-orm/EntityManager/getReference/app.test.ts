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
  em.create(User, {
    name: 'bcde',
  });
  await em.flush();
  em.clear();

  const userRef1 = em.getReference(User, 1);
  const userRef2 = em.getReference(User, 2);

  em.remove(userRef1);
  em.flush();

  expect(await em.findOne(User, 1)).toBe(null);
  expect(userRef2.name).toBe(undefined);

  await wrap(userRef2).init();

  expect(userRef2.name).toBe('bcde');
});
