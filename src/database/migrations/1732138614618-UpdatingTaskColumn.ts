import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatingTaskColumn1732138614618 implements MigrationInterface {
    name = 'UpdatingTaskColumn1732138614618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tasks" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "Tasks" ADD "value" int CONSTRAINT "DF_3e9ae6e4da4d61b75440caac7cc" DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tasks" DROP CONSTRAINT "DF_3e9ae6e4da4d61b75440caac7cc"`);
        await queryRunner.query(`ALTER TABLE "Tasks" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "Tasks" ADD "value" varchar(50)`);
    }

}
