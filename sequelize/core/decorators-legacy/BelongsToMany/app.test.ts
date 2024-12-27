import {
  BelongsToManyGetAssociationsMixin,
  CreationOptional,
  DataTypes,
  Model,
  NonAttribute,
  Sequelize,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  BelongsToMany,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

let query;

class PostTag extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;
}

class Post extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  declare title: string;

  @BelongsToMany(() => Tag, {
    through: () => PostTag,
    inverse: {
      as: "posts",
    },
    targetKey: "id",
    sourceKey: "id",
    foreignKey: "postId",
    otherKey: "tagId",
  })
  declare tags?: NonAttribute<Tag[]>;

  declare getTags: BelongsToManyGetAssociationsMixin<Tag>;
}

class Tag extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  declare name: string;

  @BelongsToMany(() => Post, {
    through: () => PostTag,
    inverse: {
      as: "tags",
    },
    targetKey: "id",
    sourceKey: "id",
    foreignKey: "tagId",
    otherKey: "postId",
  })
  declare posts?: NonAttribute<Post[]>;

  declare getPosts: BelongsToManyGetAssociationsMixin<Post>;
}

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: ":memory:",
  models: [PostTag, Post, Tag],
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  define: {
    timestamps: false,
  },
  logging: (q) => {
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
});

describe("sequelize/core/decorators-legacy/BelongsToMany", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("BelongsToMany", async () => {
    await Post.sync({ force: true });
    await Tag.sync({ force: true });
    await PostTag.sync({ force: true });

    await Post.bulkCreate([
      {
        title: "aaa",
      },
      {
        title: "bbb",
      },
      {
        title: "ccc",
      },
    ]);
    await Tag.bulkCreate([
      {
        name: "tag1",
      },
      {
        name: "tag2",
      },
      {
        name: "tag3",
      },
      {
        name: "tag4",
      },
    ]);
    await PostTag.bulkCreate([
      {
        postId: 1,
        tagId: 1,
      },
      {
        postId: 1,
        tagId: 2,
      },
      {
        postId: 1,
        tagId: 4,
      },
      {
        postId: 2,
        tagId: 2,
      },
      {
        postId: 2,
        tagId: 3,
      },
    ]);
    const post1 = <Post>await Post.findByPk(1);
    const post2 = <Post>await Post.findByPk(2);
    const post3 = <Post>await Post.findByPk(3);
    const post1Tags = await post1.getTags();
    const post2Tags = await post2.getTags();
    const post3Tags = await post3.getTags();

    expect(post1Tags.length).toEqual(3);
    expect(post2Tags.length).toEqual(2);
    expect(post3Tags.length).toEqual(0);
  });
});
