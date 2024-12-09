import {
  AbstractLogger,
  BaseEntity,
  Column,
  DataSource,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}

describe("typeorm", () => {
  test("QueryBuilder/getRawMany", async () => {
    let selectQuery;

    class Logger extends AbstractLogger {
      protected writeLog(level, logMessage, queryRunner) {}

      logQuery(query, parameters, queryRunner) {
        if (query.match(/^SELECT "/)) {
          selectQuery = query;
        }
      }
    }

    await new DataSource({
      type: "sqlite",
      database: ":memory:",
      entities: [User],
      logging: true,
      logger: new Logger(),
      synchronize: true,
    }).initialize();

    const user1 = new User();
    user1.firstName = "qqq";
    user1.lastName = "www";
    await user1.save();

    const user2 = new User();
    user2.firstName = "eee";
    user2.lastName = "rrr";
    await user2.save();

    const result = await User.getRepository()
      .createQueryBuilder("aaa")
      .getRawMany();

    expect(selectQuery).toBe(
      'SELECT "aaa"."id" AS "aaa_id", "aaa"."firstName" AS "aaa_firstName", "aaa"."lastName" AS "aaa_lastName" FROM "user" "aaa"',
    );
    expect(result).toEqual([
      { aaa_id: 1, aaa_firstName: "qqq", aaa_lastName: "www" },
      { aaa_id: 2, aaa_firstName: "eee", aaa_lastName: "rrr" },
    ]);
  });
});
