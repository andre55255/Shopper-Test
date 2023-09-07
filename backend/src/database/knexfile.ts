import "ts-node/register";
import { credentials } from "./credentials";
import { Knex } from "knex";

const config : Knex.Config = {
    client: "mysql2",
    connection: {
        database: credentials.database,
        user: credentials.user,
        password: credentials.password,
        host: credentials.host,
        port: credentials.port
    },
    pool: {
        min: 2,
        max: 10,
    }
};

export default config;