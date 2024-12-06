import {
  BaseEntity,
  Column,
  DataSource,
  Entity,
  PrimaryGeneratedColumn,
  SelectQueryBuilder,
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
  test("Repository/createQueryBuilder", async () => {
    await new DataSource({
      type: "sqlite",
      database: ":memory:",
      entities: [User],
      logging: false,
      synchronize: true,
    }).initialize();

    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";

    expect(
      (await User.getRepository()).createQueryBuilder("aaa"),
    ).toBeInstanceOf(SelectQueryBuilder);
    expect(
      (await User.getRepository()).createQueryBuilder("aaa").getSql(),
    ).toContain('FROM "user" "aaa"');
  });
});
