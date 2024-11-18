import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserScore1731955638573 implements MigrationInterface {
    name = 'AddUserScore1731955638573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD "score" int NOT NULL CONSTRAINT "DF_95df224f933ebe4c4ad6876e530" DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "DF_95df224f933ebe4c4ad6876e530"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "score"`);
    }

}
