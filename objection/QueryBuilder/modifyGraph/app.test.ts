import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';

let knex: Knex.Knex;

class User extends Model {
  id!: number;
  name!: string;
  posts?: Post[];

  static tableName = 'users';
  static relationMappings = () => ({
    posts: {
      relation: Model.HasManyRelation,
      modelClass: Post,
      join: {
        from: 'users.id',
        to: 'posts.user_id',
      },
    },
  });
}

class Post extends Model {
  id!: number;
  title!: string;
  userId!: number;
  comments?: Comment[];
  images?: Image[];

  static tableName = 'posts';
  static relationMappings = () => ({
    comments: {
      relation: Model.HasManyRelation,
      modelClass: Comment,
      join: {
        from: 'posts.id',
        to: 'comments.post_id',
      },
    },
    images: {
      relation: Model.HasManyRelation,
      modelClass: Image,
      join: {
        from: 'posts.id',
        to: 'images.post_id',
      },
    },
  });
}

class Comment extends Model {
  id!: number;
  message!: string;
  postId!: number;

  static tableName = 'comments';
}

class Image extends Model {
  id!: number;
  url!: string;
  postId!: number;

  static tableName = 'images';
}

beforeAll(async () => {
  knex = Knex({
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
    useNullAsDefault: true,
    ...knexSnakeCaseMappers(),
  });
  Model.knex(knex);

  await knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
    })
    .createTable('posts', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.integer('user_id').references('users.id');
    })
    .createTable('comments', (table) => {
      table.increments('id').primary();
      table.string('message');
      table.integer('post_id').references('posts.id');
    })
    .createTable('images', (table) => {
      table.increments('id').primary();
      table.string('url');
      table.integer('post_id').references('posts.id');
    });
});

afterAll(async () => {
  await knex.destroy();
});

test('app', async () => {
  await User.query().insertGraph({
    name: 'foo',
    posts: [
      {
        title: 'first post',
        comments: [
          { message: 'nice post!' },
          { message: 'thanks for sharing.' },
        ],
        images: [
          {
            url: 'https://placehold.co/300x200',
          },
          {
            url: 'https://placehold.co/600x400',
          },
        ],
      },
    ],
  });
  await User.query().insertGraph({
    name: 'bar',
    posts: [
      {
        title: 'second post',
        comments: [{ message: 'very interesting.' }],
        images: [
          {
            url: 'https://placehold.co/300x200',
          },
        ],
      },
    ],
  });

  const querySpy = jest.spyOn(knex.client, 'query');

  await User.query()
    .withGraphJoined('posts.[comments,images]')
    .modifyGraph('posts', (builder) => {
      builder.where('title', 'first post');
    })
    .modifyGraph('posts.[comments,images]', (builder) => {
      builder.where('id', '>=', 1);
    })
    .modifyGraph('posts.images', 'orderById')
    .modifiers({
      orderById(builder) {
        builder.orderBy('id', 'desc');
      },
    });

  const sql = (querySpy.mock.calls[4][1] as Knex.Knex.Sql).toNative();

  expect(querySpy).toHaveBeenCalled();
  expect(querySpy.mock.calls.length).toEqual(5);
  expect(sql.sql).toEqual(
    'select `users`.`id` as `id`, `users`.`name` as `name`, `posts`.`id` as `posts:id`, `posts`.`title` as `posts:title`, `posts`.`user_id` as `posts:user_id`, `posts:comments`.`id` as `posts:comments:id`, `posts:comments`.`message` as `posts:comments:message`, `posts:comments`.`post_id` as `posts:comments:post_id`, `posts:images`.`id` as `posts:images:id`, `posts:images`.`url` as `posts:images:url`, `posts:images`.`post_id` as `posts:images:post_id` from `users` left join (select `posts`.* from `posts` where `title` = ?) as `posts` on `posts`.`user_id` = `users`.`id` left join (select `comments`.* from `comments` where `id` >= ?) as `posts:comments` on `posts:comments`.`post_id` = `posts`.`id` left join (select `images`.* from `images` where `id` >= ? order by `id` desc) as `posts:images` on `posts:images`.`post_id` = `posts`.`id`',
  );
  expect(sql.bindings).toEqual(['first post', 1, 1]);
});
