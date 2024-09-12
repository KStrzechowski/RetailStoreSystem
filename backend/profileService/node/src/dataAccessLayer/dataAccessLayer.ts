import { Database } from "./database";

export class DataAccessLayer {
    private db: Database;
    constructor(db: Database) {
        this.db = db;
    }

    public getEntity = async (table: string, id: string) =>
        await this.db.getEntity(table, id);

    public getUsers = async () => await this.db.getUsers();
    public getUser = async () => await this.db.getUser();
    public addUser = async () => await this.db.addUser();
    public editUser = async () => await this.db.editUser();
}
