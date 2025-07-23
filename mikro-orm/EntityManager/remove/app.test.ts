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

  const user1 = await em.findOneOrFail(User, 1);
  const user2 = em.getReference(User, 2);

  em.remove(user1);
  em.remove(user2);
  await em.flush();

  expect(await em.findOne(User, 1)).toBe(null);
  expect(await em.findOne(User, 2)).toBe(null);
});
