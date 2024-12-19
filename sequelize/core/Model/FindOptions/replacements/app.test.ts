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
const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: ":memory:",
  models: [User],
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  define: {
    timestamps: false,
  },
  logging: (q) => {
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
  // logQueryParameters: true,
});

describe("sequelize/Model/FindOptions/replacements", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("replacements with sequelize.query", async () => {
    await User.sync({ force: true });
    await sequelize.query(sql`SELECT * FROM Users WHERE name = :who`, {
      replacements: { who: "bbb" },
      type: QueryTypes.SELECT,
    });

    expect(query).toEqual("SELECT * FROM Users WHERE name = 'bbb'");
  });
  test("replacements with where option", async () => {
    await User.sync({ force: true });
    await User.findAll({
      where: {
        name: sql`:who`,
      },
      replacements: {
        who: "bbb",
      },
    });

    expect(query).toEqual(
      "SELECT `id`, `name` FROM `Users` AS `User` WHERE `User`.`name` = 'bbb'",
    );
  });
  test("replacements with array (impossible)", async () => {
    await User.sync({ force: true });

    expect(
      User.findAll({
        where: {
          name: sql`?`,
        },
        replacements: ["bbb"],
      }),
    ).rejects.toThrow();
  });
});
