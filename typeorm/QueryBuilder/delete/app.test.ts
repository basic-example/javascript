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
  test("QueryBuilder/delete", async () => {
    await new DataSource({
      type: "sqlite",
      database: ":memory:",
      entities: [User],
      logging: false,
      synchronize: true,
    }).initialize();

    const queryBuilder = (await User.getRepository())
      .createQueryBuilder("aaa")
      .delete();

    expect(queryBuilder.getSql()).not.toBe('DELETE FROM "user" "aaa"');
    expect(queryBuilder.getSql()).toBe('DELETE FROM "user"');
  });
});
