import {
  AbstractLogger,
  BaseEntity,
  Column,
  DataSource,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];
}

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.photos)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user: User;
}

describe("typeorm", () => {
  test("QueryBuilder/leftJoinAndSelect", async () => {
    let selectQuery;

    class Logger extends AbstractLogger {
      protected writeLog(level, logMessage, queryRunner) {}

      logQuery(query, parameters, queryRunner) {
        query = query.replace("?", () => {
          return "'" + parameters.shift() + "'";
        });
        if (query.match(/^SELECT/)) {
          selectQuery = query;
        }
      }
    }

    await new DataSource({
      type: "sqlite",
      database: ":memory:",
      entities: [User, Photo],
      logger: new Logger(),
      logging: false,
      synchronize: true,
    }).initialize();

    const query1 = await User.getRepository()
      .createQueryBuilder("u")
      .select("1")
      .leftJoinAndSelect("u.photos", "p");

    await expect(query1.getMany()).resolves.not.toThrow();
    expect(selectQuery).toBe(
      'SELECT "p"."id" AS "p_id", "p"."url" AS "p_url", "p"."user_id" AS "p_user_id", 1 FROM "user" "u" LEFT JOIN "photo" "p" ON "p"."user_id"="u"."id"',
    );

    const query2 = await User.getRepository()
      .createQueryBuilder("u")
      .select("1")
      .leftJoinAndSelect("u.photos", "p", "u.firstName = :name", {
        name: "qqq",
      });

    await expect(query2.getMany()).resolves.not.toThrow();
    expect(selectQuery).toBe(
      'SELECT "p"."id" AS "p_id", "p"."url" AS "p_url", "p"."user_id" AS "p_user_id", 1 FROM "user" "u" LEFT JOIN "photo" "p" ON "p"."user_id"="u"."id" AND ("u"."firstName" = \'qqq\')',
    );
  });
});
