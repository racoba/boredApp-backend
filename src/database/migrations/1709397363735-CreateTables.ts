import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1709397363735 implements MigrationInterface {
    name = 'CreateTables1709397363735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" int NOT NULL IDENTITY(1,1), "username" varchar(50) NOT NULL, "password" varchar(100) NOT NULL, "email" varchar(50) NOT NULL, "walletId" int, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6280a25872a36e58deefea8ad2" ON "Users" ("walletId") WHERE "walletId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "Assets" ("id" int NOT NULL IDENTITY(1,1), "quantity" int NOT NULL, "averagePrice" float NOT NULL, CONSTRAINT "PK_ef32ecacd30a84855b7dd59b72d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Wallets" ("id" int NOT NULL IDENTITY(1,1), "userId" int, CONSTRAINT "PK_22643866c3dcd5442c341d43b67" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6c3a698210de6423e99a3cbe78" ON "Wallets" ("userId") WHERE "userId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "assets_wallet_wallets" ("assetsId" int NOT NULL, "walletsId" int NOT NULL, CONSTRAINT "PK_74f867edd8af04fcf6cfe313fc2" PRIMARY KEY ("assetsId", "walletsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4fb96e46d5c7416f112da69cd3" ON "assets_wallet_wallets" ("assetsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_88955d1b7a6b29ffa5151fdc91" ON "assets_wallet_wallets" ("walletsId") `);
        await queryRunner.query(`CREATE TABLE "wallets_asset_assets" ("walletsId" int NOT NULL, "assetsId" int NOT NULL, CONSTRAINT "PK_a3b2ae528d3504360c74f9121c7" PRIMARY KEY ("walletsId", "assetsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3ea6303f65442e1103462725fc" ON "wallets_asset_assets" ("walletsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_15bedf7289aa32b9dd15c1acc7" ON "wallets_asset_assets" ("assetsId") `);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_6280a25872a36e58deefea8ad26" FOREIGN KEY ("walletId") REFERENCES "Wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Wallets" ADD CONSTRAINT "FK_6c3a698210de6423e99a3cbe782" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assets_wallet_wallets" ADD CONSTRAINT "FK_4fb96e46d5c7416f112da69cd38" FOREIGN KEY ("assetsId") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "assets_wallet_wallets" ADD CONSTRAINT "FK_88955d1b7a6b29ffa5151fdc912" FOREIGN KEY ("walletsId") REFERENCES "Wallets"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "wallets_asset_assets" ADD CONSTRAINT "FK_3ea6303f65442e1103462725fc5" FOREIGN KEY ("walletsId") REFERENCES "Wallets"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "wallets_asset_assets" ADD CONSTRAINT "FK_15bedf7289aa32b9dd15c1acc75" FOREIGN KEY ("assetsId") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wallets_asset_assets" DROP CONSTRAINT "FK_15bedf7289aa32b9dd15c1acc75"`);
        await queryRunner.query(`ALTER TABLE "wallets_asset_assets" DROP CONSTRAINT "FK_3ea6303f65442e1103462725fc5"`);
        await queryRunner.query(`ALTER TABLE "assets_wallet_wallets" DROP CONSTRAINT "FK_88955d1b7a6b29ffa5151fdc912"`);
        await queryRunner.query(`ALTER TABLE "assets_wallet_wallets" DROP CONSTRAINT "FK_4fb96e46d5c7416f112da69cd38"`);
        await queryRunner.query(`ALTER TABLE "Wallets" DROP CONSTRAINT "FK_6c3a698210de6423e99a3cbe782"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_6280a25872a36e58deefea8ad26"`);
        await queryRunner.query(`DROP INDEX "IDX_15bedf7289aa32b9dd15c1acc7" ON "wallets_asset_assets"`);
        await queryRunner.query(`DROP INDEX "IDX_3ea6303f65442e1103462725fc" ON "wallets_asset_assets"`);
        await queryRunner.query(`DROP TABLE "wallets_asset_assets"`);
        await queryRunner.query(`DROP INDEX "IDX_88955d1b7a6b29ffa5151fdc91" ON "assets_wallet_wallets"`);
        await queryRunner.query(`DROP INDEX "IDX_4fb96e46d5c7416f112da69cd3" ON "assets_wallet_wallets"`);
        await queryRunner.query(`DROP TABLE "assets_wallet_wallets"`);
        await queryRunner.query(`DROP INDEX "REL_6c3a698210de6423e99a3cbe78" ON "Wallets"`);
        await queryRunner.query(`DROP TABLE "Wallets"`);
        await queryRunner.query(`DROP TABLE "Assets"`);
        await queryRunner.query(`DROP INDEX "REL_6280a25872a36e58deefea8ad2" ON "Users"`);
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
