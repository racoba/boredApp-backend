require("dotenv").config({})

module.exports = {
    type: "mssql",
    host: process.env.DB_HOST?.toString(),
    port: 1433,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "tests-racobored",
    dropSchema: true,
    logging: false,
    synchroize: true,
    migrationsRun: true,
  
    entities: ['src/database/entities/*.ts'],
    migrations: ['src/database/migrations/*.ts'],
    cli: {
      entitiesDir: 'src/app/entities',
      migrationsDir: 'src/database/migrations',
    },
  };