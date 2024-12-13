import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  ColumnName,
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
  @ColumnName("name_")
  declare name: string;
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

describe("sequelize/core/decorators-legacy/ColumnName", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("ColumnName", async () => {
    await User.sync({ force: true });
    await User.findAll();
    expect(query).toBe("SELECT `id`, `name_` AS `name` FROM `Users` AS `User`");
  });
});
