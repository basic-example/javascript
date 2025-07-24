import {
  Collection,
  Entity,
  ManyToOne,
  MikroORM,
  OneToMany,
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

  @OneToMany(() => Post, (post) => post.author)
  posts = new Collection<Post>(this);
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
  const user = em.create(User, { name: 'abcd' });
  const post = em.create(Post, { title: 'hello world', author: user });

  await em.flush();
  em.clear();

  const post1 = await em.findOneOrFail(Post, post.id);
  const dbQuerySpy = jest.spyOn(em.getConnection(), 'execute');

  await post1.author.load();
  await post1.author.load();
  await post1.author.load();

  expect(dbQuerySpy).toHaveBeenCalledTimes(1);
  expect((await post1.author.load())?.name).toBe('abcd');
});
