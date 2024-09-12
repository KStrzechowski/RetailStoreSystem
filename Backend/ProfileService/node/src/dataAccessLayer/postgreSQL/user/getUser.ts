import { User } from "./user.model";

export const getUserPostgreSQL = async (): Promise<User> => {
    const user: User = {
        email: "email",
        firstName: "firstName",
        lastName: "lastName",
        age: 0,
    };

    return user;
};
