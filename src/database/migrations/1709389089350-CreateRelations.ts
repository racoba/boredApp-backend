import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelations1709389089350 implements MigrationInterface {
    name = 'CreateRelations1709389089350'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Assets" DROP CONSTRAINT "FK_d2366e33ecbcce897a29f26bee9"`);
        await queryRunner.query(`ALTER TABLE "Wallets" DROP CONSTRAINT "FK_6c3a698210de6423e99a3cbe782"`);
        await queryRunner.query(`ALTER TABLE "Assets" DROP COLUMN "walletId"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "PK_16d4f7d636df336db11d87413e3"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "id" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Assets" DROP CONSTRAINT "PK_ef32ecacd30a84855b7dd59b72d"`);
        await queryRunner.query(`ALTER TABLE "Assets" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Assets" ADD "id" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "Assets" ADD CONSTRAINT "PK_ef32ecacd30a84855b7dd59b72d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Wallets" DROP CONSTRAINT "PK_22643866c3dcd5442c341d43b67"`);
        await queryRunner.query(`ALTER TABLE "Wallets" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Wallets" ADD "id" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "Wallets" ADD CONSTRAINT "PK_22643866c3dcd5442c341d43b67" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Wallets" ALTER COLUMN "userId" int`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6c3a698210de6423e99a3cbe78" ON "Wallets" ("userId") WHERE "userId" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Wallets" ADD CONSTRAINT "FK_6c3a698210de6423e99a3cbe782" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Wallets" DROP CONSTRAINT "FK_6c3a698210de6423e99a3cbe782"`);
        await queryRunner.query(`DROP INDEX "REL_6c3a698210de6423e99a3cbe78" ON "Wallets"`);
        await queryRunner.query(`ALTER TABLE "Wallets" ALTER COLUMN "userId" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Wallets" DROP CONSTRAINT "PK_22643866c3dcd5442c341d43b67"`);
        await queryRunner.query(`ALTER TABLE "Wallets" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Wallets" ADD "id" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Wallets" ADD CONSTRAINT "PK_22643866c3dcd5442c341d43b67" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Assets" DROP CONSTRAINT "PK_ef32ecacd30a84855b7dd59b72d"`);
        await queryRunner.query(`ALTER TABLE "Assets" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Assets" ADD "id" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Assets" ADD CONSTRAINT "PK_ef32ecacd30a84855b7dd59b72d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "PK_16d4f7d636df336db11d87413e3"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "id" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Assets" ADD "walletId" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Wallets" ADD CONSTRAINT "FK_6c3a698210de6423e99a3cbe782" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Assets" ADD CONSTRAINT "FK_d2366e33ecbcce897a29f26bee9" FOREIGN KEY ("walletId") REFERENCES "Wallets"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
