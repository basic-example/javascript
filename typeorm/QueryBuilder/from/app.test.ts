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
  test("QueryBuilder/from", async () => {
    const dataSource = new DataSource({
      type: "sqlite",
      database: ":memory:",
      entities: [User],
      logging: false,
      synchronize: true,
    });
    await dataSource.initialize();

    expect(dataSource.createQueryBuilder().from(User, "aaa").getSql()).toBe(
      'SELECT * FROM "user" "aaa"',
    );
  });
});
