import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

let query;

class User extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.JSON)
  declare infos: string;
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

describe("sequelize/core/Model/changed", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("changed", async () => {
    await User.sync({ force: true });
    const user: any = await User.create({
      infos: [
        {
          blood: "A",
        },
      ],
    });
    user.infos.push({ age: 27 });

    expect(Array.from(user._changed)).toEqual([]);
    await user.save();
    expect(query).not.toMatch(/^UPDATE/);

    user.changed("infos", true);

    expect(Array.from(user._changed)).toEqual(["infos"]);
    await user.save();
    expect(query).toMatch(/^UPDATE/);
  });
});
