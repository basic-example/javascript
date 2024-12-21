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
  declare name: string;
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
    bindParameter = p.bind;
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
});

describe("sequelize/Model/update", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("update", async () => {
    await User.sync({ force: true });
    await User.update(
      {
        name: "aaa",
      },
      {
        where: {
          id: 1234,
        },
      },
    );

    expect(query).toEqual(
      "UPDATE `Users` SET `name`=$sequelize_1 WHERE `id` = $sequelize_2",
    );
    expect(bindParameter).toEqual({
      sequelize_1: "aaa",
      sequelize_2: 1234,
    });
  });
});
