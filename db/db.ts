import pgPromise = require("pg-promise");

export const pgp = pgPromise();
const dbConf = {
    host: "localhost",
    port: 5432,
    database: "users",
    user: "postgres",
    password: "admin"
};

export const db = pgp(dbConf);