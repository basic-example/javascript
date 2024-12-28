import Sequelize, { CreationOptional, DataTypes, Model } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { MySqlDialect } from "@sequelize/mysql";
import { execSync } from "node:child_process";

class User extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;
}

let dockerContainerId;
const sequelize = new Sequelize({
  database: "test",
  user: "root",
  password: "",
  host: "127.0.0.1",
  port: 3306,
  dialect: MySqlDialect,
  models: [User],
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
});

describe("sequelize/mysql", () => {
  afterAll(async () => {
    execSync("docker container stop " + dockerContainerId);
  });

  beforeAll(async () => {
    dockerContainerId = execSync(
      "docker run --rm -e MYSQL_ALLOW_EMPTY_PASSWORD=1 -e MYSQL_DATABASE=test -d -p 3306:3306 mysql",
    ).toString();

    await new Promise((resolve) => {
      const interval = setInterval(async () => {
        sequelize
          .query("SELECT 1")
          .then(() => {
            clearInterval(interval);
            resolve("");
          })
          .catch(() => {});
      }, 1000);
    });
  }, 30000);

  test("mysql", async () => {
    await User.sync({ force: true });
    expect(await User.count()).toEqual(0);
  });
});
