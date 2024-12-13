import { CreationOptional, DataTypes, Model, Sequelize } from "@sequelize/core";
import {
  AfterSync,
  Attribute,
  AutoIncrement,
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

describe("sequelize/core/decorators-legacy/AfterSync", () => {
  afterAll(() => {
    sequelize.close();
  });
  test("AfterSync", async () => {
    class User extends AbstractUser {
      @AfterSync
      static async onSync() {
        const user = User.build({ name: "park" });
        await user.save();
      }
    }
    sequelize = new Sequelize({ ...commonOptions, models: [User] });

    await User.sync({ force: true });

    expect(await User.count()).toBe(1);
  });
});
