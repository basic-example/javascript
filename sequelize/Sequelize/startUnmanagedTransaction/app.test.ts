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

describe("sequelize/Sequelize/startUnmanagedTransaction", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("startUnmanagedTransaction", async () => {
    await sequelize.startUnmanagedTransaction();
    expect(query).toMatch(/BEGIN DEFERRED TRANSACTION$/);
  });
});
