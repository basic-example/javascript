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

  const [result, count] = await em.createQueryBuilder(User).getResultAndCount();

  expect(result).toBeInstanceOf(Array);
  expect(result[0]).toBeInstanceOf(User);
  expect(result[1]).toBeInstanceOf(User);
  expect(result[0].name).toBe('abcd');
  expect(result[1].name).toBe('bcde');
  expect(count).toBe(2);
});
