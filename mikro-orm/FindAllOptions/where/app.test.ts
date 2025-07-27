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

  const result1 = await em.findAll(User, {
    where: {
      name: 'abcd',
    },
  });

  expect(result1).toBeInstanceOf(Array);
  expect(result1.length).toEqual(1);
  expect(result1[0].name).toEqual('abcd');

  const result2 = await em.findAll(User, {
    where: {
      $and: [
        { id: { $in: [1, 2, 7] } },
        { id: { $nin: [3, 4] } },
        { id: { $gt: 5 } },
      ],
      $or: [
        { id: { $lt: 10 } },
        { id: { $gte: 7 } },
        { id: { $lte: 8 } },
        { id: { $ne: 9 } },
        { $not: { id: { $eq: 100 } } },
        { $and: [{ id: 100 }, { id: 101 }] },
      ],
    },
  });

  expect(result2).toBeInstanceOf(Array);
  expect(result2.length).toEqual(0);
});
