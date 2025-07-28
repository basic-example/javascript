import {
  BaseEntity,
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
export class User extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @OneToMany(() => Post, (post) => post.author)
  posts = new Collection<Post>(this);
}

@Entity()
export class Post extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @ManyToOne(() => User)
  author!: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments = new Collection<Comment>(this);
}

@Entity()
export class Comment extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  content!: string;

  @ManyToOne(() => Post)
  post!: Post;
}

beforeAll(async () => {
  const config = {
    entities: [User, Post, Comment],
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
        comments: [
          { content: 'Nice post!' },
          { content: 'Thanks for sharing.' },
        ],
      },
      {
        title: 'Second Post',
        comments: [{ content: 'Interesting read.' }],
      },
    ],
  });
  await em.flush();
  em.clear();

  const user = (await em.findOne(User, 1)) as User;
  await user.populate(['posts.comments']);

  expect(user.posts).toBeInstanceOf(Collection);
  expect(user.posts.length).toEqual(2);
  expect(user.posts[0].comments).toBeInstanceOf(Collection);
  expect(user.posts[0].comments.length).toEqual(2);
  expect(user.posts[1].comments).toBeInstanceOf(Collection);
  expect(user.posts[1].comments.length).toEqual(1);
});
