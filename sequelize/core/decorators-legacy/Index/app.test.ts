import {
  CreationOptional,
  DataTypes,
  Model,
  QueryTypes,
  Sequelize,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  Index,
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
  logging: (q) => {
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
};

class AbstractUser extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;
}

describe("sequelize/core/decorators-legacy/Index", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("@Index", async () => {
    class User extends AbstractUser {
      @Attribute(DataTypes.STRING)
      @Index
      declare name: string;
    }

    sequelize = new Sequelize({ ...commonOptions, models: [User] });
    await User.sync({ force: true });
    const query = await sequelize.query(
      "SELECT * FROM sqlite_master WHERE type='index'",
      {
        type: QueryTypes.SELECT,
        plain: true,
      },
    );

    expect(query.sql).toEqual("CREATE INDEX `users_name` ON `Users` (`name`)");
  });
  test("@Index({ unique: true })", async () => {
    class User extends AbstractUser {
      @Attribute(DataTypes.STRING)
      @Index({ unique: true })
      declare name: string;
    }

    sequelize = new Sequelize({ ...commonOptions, models: [User] });
    await User.sync({ force: true });
    const query = await sequelize.query(
      "SELECT * FROM sqlite_master WHERE type='index'",
      {
        type: QueryTypes.SELECT,
        plain: true,
      },
    );

    expect(query.sql).toEqual(
      "CREATE UNIQUE INDEX `users_name_unique` ON `Users` (`name`)",
    );
  });
  test("@Index({ name: 'name_idx' })", async () => {
    class User extends AbstractUser {
      @Attribute(DataTypes.STRING)
      @Index({ name: "name_idx" })
      declare name: string;
    }

    sequelize = new Sequelize({ ...commonOptions, models: [User] });
    await User.sync({ force: true });
    const query = await sequelize.query(
      "SELECT * FROM sqlite_master WHERE type='index'",
      {
        type: QueryTypes.SELECT,
        plain: true,
      },
    );

    expect(query.sql).toEqual("CREATE INDEX `name_idx` ON `Users` (`name`)");
  });
  test("@Index({ name: 'fullName_idx' })", async () => {
    class User extends AbstractUser {
      @Attribute(DataTypes.STRING)
      @Index({ name: "fullName_idx" })
      declare lastName: string;

      @Attribute(DataTypes.STRING)
      @Index({ name: "fullName_idx" })
      declare firstName: string;
    }

    sequelize = new Sequelize({ ...commonOptions, models: [User] });
    await User.sync({ force: true });
    const query = await sequelize.query(
      "SELECT * FROM sqlite_master WHERE type='index'",
      {
        type: QueryTypes.SELECT,
        plain: true,
      },
    );

    expect(query.sql).toEqual(
      "CREATE INDEX `fullName_idx` ON `Users` (`lastName`, `firstName`)",
    );
  });
});
