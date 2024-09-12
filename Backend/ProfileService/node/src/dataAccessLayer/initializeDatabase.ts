import pg from "pg";
import { POOL_CONFIG } from "../config";
import { Database } from "./database";
import { PostgreSQLDatabase } from "./postgreSQL/postgreSQLDatabase";

export const initializeDatabase = (): Database => initializePostgreSQL();

// const initializeMongoDB = async (): Promise<Database> => {};

const initializePostgreSQL = (): Database => {
    const pool = new pg.Pool(POOL_CONFIG);
    const postgresDB = new PostgreSQLDatabase(pool);

    return postgresDB;
};
