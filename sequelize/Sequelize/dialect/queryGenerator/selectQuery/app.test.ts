import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

class User extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;
}

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: ":memory:",
  models: [User],
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
});

describe("sequelize/Sequelize/dialect/queryGenerator/selectQuery", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("selectQuery", async () => {
    const query = sequelize.dialect.queryGenerator.selectQuery(User.table);
    expect(query).toEqual("SELECT * FROM `Users`;");
    expect(query.slice(0, -1)).toEqual("SELECT * FROM `Users`");
  });
});
