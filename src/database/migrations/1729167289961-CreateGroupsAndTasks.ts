import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGroupsAndTasks1729167289961 implements MigrationInterface {
    name = 'CreateGroupsAndTasks1729167289961'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Groups" ("id" int NOT NULL IDENTITY(1,1), "name" varchar(100) NOT NULL, "createdAt" datetime NOT NULL, "completedAt" datetime, CONSTRAINT "PK_be8543c3ec161e109d124cf9498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Tasks" ("id" int NOT NULL IDENTITY(1,1), "name" varchar(20) NOT NULL, "description" varchar(200) NOT NULL, "value" varchar(50), CONSTRAINT "PK_f38c2a61ff630a16afca4dac442" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "UserTasks" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime NOT NULL, "status" varchar(20) NOT NULL, "userId" int, "taskId" int, CONSTRAINT "PK_b4a49cb277e2f3956a40368c209" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_groups_groups" ("usersId" int NOT NULL, "groupsId" int NOT NULL, CONSTRAINT "PK_1cf09013aa7a345778eaeb5a421" PRIMARY KEY ("usersId", "groupsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1b46034fbd69664807cb4afb16" ON "users_groups_groups" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_270e39efd76d142903fd6ed528" ON "users_groups_groups" ("groupsId") `);
        await queryRunner.query(`ALTER TABLE "UserTasks" ADD CONSTRAINT "FK_f27184d80c2d06cdee3f410036c" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UserTasks" ADD CONSTRAINT "FK_ac97c7ae6db6b314bde79f987d8" FOREIGN KEY ("taskId") REFERENCES "Tasks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_groups_groups" ADD CONSTRAINT "FK_1b46034fbd69664807cb4afb16f" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_groups_groups" ADD CONSTRAINT "FK_270e39efd76d142903fd6ed528f" FOREIGN KEY ("groupsId") REFERENCES "Groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_groups_groups" DROP CONSTRAINT "FK_270e39efd76d142903fd6ed528f"`);
        await queryRunner.query(`ALTER TABLE "users_groups_groups" DROP CONSTRAINT "FK_1b46034fbd69664807cb4afb16f"`);
        await queryRunner.query(`ALTER TABLE "UserTasks" DROP CONSTRAINT "FK_ac97c7ae6db6b314bde79f987d8"`);
        await queryRunner.query(`ALTER TABLE "UserTasks" DROP CONSTRAINT "FK_f27184d80c2d06cdee3f410036c"`);
        await queryRunner.query(`DROP INDEX "IDX_270e39efd76d142903fd6ed528" ON "users_groups_groups"`);
        await queryRunner.query(`DROP INDEX "IDX_1b46034fbd69664807cb4afb16" ON "users_groups_groups"`);
        await queryRunner.query(`DROP TABLE "users_groups_groups"`);
        await queryRunner.query(`DROP TABLE "UserTasks"`);
        await queryRunner.query(`DROP TABLE "Tasks"`);
        await queryRunner.query(`DROP TABLE "Groups"`);
    }

}
