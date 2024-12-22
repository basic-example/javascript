import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

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

let query;
let bindParameter;
const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: ":memory:",
  models: [User],
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  define: {
    timestamps: false,
  },
  logging: (q, p: any) => {
    bindParameter = p?.bind;
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
});

describe("sequelize/Model/findAndCountAll", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("findAndCountAll", async () => {
    await User.sync({ force: true });
    await User.create({
      firstName: "a",
      lastName: "a",
    });
    await User.create({
      firstName: "a",
      lastName: "aa",
    });
    await User.create({
      firstName: "a",
      lastName: "aaa",
    });
    await User.create({
      firstName: "b",
      lastName: "b",
    });
    await User.create({
      firstName: "b",
      lastName: "bb",
    });
    await User.create({
      firstName: "b",
      lastName: "bbb",
    });

    const result1 = await User.findAndCountAll();
    expect(result1.count).toEqual(6);
    expect(result1.rows.length).toEqual(6);

    const result2 = await User.findAndCountAll({
      group: ["firstName"],
    });
    expect(result2.count[0].count).toEqual(3);
    expect(result2.count[0].firstName).toEqual("a");
    expect(result2.count[0].lastName).toEqual(undefined);
    expect(result2.count[1].count).toEqual(3);
    expect(result2.count[1].firstName).toEqual("b");
    expect(result2.count[1].lastName).toEqual(undefined);
    expect(result2.rows.length).toEqual(2);
  });
});
