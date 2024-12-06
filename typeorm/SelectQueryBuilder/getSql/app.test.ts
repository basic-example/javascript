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
  test("SelectQueryBuilder/getSql", async () => {
    await new DataSource({
      type: "sqlite",
      database: ":memory:",
      entities: [User],
      logging: false,
      synchronize: true,
    }).initialize();

    expect(
      (await User.getRepository()).createQueryBuilder("aaa").getSql(),
    ).toBe(
      'SELECT "aaa"."id" AS "aaa_id", "aaa"."firstName" AS "aaa_firstName", "aaa"."lastName" AS "aaa_lastName" FROM "user" "aaa"',
    );
  });
});
