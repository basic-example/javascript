import {
  BaseEntity,
  Entity,
  MikroORM,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { SqliteDriver } from '@mikro-orm/sqlite';

let orm: MikroORM;

@Entity()
export class User extends BaseEntity {
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
  const user = new User();

  user.assign({
    name: 'abcd',
  });

  expect(user.toObject()).toEqual({ name: 'abcd' });
});
