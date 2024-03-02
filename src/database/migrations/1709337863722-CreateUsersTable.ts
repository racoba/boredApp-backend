import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateUsersTable1709337863722 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                },
                {
                    name: "username",
                    type: "varchar",
                    length: "50",
                    isNullable: false
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "50",
                    isNullable: false
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "50",
                    isNullable: false
                }
            ]
        }))
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users")
    }

}
