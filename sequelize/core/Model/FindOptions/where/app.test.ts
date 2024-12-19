import {
  CreationOptional,
  DataTypes,
  Model,
  NonAttribute,
  Sequelize,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  BelongsTo,
  HasMany,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

export class User extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;
}

class Post extends Model {
  @Attribute(DataTypes.INTEGER)
  @AutoIncrement
  @PrimaryKey
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare title: string;

  @HasMany(() => Comment, {
    foreignKey: "postId",
    inverse: {
      as: "post",
    },
  })
  declare comments?: NonAttribute<Comment[]>;
}

class Comment extends Model {
  @Attribute(DataTypes.INTEGER)
  @AutoIncrement
  @PrimaryKey
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare message: string;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare postId: number;

  @BelongsTo(() => Post, {
    foreignKey: "postId",
    inverse: {
      as: "comments",
      type: "hasMany",
    },
  })
  declare post?: NonAttribute<Post>;
}

let query;
const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: ":memory:",
  models: [User, Post, Comment],
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  define: {
    timestamps: false,
  },
  logging: (q, p) => {
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
});

describe("sequelize/Model/FindOptions/where", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("where/basic", async () => {
    await User.sync({ force: true });
    const users = await User.findAll({
      where: {
        name: "aaa",
      },
    });
    expect(query).toBe(
      "SELECT `id`, `name` FROM `Users` AS `User` WHERE `User`.`name` = 'aaa'",
    );
  });
  test("where/associations", async () => {
    await Post.sync({ force: true });
    await Comment.sync({ force: true });

    await Post.findAll({
      include: [Post.associations.comments],
      where: {
        "$comments.message$": "aaa",
      },
    });

    expect(query).toBe(
      "SELECT `Post`.`id`, `Post`.`title`, `comments`.`id` AS `comments.id`, `comments`.`message` AS `comments.message`, `comments`.`postId` AS `comments.postId` FROM `Posts` AS `Post` LEFT OUTER JOIN `Comments` AS `comments` ON `Post`.`id` = `comments`.`postId` WHERE `comments`.`message` = 'aaa'",
    );
  });
});
