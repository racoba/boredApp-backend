import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateTableAssets1709339239010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Assets",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                },
                {
                    name: "quantity",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "averagePrice",
                    type: "float",
                    isNullable: false
                },
            ]
        }));

        await queryRunner.addColumn("Assets", new TableColumn({
            name: "walletId",
            type: "int",
        }));

        await queryRunner.createForeignKey(
            "Assets",
            new TableForeignKey({
                columnNames: ["walletId"],
                referencedColumnNames: ["id"],
                referencedTableName: "Wallets",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Assets")
    }

}
