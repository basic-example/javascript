import { DataTypes, Model, NonAttribute, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  BelongsTo,
  HasMany,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

class Product extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: number;

  @Attribute(DataTypes.STRING)
  declare title: string;

  @HasMany(() => Cart, {
    foreignKey: "product_id",
  })
  declare carts: NonAttribute<Cart[]>;
}

class Photo extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: number;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare user_id: number;

  @Attribute(DataTypes.STRING)
  declare url: string;
}

class Cart extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: number;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare product_id: number;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare user_id: number;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare count: number;

  @BelongsTo(() => Product, {
    foreignKey: "product_id",
  })
  declare product: NonAttribute<Product>;

  @BelongsTo(() => User, {
    foreignKey: "user_id",
  })
  declare user: NonAttribute<User>;
}

class User extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: number;

  @Attribute(DataTypes.STRING)
  declare name: string;

  @HasMany(() => Cart, {
    foreignKey: "user_id",
  })
  declare carts: Cart[];

  @HasMany(() => Photo, {
    foreignKey: "user_id",
  })
  declare photos: NonAttribute<Photo[]>;
}

let query;
let bindParameters;
const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: ":memory:",
  models: [Cart, Photo, Product, User],
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  define: {
    timestamps: false,
  },
  logging: (q, p: any) => {
    bindParameters = p?.bind;
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
});

describe("sequelize/Model/FindOptions/hooks/beforeFindAfterExpandIncludeAll", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("app with all:true", async () => {
    await User.sync({ force: true });
    await Cart.sync({ force: true });
    await Product.sync({ force: true });
    await Photo.sync({ force: true });

    User.addHook("beforeFind", (options: any) => {
      expect(options.include[0].all).toBe(true);
      expect(options.include[0]?.association).toBeFalsy();
    });
    User.addHook("beforeFindAfterExpandIncludeAll", (options: any) => {
      expect(options.include[0].all).toBe(undefined);
      expect(options.include[0]?.association).toBeTruthy();
    });

    await User.findAll({
      include: {
        all: true,
      },
    });
  });

  test("app with all:true and nested:true", async () => {
    await User.sync({ force: true });
    await Cart.sync({ force: true });
    await Product.sync({ force: true });
    await Photo.sync({ force: true });

    User.addHook("beforeFind", (options: any) => {
      expect(options.include[0].all).toBe(true);
      expect(options.include[0].nested).toBe(true);
      expect(options.include[0]?.association).toBeFalsy();
      expect(options.include[0]?.include).toBeFalsy();
    });
    User.addHook("beforeFindAfterExpandIncludeAll", (options: any) => {
      expect(options.include[0].all).toBe(undefined);
      expect(options.include[0].nested).toBe(undefined);
      expect(options.include[0]?.association).toBeTruthy();
      expect(options.include[0]?.include[0]).toBeTruthy();
      expect(options.include[0]?.include[0].association).toBeTruthy();
    });

    await User.findAll({
      include: {
        all: true,
        nested: true,
      },
    });
  });
});
