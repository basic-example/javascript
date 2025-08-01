import {
  Collection,
  Entity,
  ManyToOne,
  MikroORM,
  OneToMany,
  PrimaryKey,
  Property,
  raw,
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
  em.create(User, {
    name: 'Luna',
    posts: [
      {
        title: 'First Post',
      },
    ],
  });
  await em.flush();
  em.clear();

  const subQ = em.createQueryBuilder(User).select('id').where({ id: 1 });
  const user1Posts = await em.findAll(Post, {
    where: {
      author: {
        id: {
          $in: raw(subQ.getQuery(), subQ.getParams()),
        },
      },
    },
  });

  expect(await em.count(Post)).toEqual(3);
  expect(user1Posts.length).toEqual(2);
});
