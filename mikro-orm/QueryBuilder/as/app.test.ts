import {
  Entity,
  ManyToOne,
  MikroORM,
  PrimaryKey,
  Property,
  Ref,
} from '@mikro-orm/core';
import { EntityManager, SqliteDriver } from '@mikro-orm/sqlite';

let orm: MikroORM;

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;
}

@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @ManyToOne(() => User, { ref: true })
  author!: Ref<User>;
}

beforeAll(async () => {
  const config = {
    entities: [User, Post],
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
  const sub1 = em.createQueryBuilder(User).select(['id']).as('uid');
  const qry1 = em.createQueryBuilder(Post).select([sub1]);

  expect(qry1.getQuery()).toBe(
    'select (select `u0`.`id` from `user` as `u0`) as `uid` from `post` as `p0`',
  );
});
