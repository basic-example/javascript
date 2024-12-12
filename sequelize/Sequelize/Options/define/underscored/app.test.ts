import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

abstract class AbstractUserProfile extends Model {
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

describe("Sequelize/Options/define/underscored", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("{underscored:false}", async () => {
    class UserProfile extends AbstractUserProfile {}
    sequelize = new Sequelize({
      ...commonOptions,
      models: [UserProfile],
      define: {
        underscored: false,
      },
    });
    await UserProfile.sync({ force: true });
    const UserProfiles = await UserProfile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `createdAt`, `updatedAt` FROM `UserProfiles` AS `UserProfile`",
    );
  });
  test("{underscored:true}", async () => {
    class UserProfile extends AbstractUserProfile {}
    sequelize = new Sequelize({
      ...commonOptions,
      models: [UserProfile],
      define: {
        underscored: true,
      },
    });
    await UserProfile.sync({ force: true });
    const UserProfiles = await UserProfile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `created_at` AS `createdAt`, `updated_at` AS `updatedAt` FROM `user_profiles` AS `UserProfile`",
    );
  });
  test("{}", async () => {
    class UserProfile extends AbstractUserProfile {}
    sequelize = new Sequelize({
      ...commonOptions,
      models: [UserProfile],
      define: {},
    });
    await UserProfile.sync({ force: true });
    const UserProfiles = await UserProfile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name`, `createdAt`, `updatedAt` FROM `UserProfiles` AS `UserProfile`",
    );
  });
});
