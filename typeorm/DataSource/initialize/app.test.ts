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
const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  entities: [User],
  logging: false,
  synchronize: true,
});

const user = new User();
user.firstName = "Timber";
user.lastName = "Saw";

describe("typeorm", () => {
  test("DataSource/initialize/1", async () => {
    expect(async () => {
      await AppDataSource.initialize();
      await User.getRepository().save(user);
    }).not.toThrow();
  });
  test("DataSource/initialize/2", async () => {
    expect(async () => {
      await User.getRepository().save(user);
    }).rejects.toThrow();
  });
});
