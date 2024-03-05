import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingCodeInAsset1709677706627 implements MigrationInterface {
    name = 'AddingCodeInAsset1709677706627'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Assets" ADD "code" varchar(8) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Assets" DROP COLUMN "code"`);
    }

}
