import "reflect-metadata"
import { DataSource } from "typeorm"

require ('custom-env').env('dev')

export const AppDataSource = new DataSource({
    type: "mssql",
    host: process.env.DB_HOST,
    port:3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities:["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
