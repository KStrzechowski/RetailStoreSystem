import { User } from './postgres/user';

export interface Database {
    getEntity: (table: string, id: string) => Promise<unknown>;
    getUser: (id: number) => Promise<User>;
    getUsers: () => Promise<User[]>;
    addUser: () => Promise<void>;
    editUser: () => Promise<void>;
}
