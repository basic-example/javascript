import {
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
  test("QueryBuilder/select", async () => {
    await new DataSource({
      type: "sqlite",
      database: ":memory:",
      entities: [User],
      logging: false,
      synchronize: true,
    }).initialize();

    expect(
      (await User.getRepository())
        .createQueryBuilder("aaa")
        .select("firstName", "first_name_")
        .getSql(),
    ).toBe('SELECT firstName AS "first_name_" FROM "user" "aaa"');

    expect(
      (await User.getRepository())
        .createQueryBuilder("aaa")
        .select(["firstName", "aaa.firstName"])
        .getSql(),
    ).toBe(
      'SELECT "aaa"."firstName" AS "aaa_firstName", firstName FROM "user" "aaa"',
    );

    expect(
      (await User.getRepository())
        .createQueryBuilder("aaa")
        .select((q) => q.from(User, "bbb").select("id"), "aaa_id2")
        .getSql(),
    ).toBe(
      'SELECT "aaa"."id" AS "aaa_id", "aaa"."firstName" AS "aaa_firstName", "aaa"."lastName" AS "aaa_lastName", (SELECT id FROM "user" "bbb") AS "aaa_id2" FROM "user" "aaa"',
    );
  });
});
