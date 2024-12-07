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
  test("QueryBuilder/getParameters", async () => {
    await new DataSource({
      type: "sqlite",
      database: ":memory:",
      entities: [User],
      logging: false,
      synchronize: true,
    }).initialize();

    const queryBuilder = (await User.getRepository())
      .createQueryBuilder("aaa")
      .update()
      .set({ firstName: "bbb", lastName: "ccc" });

    expect(queryBuilder.getParameters()).toStrictEqual({});

    queryBuilder.getQuery();

    expect(queryBuilder.getParameters()).toStrictEqual({
      orm_param_0: "bbb",
      orm_param_1: "ccc",
    });
  });
});
