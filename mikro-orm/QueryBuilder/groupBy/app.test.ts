import {
  Entity,
  ManyToOne,
  MikroORM,
  PrimaryKey,
  Property,
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

  @Property()
  category!: string;

  @Property()
  createdAt: Date = new Date();

  @Property()
  content!: string;

  @ManyToOne(() => User)
  author!: User;
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
  const qry1 = em
    .createQueryBuilder(Post)
    .groupBy(['author_id', 'category'])
    .count();

  await expect(qry1).resolves.not.toThrow();
  expect(qry1.getQuery()).toBe(
    'select count(*) as `count` from `post` as `p0` group by `p0`.`author_id`, `p0`.`category`',
  );
});
