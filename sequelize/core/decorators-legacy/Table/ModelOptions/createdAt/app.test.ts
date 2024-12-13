import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  NotNull,
  PrimaryKey,
  Table,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

let query;
let sequelize;
const sequelizeOptions = {
  dialect: SqliteDialect,
  storage: ":memory:",
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  logging: (q) => {
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
};

abstract class AbstractUser extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;
}

describe("sequelize/core/decorators-legacy/Table/ModelOptions/createdAt", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("{createdAt: 'aaaAt'}", async () => {
    @Table({ createdAt: "aaaAt" })
    class User extends AbstractUser {}

    sequelize = new Sequelize({ ...sequelizeOptions, models: [User] });

    await User.sync({ force: true });
    await User.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `aaaAt`, `updatedAt` FROM `Users` AS `User`",
    );
  });
  test("{createdAt: false}", async () => {
    @Table({ createdAt: false })
    class User extends AbstractUser {}

    sequelize = new Sequelize({ ...sequelizeOptions, models: [User] });

    await User.sync({ force: true });
    await User.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `updatedAt` FROM `Users` AS `User`",
    );
  });
  test("{createdAt: true}", async () => {
    @Table({ createdAt: true })
    class User extends AbstractUser {}

    sequelize = new Sequelize({ ...sequelizeOptions, models: [User] });

    await User.sync({ force: true });
    await User.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `createdAt`, `updatedAt` FROM `Users` AS `User`",
    );
  });
  test("{}", async () => {
    @Table({})
    class User extends AbstractUser {}

    sequelize = new Sequelize({ ...sequelizeOptions, models: [User] });

    await User.sync({ force: true });
    await User.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `createdAt`, `updatedAt` FROM `Users` AS `User`",
    );
  });
});
