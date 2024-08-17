import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1723907380960 implements MigrationInterface {
    name = 'CreateUser1723907380960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" int NOT NULL IDENTITY(1,1), "username" varchar(50) NOT NULL, "password" varchar(100) NOT NULL, "email" varchar(50) NOT NULL, "pictureUrl" varchar(50), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
