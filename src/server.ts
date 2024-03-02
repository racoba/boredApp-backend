import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source"

const app = express();

app.use(cors());

app.use(express.json());
console.log(process.env.DB_PASS)
AppDataSource.initialize().then(async () => {
    console.log("Database OK");
    app.listen(3333, () => {
        console.log("Server started on port 3333");
    })
})