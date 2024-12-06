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

const userSave = async (entities) => {
  await new DataSource({
    type: "sqlite",
    database: ":memory:",
    entities: entities,
    logging: false,
    synchronize: true,
  }).initialize();

  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";

  await User.getRepository().save(user);
};

describe("typeorm", () => {
  test("DataSource/options/entities/1", async () => {
    expect(async () => {
      await userSave([User]);
    }).not.toThrow();
  });
  test("DataSource/options/entities/2", async () => {
    expect(async () => {
      await userSave([]);
    }).rejects.toThrow();
  });
});
