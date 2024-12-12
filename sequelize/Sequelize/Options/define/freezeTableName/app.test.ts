import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  NotNull,
  PrimaryKey,
  Table,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

@Table({ timestamps: false })
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

describe("Sequelize/Options/define/freezeTableName", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("{freezeTableName:false}", async () => {
    class userProfile extends AbstractUserProfile {}
    class user_profile extends AbstractUserProfile {}
    class user_Profile extends AbstractUserProfile {}
    class UserProfile extends AbstractUserProfile {}
    class User_profile extends AbstractUserProfile {}

    sequelize = new Sequelize({
      ...commonOptions,
      models: [
        userProfile,
        user_profile,
        user_Profile,
        UserProfile,
        User_profile,
      ],
      define: {
        freezeTableName: false,
      },
    });

    await userProfile.sync({ force: true });
    await user_profile.sync({ force: true });
    await user_Profile.sync({ force: true });
    await UserProfile.sync({ force: true });
    await User_profile.sync({ force: true });

    await userProfile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `userProfiles` AS `userProfile`",
    );
    await user_profile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `user_profiles` AS `user_profile`",
    );
    await user_Profile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `user_Profiles` AS `user_Profile`",
    );
    await UserProfile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `UserProfiles` AS `UserProfile`",
    );
    await User_profile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `User_profiles` AS `User_profile`",
    );
  });
  test("{freezeTableName:true}", async () => {
    class userProfile extends AbstractUserProfile {}
    class user_profile extends AbstractUserProfile {}
    class user_Profile extends AbstractUserProfile {}
    class UserProfile extends AbstractUserProfile {}
    class User_profile extends AbstractUserProfile {}

    sequelize = new Sequelize({
      ...commonOptions,
      models: [
        userProfile,
        user_profile,
        user_Profile,
        UserProfile,
        User_profile,
      ],
      define: {
        freezeTableName: true,
      },
    });

    await userProfile.sync({ force: true });
    await user_profile.sync({ force: true });
    await user_Profile.sync({ force: true });
    await UserProfile.sync({ force: true });
    await User_profile.sync({ force: true });

    await userProfile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `userProfile` AS `userProfile`",
    );
    await user_profile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `user_profile` AS `user_profile`",
    );
    await user_Profile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `user_Profile` AS `user_Profile`",
    );
    await UserProfile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `UserProfile` AS `UserProfile`",
    );
    await User_profile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `User_profile` AS `User_profile`",
    );
  });
  test("{}", async () => {
    class userProfile extends AbstractUserProfile {}
    class user_profile extends AbstractUserProfile {}
    class user_Profile extends AbstractUserProfile {}
    class UserProfile extends AbstractUserProfile {}
    class User_profile extends AbstractUserProfile {}

    sequelize = new Sequelize({
      ...commonOptions,
      models: [
        userProfile,
        user_profile,
        user_Profile,
        UserProfile,
        User_profile,
      ],
      define: {},
    });

    await userProfile.sync({ force: true });
    await user_profile.sync({ force: true });
    await user_Profile.sync({ force: true });
    await UserProfile.sync({ force: true });
    await User_profile.sync({ force: true });

    await userProfile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `userProfiles` AS `userProfile`",
    );
    await user_profile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `user_profiles` AS `user_profile`",
    );
    await user_Profile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `user_Profiles` AS `user_Profile`",
    );
    await UserProfile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `UserProfiles` AS `UserProfile`",
    );
    await User_profile.findAll();
    expect(query).toBe(
      "SELECT `id`, `name` FROM `User_profiles` AS `User_profile`",
    );
  });
});
