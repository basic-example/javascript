import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

let query;

class User extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  declare firstName: string;

  @Attribute(DataTypes.STRING)
  declare lastName: string;
}

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
});

describe("sequelize/core/Model/set", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("set", async () => {
    await User.sync({ force: true });
    const user: any = await User.create({
      firstName: "aaa",
      lastName: "bbb",
    });

    user.set({
      firstName: "abcd",
      lastName: "bcde",
    });

    expect(user.firstName).toEqual("abcd");
    expect(user.lastName).toEqual("bcde");
  });
});
