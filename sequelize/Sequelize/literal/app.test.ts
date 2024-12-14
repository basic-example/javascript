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

describe("sequelize/Sequelize/literal", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("literal", async () => {
    const query = sequelize.dialect.queryGenerator.selectQuery(User.table);
    expect(sequelize.literal(query).val[0]).toEqual("SELECT * FROM `Users`;");
  });
});
