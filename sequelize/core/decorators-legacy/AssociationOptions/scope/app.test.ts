import Sequelize, {
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  Model,
  NonAttribute,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  HasMany,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

let query;
let sequelize: Sequelize;
const sequelizeOptions = {
  dialect: SqliteDialect,
  storage: ":memory:",
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  define: {
    timestamps: false,
  },
  logging: (q) => {
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
};

describe("sequelize/core/decorators-legacy/AssociationOptions/scope", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("scope - basic", async () => {
    class User extends Model {
      @Attribute(DataTypes.INTEGER)
      @PrimaryKey
      @AutoIncrement
      declare id: CreationOptional<number>;

      @Attribute(DataTypes.STRING)
      declare name: string;

      @HasMany(() => Post, {})
      declare allPosts;

      @HasMany(() => Post, {
        scope: { type: "blog" },
      })
      declare blogPosts;

      @HasMany(() => Post, {
        scope: { type: "notice" },
      })
      declare noticePosts;

      declare getAllPosts: HasManyGetAssociationsMixin<Post>;
      declare getBlogPosts: HasManyGetAssociationsMixin<Post>;
      declare getNoticePosts: HasManyGetAssociationsMixin<Post>;
    }

    class Post extends Model {
      @Attribute(DataTypes.INTEGER)
      @PrimaryKey
      @AutoIncrement
      declare id: CreationOptional<number>;

      @Attribute(DataTypes.INTEGER)
      @NotNull
      declare userId: number;

      @Attribute(DataTypes.STRING)
      declare type: string;

      @Attribute(DataTypes.STRING)
      declare title: string;
    }
    sequelize = new Sequelize({
      ...sequelizeOptions,
      models: [User, Post],
    });
    await User.sync({ force: true });
    await Post.sync({ force: true });
    await User.create({
      name: "aaa",
    });
    await Post.bulkCreate([
      {
        userId: 1,
        type: "blog",
        title: "hello",
      },
      {
        userId: 1,
        type: "blog",
        title: "world",
      },
      {
        userId: 1,
        type: "notice",
        title: "abcd",
      },
    ]);
    const user = <User>await User.findByPk(1);
    const allPosts = await user.getAllPosts();
    const blogPosts = await user.getBlogPosts();
    const noticePosts = await user.getNoticePosts();

    expect(allPosts.length).toEqual(3);
    expect(blogPosts.length).toEqual(2);
    expect(noticePosts.length).toEqual(1);
  });

  test("scope - polymorphic", async () => {
    class Comment extends Model {
      declare id: number;

      @Attribute(DataTypes.STRING)
      @NotNull
      declare content: string;

      @Attribute(DataTypes.STRING)
      @NotNull
      declare targetModel: "article" | "video";

      @Attribute(DataTypes.INTEGER)
      @NotNull
      declare targetId: number;

      declare article?: NonAttribute<Article>;
      declare video?: NonAttribute<Video>;

      get target(): NonAttribute<Article | Video | undefined> {
        if (this.targetModel === "article") {
          return this.article;
        } else {
          return this.video;
        }
      }
    }
    class Video extends Model {
      @Attribute(DataTypes.INTEGER)
      @PrimaryKey
      @AutoIncrement
      declare id: number;

      @Attribute(DataTypes.STRING)
      declare url: string;

      @HasMany(() => Comment, {
        inverse: {
          as: "videos",
        },
        foreignKey: "targetId",
        foreignKeyConstraints: false,
        scope: {
          targetModel: "video",
        },
      })
      declare comments: Comment[];
    }
    class Article extends Model {
      @Attribute(DataTypes.INTEGER)
      @PrimaryKey
      @AutoIncrement
      declare id: number;

      @Attribute(DataTypes.STRING)
      declare title: string;

      @HasMany(() => Comment, {
        inverse: {
          as: "articles",
        },
        foreignKey: "targetId",
        foreignKeyConstraints: false,
        scope: {
          targetModel: "article",
        },
      })
      declare comments: Comment[];
    }
    sequelize = new Sequelize({
      ...sequelizeOptions,
      models: [Comment, Video, Article],
    });
    await Video.sync({ force: true });
    await Article.sync({ force: true });
    await Comment.sync({ force: true });
    await Video.create(
      {
        url: "http://xxx.com",
        comments: [
          {
            content: "aaa",
          },
          {
            content: "bbb",
          },
        ],
      },
      {
        include: ["comments"],
      },
    );
    await Article.create(
      {
        title: "abcd",
        comments: [
          {
            content: "ccc",
          },
        ],
      },
      {
        include: ["comments"],
      },
    );
    const video = <Video>await Video.findByPk(1, {
      include: ["comments"],
    });
    const article = <Article>await Article.findByPk(1, {
      include: ["comments"],
    });

    expect(await Comment.count()).toEqual(3);
    expect(video.comments.length).toEqual(2);
    expect(article.comments.length).toEqual(1);
  });
});
