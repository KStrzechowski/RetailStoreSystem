import { User } from "./postgreSQL/user";

export interface Database {
    getEntity: (table: string, id: string) => Promise<any>;
    getUser: (id: number) => Promise<User>;
    getUsers: () => Promise<User[]>;
    addUser: () => Promise<void>;
    editUser: () => Promise<void>;
}
