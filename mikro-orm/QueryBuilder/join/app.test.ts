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

  const qry1 = em.createQueryBuilder(Post, 'p0').join('p0.author', 'u0');
  const qry2 = em
    .createQueryBuilder(Post, 'p0')
    .join(em.createQueryBuilder(User), 'u0', { 'u0.id': 'p0.id' });

  expect(qry1.getQuery()).toEqual(
    'select `p0`.* from `post` as `p0` inner join `user` as `u0` on `p0`.`author_id` = `u0`.`id`',
  );
  expect(qry2.getQuery()).toEqual(
    'select `p0`.* from `post` as `p0` inner join (select `u0`.* from `user` as `u0`) as `u0` on `u0`.`id` = ?',
  );
  expect(qry2.getParams()).toEqual(['p0.id']);
});
