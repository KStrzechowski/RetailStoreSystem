import pg from "pg";
import { Database } from "../database";
import {
    addUserPostgreSQL,
    editUserPostgreSQL,
    getUserPostgreSQL,
    getUsersPostgreSQL,
    User,
} from "./user";

export class PostgreSQLDatabase implements Database {
    public pg: pg.Pool;

    constructor(pg: pg.Pool) {
        this.pg = pg;
    }

    public getEntity = async (table: string, id: string): Promise<any> => {
        const result = await this.pg.query("SELECT * FROM $1 WHERE id = $2", [
            table,
            id,
        ]);

        return result;
    };

    public getUsers = async (): Promise<User[]> => await getUsersPostgreSQL();
    public getUser = async (): Promise<User> => await getUserPostgreSQL();
    public addUser = async () => await addUserPostgreSQL();
    public editUser = async () => await editUserPostgreSQL();
}
