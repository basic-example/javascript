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
  test("QueryBuilder/take", async () => {
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
        .select("id")
        .take(10)
        .getSql(),
    ).toBe('SELECT id FROM "user" "aaa" LIMIT 10');
  });
});
