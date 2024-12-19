import {
  CreationOptional,
  DataTypes,
  Model,
  QueryTypes,
  Sequelize,
  sql,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
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

let query;
let bindParameters;
const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: ":memory:",
  models: [User],
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  define: {
    timestamps: false,
  },
  logging: (q, p: any) => {
    bindParameters = p?.bind;
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
});

describe("sequelize/Model/FindOptions/bind", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("bind with sequelize.query", async () => {
    await User.sync({ force: true });
    await User.create({
      name: "aaa",
    });
    await User.create({
      name: "bbb",
    });
    await User.create({
      name: "ccc",
    });

    const users = await sequelize.query(
      sql`SELECT * FROM Users WHERE name = $who`,
      {
        bind: { who: "bbb" },
        type: QueryTypes.SELECT,
      },
    );

    expect(query).toEqual("SELECT * FROM Users WHERE name = $who");
    expect(bindParameters).toEqual({ who: "bbb" });
    expect(users.length).toBe(1);
    expect(users[0]).toStrictEqual({ id: 2, name: "bbb" });
  });
  test("bind with where option", async () => {
    await User.sync({ force: true });
    await User.create({
      name: "aaa",
    });
    await User.create({
      name: "bbb",
    });
    await User.create({
      name: "ccc",
    });

    const users = await User.findAll({
      where: {
        name: sql`$who`,
      },
      bind: { who: "bbb" },
    });

    expect(query).toEqual(
      "SELECT `id`, `name` FROM `Users` AS `User` WHERE `User`.`name` = $who",
    );
    expect(bindParameters).toEqual({ who: "bbb" });
    expect(users.length).toBe(1);
    expect(users[0].dataValues).toStrictEqual({ id: 2, name: "bbb" });
  });
  test("bind array with where option", async () => {
    await User.sync({ force: true });
    await User.create({
      name: "aaa",
    });
    await User.create({
      name: "bbb",
    });
    await User.create({
      name: "ccc",
    });

    const users = await User.findAll({
      where: {
        name: sql`$1`,
      },
      bind: ["bbb"],
    });

    expect(query).toEqual(
      "SELECT `id`, `name` FROM `Users` AS `User` WHERE `User`.`name` = $1",
    );
    expect(bindParameters).toEqual(["bbb"]);
    expect(users.length).toBe(1);
    expect(users[0].dataValues).toStrictEqual({ id: 2, name: "bbb" });
  });
});
