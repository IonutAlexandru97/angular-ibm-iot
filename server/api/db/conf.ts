import * as pgPromise from "pg-promise";

export const pgp = pgPromise();

const dbConf = {
    host: "localhost",
    port: 5432,
    database: "development",
    user: "postgres",
    password: "admin"
}

export const db = pgp(dbConf);