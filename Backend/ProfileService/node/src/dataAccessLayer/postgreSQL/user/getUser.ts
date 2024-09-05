import { User } from "./user.model";

export const getUserPostgreSQL = async (): Promise<User> => {
    const user: User = {
        email: "",
        firstName: "",
        lastName: "",
        age: 0,
    };

    return user;
};
