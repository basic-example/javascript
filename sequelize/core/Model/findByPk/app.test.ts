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

describe("sequelize/Model/findByPk", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("findByPk", async () => {
    await User.sync({ force: true });
    await User.create({
      name: "aaa",
    });

    await User.findByPk(1);

    expect(query).toEqual(
      "SELECT `id`, `name` FROM `Users` AS `User` WHERE `User`.`id` = 1 ORDER BY `User`.`id` LIMIT 1",
    );

    await User.findByPk(1, {
      order: [],
    });
    expect(query).toEqual(
      "SELECT `id`, `name` FROM `Users` AS `User` WHERE `User`.`id` = 1 ORDER BY `User`.`id` LIMIT 1",
    );

    await User.findByPk(1, {
      order: [["id", "DESC"]],
    });
    expect(query).toEqual(
      "SELECT `id`, `name` FROM `Users` AS `User` WHERE `User`.`id` = 1 ORDER BY `User`.`id` DESC LIMIT 1",
    );
  });
});
