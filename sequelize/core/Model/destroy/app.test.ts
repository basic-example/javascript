import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  DeletedAt,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

let query;
let sequelize;
const commonOptions = {
  dialect: SqliteDialect,
  storage: ":memory:",
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  define: {
    timestamps: false,
  },
  logging: (q, p) => {
    const parameters = p.bind;
    for (const key in parameters) {
      q = q.replace("$" + key, "'" + parameters[key] + "'");
    }
    query = q
      .replace(/^Executing \(default\)\: /, "")
      .replace(/\;$/, "")
      .split(";")[0];
  },
  logQueryParameters: true,
};

class AbstractUser extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  declare name: string;
}

describe("sequelize/Model/destroy", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("destroy model not containing @DeletedAt", async () => {
    class User extends AbstractUser {}

    sequelize = new Sequelize({ ...commonOptions, models: [User] });
    await User.sync({ force: true });
    await User.destroy({
      where: {
        id: 1,
      },
    });

    expect(query).toEqual("DELETE FROM `Users` WHERE `id` = 1");
  });
  test("destroy model containing @DeletedAt", async () => {
    class User extends AbstractUser {
      @DeletedAt
      declare deletedAt: Date | null;
    }

    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
    sequelize = new Sequelize({ ...commonOptions, models: [User] });
    await User.sync({ force: true });
    await User.destroy({
      where: {
        id: 1,
      },
    });

    expect(query).toEqual(
      "UPDATE `Users` SET `deletedAt`='2020-01-01 00:00:00.000 +00:00' WHERE `deletedAt` IS NULL AND `id` = '1'",
    );
  });

  test("destroy model containing @DeletedAt with { force: true }", async () => {
    class User extends AbstractUser {
      @DeletedAt
      declare deletedAt: Date | null;
    }

    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
    sequelize = new Sequelize({ ...commonOptions, models: [User] });
    await User.sync({ force: true });
    await User.destroy({
      where: {
        id: 1,
      },
      force: true,
    });

    expect(query).toEqual("DELETE FROM `Users` WHERE `id` = 1");
  });
});
