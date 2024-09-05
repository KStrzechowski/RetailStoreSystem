import { Database } from "../database";
import {
    addUserPostgreSQL,
    editUserPostgreSQL,
    getUserPostgreSQL,
    getUsersPostgreSQL,
    User,
} from "./user";

export class PostgreSQLDatabase implements Database {
    public getUsers = async (): Promise<User[]> => await getUsersPostgreSQL();
    public getUser = async (): Promise<User> => await getUserPostgreSQL();
    public addUser = async () => await addUserPostgreSQL();
    public editUser = async () => await editUserPostgreSQL();
}
