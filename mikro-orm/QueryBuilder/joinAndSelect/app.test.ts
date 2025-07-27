import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  MikroORM,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { EntityManager, JoinType, SqliteDriver } from '@mikro-orm/sqlite';

let orm: MikroORM;

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @OneToMany(() => Book, (book) => book.author)
  books = new Collection<Book>(this);
}

@Entity()
export class Book {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @ManyToOne(() => User)
  author!: User;

  @ManyToMany(() => Tag, (tag) => tag.books, { owner: true })
  tags = new Collection<Tag>(this);
}

@Entity()
export class Tag {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToMany(() => Book, (book) => book.tags)
  books = new Collection<Book>(this);
}

beforeAll(async () => {
  const config = {
    entities: [User, Book, Tag],
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
    .createQueryBuilder(User, 'u')
    .select('*')
    .joinAndSelect('u.books', 'b')
    .joinAndSelect('b.tags', 't');

  await expect(qry1).resolves.not.toThrow();
  expect(qry1.getQuery()).toBe(
    'select `u`.*, `b`.`id` as `b__id`, `b`.`title` as `b__title`, `b`.`author_id` as `b__author_id`, `t`.`id` as `t__id`, `t`.`name` as `t__name` from `user` as `u` inner join `book` as `b` on `u`.`id` = `b`.`author_id` inner join `book_tags` as `b1` on `b`.`id` = `b1`.`book_id` inner join `tag` as `t` on `b1`.`tag_id` = `t`.`id`',
  );

  const qry2 = em
    .createQueryBuilder(User, 'u')
    .select('*')
    .joinAndSelect('u.books', 'b', {}, JoinType.leftJoin)
    .joinAndSelect('b.tags', 't', {}, JoinType.leftJoin);

  await expect(qry2).resolves.not.toThrow();
  expect(qry2.getQuery()).toBe(
    'select `u`.*, `b`.`id` as `b__id`, `b`.`title` as `b__title`, `b`.`author_id` as `b__author_id`, `t`.`id` as `t__id`, `t`.`name` as `t__name` from `user` as `u` left join `book` as `b` on `u`.`id` = `b`.`author_id` left join `book_tags` as `b1` on `b`.`id` = `b1`.`book_id` left join `tag` as `t` on `b1`.`tag_id` = `t`.`id`',
  );
});
