import { Entity, MikroORM, PrimaryKey, Property } from '@mikro-orm/core';
import { SqliteDriver } from '@mikro-orm/sqlite';

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
  const em = orm.em.fork();
  const user = new User();
  user.name = 'John Doe';
  await em.persistAndFlush(user);

  const userFromDb = await em.findOne(User, { name: 'John Doe' });
  expect(userFromDb).toBeDefined();
  expect(userFromDb?.name).toBe('John Doe');
});
