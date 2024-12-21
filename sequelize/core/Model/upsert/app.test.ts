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
  declare lastName: string;

  @Attribute(DataTypes.STRING)
  declare firstName: string;
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

describe("sequelize/Model/upsert", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("upsert - create", async () => {
    await User.sync({ force: true });
    await User.upsert({
      id: 1,
      firstName: "aaa",
      lastName: "park",
    });

    expect(await User.count()).toBe(1);
    expect((await User.findAll()).at(0)?.dataValues).toEqual({
      id: 1,
      firstName: "aaa",
      lastName: "park",
    });
  });
  test("upsert - update", async () => {
    await User.sync({ force: true });
    await User.create({
      firstName: "aaa",
      lastName: "bbb",
    });

    await User.upsert({
      id: 1,
      firstName: "aaa",
      lastName: "park",
    });

    expect(await User.count()).toBe(1);
    expect((await User.findAll()).at(0)?.dataValues).toEqual({
      id: 1,
      firstName: "aaa",
      lastName: "park",
    });
  });
});
