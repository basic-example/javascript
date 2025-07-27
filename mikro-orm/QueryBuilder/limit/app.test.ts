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
  em.create(User, {
    name: 'cdef',
  });
  em.create(User, {
    name: 'defg',
  });

  const result = await em.createQueryBuilder(User).limit(2, 1);

  expect(result).toBeInstanceOf(Array);
  expect(result.length).toBe(2);
  expect(result[0]).toBeInstanceOf(User);
  expect(result[1]).toBeInstanceOf(User);
  expect(result[0].name).toBe('bcde');
  expect(result[1].name).toBe('cdef');
});
