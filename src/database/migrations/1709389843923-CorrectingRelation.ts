import { MigrationInterface, QueryRunner } from "typeorm";

export class CorrectingRelation1709389843923 implements MigrationInterface {
    name = 'CorrectingRelation1709389843923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wallets_asset_assets" ("walletsId" int NOT NULL, "assetsId" int NOT NULL, CONSTRAINT "PK_a3b2ae528d3504360c74f9121c7" PRIMARY KEY ("walletsId", "assetsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3ea6303f65442e1103462725fc" ON "wallets_asset_assets" ("walletsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_15bedf7289aa32b9dd15c1acc7" ON "wallets_asset_assets" ("assetsId") `);
        await queryRunner.query(`ALTER TABLE "wallets_asset_assets" ADD CONSTRAINT "FK_3ea6303f65442e1103462725fc5" FOREIGN KEY ("walletsId") REFERENCES "Wallets"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "wallets_asset_assets" ADD CONSTRAINT "FK_15bedf7289aa32b9dd15c1acc75" FOREIGN KEY ("assetsId") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wallets_asset_assets" DROP CONSTRAINT "FK_15bedf7289aa32b9dd15c1acc75"`);
        await queryRunner.query(`ALTER TABLE "wallets_asset_assets" DROP CONSTRAINT "FK_3ea6303f65442e1103462725fc5"`);
        await queryRunner.query(`DROP INDEX "IDX_15bedf7289aa32b9dd15c1acc7" ON "wallets_asset_assets"`);
        await queryRunner.query(`DROP INDEX "IDX_3ea6303f65442e1103462725fc" ON "wallets_asset_assets"`);
        await queryRunner.query(`DROP TABLE "wallets_asset_assets"`);
    }

}
