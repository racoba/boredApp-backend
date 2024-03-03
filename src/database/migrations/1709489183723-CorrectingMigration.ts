import { MigrationInterface, QueryRunner } from "typeorm";

export class CorrectingMigration1709489183723 implements MigrationInterface {
    name = 'CorrectingMigration1709489183723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Assets" ADD "walletId" int`);
        await queryRunner.query(`ALTER TABLE "Assets" ADD CONSTRAINT "FK_d2366e33ecbcce897a29f26bee9" FOREIGN KEY ("walletId") REFERENCES "Wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Assets" DROP CONSTRAINT "FK_d2366e33ecbcce897a29f26bee9"`);
        await queryRunner.query(`ALTER TABLE "Assets" DROP COLUMN "walletId"`);
    }

}
