import dotenv from "dotenv";
import { UserController } from "./routerLayer/user/user.controller";

dotenv.config();

export const PORT = process.env.PORT || 5000;

export const POOL_CONFIG = {
    host: process.env.SQL_HOST,
    port: Number(process.env.SQL_PORT),
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
};

export const CONTROLLER_TYPES = [UserController];
