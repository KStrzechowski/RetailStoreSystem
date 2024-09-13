import { User } from "./user.model";
import { Pool } from "pg";

export const getUserPostgreSQL = async (
    pg: Pool,
    id: number
): Promise<User> => {
    const result = await pg.query("SELECT * from users WHERE user_id = $1", [
        id,
    ]);

    return result.rows[0];
};
