import Sequelize, {
  CreationOptional,
  DataTypes,
  Model,
  TransactionNestMode,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { SqliteDialect } from "@sequelize/sqlite3";

abstract class AbstractUser extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  declare name: string;
}

let query;
let bindParameter;
let sequelize: Sequelize;
const sequelizeOptions = {
  dialect: SqliteDialect,
  storage: "db.sqlite",
  pool: { max: 10, idle: Infinity, maxUses: Infinity },
  define: {
    timestamps: false,
  },
  logging: (q, p: any) => {
    bindParameter = p.bind;
    query = q.replace(/^Executing \(default\)\: /, "").replace(/\;$/, "");
  },
};

describe("sequelize/Sequelize/Options/defaultTransactionNestMode", () => {
  afterEach(() => {
    sequelize.close();
  });
  test("defaultTransactionNestMode - TransactionNestMode.reuse - with unmanaged transaction", async () => {
    class User extends AbstractUser {}
    sequelize = new Sequelize({
      ...sequelizeOptions,
      models: [User],
      defaultTransactionNestMode: TransactionNestMode.reuse,
    });

    await User.sync({ force: true });
    let count;
    const t1 = await sequelize.startUnmanagedTransaction();
    await User.create({
      name: "aaa",
    });
    try {
      await sequelize.transaction(async (t2) => {
        count = await User.count();
        await User.create({
          name: "bbb",
        });
        throw new Error();
      });
    } catch {}
    t1.commit();

    expect(count).toStrictEqual(1);
    expect(await User.count()).toEqual(1);
  });
  test("defaultTransactionNestMode - TransactionNestMode.reuse", async () => {
    class User extends AbstractUser {}
    sequelize = new Sequelize({
      ...sequelizeOptions,
      models: [User],
      defaultTransactionNestMode: TransactionNestMode.reuse,
    });

    await User.sync({ force: true });
    try {
      await sequelize.transaction(async (t1) => {
        await User.create({
          name: "aaa",
        });
        // do nothing for transaction(commit, rollback)
        await sequelize.transaction(async (t2) => {
          await User.create({
            name: "bbb",
          });
          throw new Error();
        });
      });
    } catch (error) {}

    expect(await User.count()).toEqual(0);

    await User.sync({ force: true });
    await sequelize.transaction(async (t1) => {
      await User.create({
        name: "aaa",
      });
      try {
        // do nothing for transaction(commit, rollback)
        await sequelize.transaction(async (t2) => {
          await User.create({
            name: "bbb",
          });
          throw new Error();
        });
      } catch (error) {}
    });

    expect(await User.count()).toEqual(2);
  });
  test("defaultTransactionNestMode - TransactionNestMode.savepoint - with nested unmanaged transaction", async () => {
    class User extends AbstractUser {}
    sequelize = new Sequelize({
      ...sequelizeOptions,
      models: [User],
      defaultTransactionNestMode: TransactionNestMode.savepoint,
    });

    const t1 = await sequelize.startUnmanagedTransaction();
    const t2 = await sequelize.startUnmanagedTransaction();

    expect(query).toMatch(/BEGIN DEFERRED TRANSACTION$/);
  });
  test("defaultTransactionNestMode - TransactionNestMode.savepoint", async () => {
    class User extends AbstractUser {}
    sequelize = new Sequelize({
      ...sequelizeOptions,
      models: [User],
      defaultTransactionNestMode: TransactionNestMode.savepoint,
    });

    await User.sync({ force: true });
    await sequelize.transaction(async () => {
      await User.create({
        name: "aaa",
      });
      try {
        await sequelize.transaction(async () => {
          await User.create({
            name: "bbb",
          });
          throw new Error();
        });
      } catch {}
    });

    expect(await User.count()).toEqual(1);
  });
  test("defaultTransactionNestMode - TransactionNestMode.separate", async () => {
    class User extends AbstractUser {}
    sequelize = new Sequelize({
      ...sequelizeOptions,
      models: [User],
      defaultTransactionNestMode: TransactionNestMode.separate,
    });

    await User.sync({ force: true });
    let count;
    await sequelize.transaction(async (t1) => {
      await User.create({
        name: "aaa",
      });
      await sequelize.transaction(async (t2) => {
        count = await User.count();
      });
    });

    expect(count).toStrictEqual(0);
  });
});
