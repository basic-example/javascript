import {
  Entity,
  MikroORM,
  PrimaryKey,
  Property,
  ScalarRef,
} from '@mikro-orm/core';
import { EntityManager, SqliteDriver } from '@mikro-orm/sqlite';

let orm: MikroORM;

@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property({ lazy: true, ref: true })
  content!: ScalarRef<string>;
}

beforeAll(async () => {
  const config = {
    entities: [Post],
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
  const post = em.create(Post, {
    title: 'hello world',
    content: 'aaaaaaaaaaaaaaaaa',
  });
  await em.flush();
  em.clear();

  const post1 = await em.findOneOrFail(Post, post.id);

  expect(post1.content.unwrap()).toBe(undefined);

  await post1.content.load();

  expect(post1.content.unwrap()).toBe('aaaaaaaaaaaaaaaaa');
});
