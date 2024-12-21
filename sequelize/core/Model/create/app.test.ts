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

describe("sequelize/Model/create", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("create", async () => {
    await User.sync({ force: true });
    await User.create({
      name: "aaa",
    });

    expect(query).toEqual(
      "INSERT INTO `Users` (`id`,`name`) VALUES (NULL,$sequelize_1) RETURNING `id`, `name`",
    );
    expect(bindParameter).toEqual({
      sequelize_1: "aaa",
    });
  });
});
