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
  test("QueryBuilder/where", async () => {
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
        .where("firstName = :name", { name: "name1234" })
        .getQueryAndParameters(),
    ).toStrictEqual([
      'SELECT id FROM "user" "aaa" WHERE firstName = ?',
      ["name1234"],
    ]);
  });
});
