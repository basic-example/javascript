import {
  CreationOptional,
  DataTypes,
  Model,
  Op,
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
  logging: (q, p) => {
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
});

describe("sequelize/core/sql.where", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("sql.where", async () => {
    await User.sync({ force: true });
    const where = {
      name: ["aaa", "bbb"],
      id: 1234,
    };

    await sequelize.query(sql`SELECT * FROM Users WHERE ${sql.where(where)}`);
    expect(query).toEqual(
      "SELECT * FROM Users WHERE `name` IN ('aaa', 'bbb') AND `id` = 1234",
    );

    await sequelize.query(
      sql`SELECT * FROM Users WHERE ${sql.where("name", Op.eq, "aaa")}`,
    );
    expect(query).toEqual("SELECT * FROM Users WHERE 'name' = 'aaa'");
  });
});
