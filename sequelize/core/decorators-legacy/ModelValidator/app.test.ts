import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  ModelValidator,
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

  @Attribute(DataTypes.STRING)
  declare name: string;
}

describe("sequelize/core/decorators-legacy/ModelValidator", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("@ModelValidator", async () => {
    class User extends AbstractUser {
      @ModelValidator
      onValidate() {
        if (this.name == null) {
          throw new Error("name must not be null");
        }
      }
    }

    sequelize = new Sequelize({ ...commonOptions, models: [User] });
    await User.sync({ force: true });

    await expect(User.build({}).validate()).rejects.toThrow();
    await expect(
      User.build({ name: "park" }).validate(),
    ).resolves.not.toThrow();
  });
  test("@ModelValidator on static", async () => {
    class User extends AbstractUser {
      @ModelValidator
      static onValidate(user) {
        if (user.name == null) {
          throw new Error("name must not be null");
        }
      }
    }

    sequelize = new Sequelize({ ...commonOptions, models: [User] });
    await User.sync({ force: true });

    await expect(User.build({}).validate()).rejects.toThrow();
    await expect(
      User.build({ name: "park" }).validate(),
    ).resolves.not.toThrow();
  });
});
