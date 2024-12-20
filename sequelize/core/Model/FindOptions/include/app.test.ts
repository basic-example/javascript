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
  models: [Post, Comment],
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  define: {
    timestamps: false,
  },
  logging: (q) => {
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
});
const expectQuery =
  "SELECT `Post`.`id`, `Post`.`title`, `comments`.`id` AS `comments.id`, `comments`.`message` AS `comments.message`, `comments`.`postId` AS `comments.postId` FROM `Posts` AS `Post` LEFT OUTER JOIN `Comments` AS `comments` ON `Post`.`id` = `comments`.`postId`";

describe("sequelize/Model/FindOptions/include", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("include with [Model.associations.relationName]", async () => {
    await Post.sync({ force: true });
    await Comment.sync({ force: true });

    await Post.findAll({
      include: [Post.associations.comments],
    });

    expect(query).toEqual(expectQuery);
  });
  test("include with [AssociationModel]", async () => {
    await Post.sync({ force: true });
    await Comment.sync({ force: true });

    await Post.findAll({
      include: [Comment],
    });

    expect(query).toEqual(expectQuery);
  });
  test("include with ['relationName']", async () => {
    await Post.sync({ force: true });
    await Comment.sync({ force: true });

    await Post.findAll({
      include: ["comments"],
    });

    expect(query).toEqual(expectQuery);
  });
});
