import {
  Collection,
  Entity,
  ManyToOne,
  MikroORM,
  OneToMany,
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
  @OneToMany(() => Post, (post) => post.author)
  posts = new Collection<Post>(this);
}

@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @ManyToOne(() => User)
  author!: User;
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
    name: 'Alice',
    posts: [
      {
        title: 'First Post',
      },
      {
        title: 'Second Post',
      },
    ],
  });
  await em.flush();
  em.clear();

  const subQ = em.createQueryBuilder(User).select('id');
  const qb1 = em.createQueryBuilder(Post).where({
    author_id: {
      $in: subQ.getKnexQuery(),
    },
  });

  await expect(qb1.getResultList()).resolves.not.toThrow();
  expect(qb1.getQuery()).toBe(
    'select `p0`.* from `post` as `p0` where `p0`.`author_id` in (select `u0`.`id` from `user` as `u0`)',
  );

  const qb2 = em.createQueryBuilder(Post).where({
    author_id: {
      $in: subQ,
    },
  });

  await expect(qb2.getResultList()).rejects.toThrow();
});
