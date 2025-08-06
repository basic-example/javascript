import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
let knex: Knex.Knex;

export class User extends Model {
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

export class Post extends Model {
  id!: number;
  title!: string;
  userId!: number;

  user?: User;

  static tableName = 'posts';

  static relationMappings = () => ({
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'posts.user_id',
        to: 'users.id',
      },
    },
  });
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
    });
});

afterAll(async () => {
  await knex.destroy();
});

test('app', async () => {
  await User.query().insertGraph({
    name: 'foo',
    posts: [{ title: 'first post' }],
  });

  const sub = User.query().where('id', 1);
  const qry = User.relatedQuery('posts').for(sub);
  const querySpy = jest.spyOn(knex.client, 'query');

  await qry.unrelate();

  const sql = (querySpy.mock.calls[0][1] as Knex.Knex.Sql).toNative();

  expect(sql.sql).toEqual(
    'update `posts` set `user_id` = ? where `posts`.`user_id` in (select `users`.`id` from `users` where `id` = ?)',
  );
  expect(sql.bindings).toEqual([null, 1]);
});
