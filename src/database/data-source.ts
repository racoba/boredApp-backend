import "reflect-metadata"
import { DataSource } from "typeorm"
require("dotenv").config({})


export const AppDataSource = new DataSource({
    type: "mssql",
    host: process.env.DB_HOST?.toString(),
    port: 1433,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities:["src/app/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
    subscribers: [],
    extra: {
        trustServerCertificate: true,
        useUTC: true,
      },
})
