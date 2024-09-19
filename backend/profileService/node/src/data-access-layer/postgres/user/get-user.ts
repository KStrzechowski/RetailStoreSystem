import { Pool } from "pg";
import { User } from "./user.model";

export const getUserPostgreSQL = async (
    pg: Pool,
    id: number
): Promise<User> => {
    const result = await pg.query("SELECT * from users WHERE user_id = $1", [
        id,
    ]);

    return result.rows[0];
};
