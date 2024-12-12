import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  CreatedAt,
  NotNull,
  PrimaryKey,
  Table,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

abstract class AbstractUser extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;
}

let query;
let sequelize;
const commonOptions = {
  dialect: SqliteDialect,
  storage: ":memory:",
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  logging: (q) => {
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
};

describe("Sequelize/Options/define/timestamps", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("{timestamps:false}", async () => {
    class User extends AbstractUser {}
    sequelize = new Sequelize({
      ...commonOptions,
      models: [User],
      define: {
        timestamps: false,
      },
    });
    await User.sync({ force: true });
    const users = await User.findAll();
    expect(query).toBe("SELECT `id`, `name` FROM `Users` AS `User`");
  });
  test("{timestamps:false} and @Table({}) and @CreatedAt", async () => {
    @Table({})
    class User extends AbstractUser {
      @CreatedAt
      declare creationDate: CreationOptional<Date>;
    }
    sequelize = new Sequelize({
      ...commonOptions,
      models: [User],
      define: {
        timestamps: false,
      },
    });
    await User.sync({ force: true });
    const users = await User.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `creationDate`, `updatedAt` FROM `Users` AS `User`",
    );
  });
  test("{timestamps:false} and @Table({ updatedAt: false }) and @CreatedAt", async () => {
    @Table({ updatedAt: false })
    class User extends AbstractUser {
      @CreatedAt
      declare creationDate: CreationOptional<Date>;
    }
    sequelize = new Sequelize({
      ...commonOptions,
      models: [User],
      define: {
        timestamps: false,
      },
    });
    await User.sync({ force: true });
    const users = await User.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `creationDate` FROM `Users` AS `User`",
    );
  });
  test("{timestamps:false} and @Table({createdAt: true})", async () => {
    @Table({ createdAt: true })
    class User extends AbstractUser {}
    sequelize = new Sequelize({
      ...commonOptions,
      models: [User],
      define: {
        timestamps: false,
      },
    });
    await User.sync({ force: true });
    const users = await User.findAll();
    expect(query).toBe("SELECT `id`, `name` FROM `Users` AS `User`");
  });
  test("{timestamps:true}", async () => {
    class User extends AbstractUser {}
    sequelize = new Sequelize({
      ...commonOptions,
      models: [User],
      define: {
        timestamps: true,
      },
    });
    await User.sync({ force: true });
    const users = await User.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `createdAt`, `updatedAt` FROM `Users` AS `User`",
    );
  });
  test("{}", async () => {
    class User extends AbstractUser {}
    sequelize = new Sequelize({
      ...commonOptions,
      models: [User],
      define: {},
    });
    await User.sync({ force: true });
    const users = await User.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `createdAt`, `updatedAt` FROM `Users` AS `User`",
    );
  });
});
