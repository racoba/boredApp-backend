import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingColumnInAssets1709496132074 implements MigrationInterface {
    name = 'AddingColumnInAssets1709496132074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Assets" ADD "type" varchar(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Assets" DROP COLUMN "type"`);
    }

}
