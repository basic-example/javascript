import {
  Entity,
  MikroORM,
  PrimaryKey,
  Property,
  ScalarRef,
} from '@mikro-orm/core';
import { EntityManager, SqliteDriver } from '@mikro-orm/sqlite';

let orm: MikroORM;
let queryLog: string;

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
    debug: true,
    logger: (log) => {
      const msg = log
        // eslint-disable-next-line no-control-regex
        .replaceAll(new RegExp('\\x1b\\[[0-9;]*m', 'g'), '')
        .replace(/^\[.+\] /, '')
        .replace(/ \[.+\]$/, '');
      if (msg.match(/select .+ from /)) {
        queryLog = msg;
      }
    },
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

  expect(queryLog).toBe(
    'select `p0`.`id`, `p0`.`title` from `post` as `p0` where `p0`.`id` = 1 limit 1',
  );

  const dbQuerySpy = jest.spyOn(em.getConnection(), 'execute');
  await post1.content.load();
  await post1.content.load();
  await post1.content.load();

  expect(queryLog).toBe(
    'select `p0`.`id`, `p0`.`content` from `post` as `p0` where `p0`.`id` in (1)',
  );
  expect(dbQuerySpy).toHaveBeenCalledTimes(1);
});
