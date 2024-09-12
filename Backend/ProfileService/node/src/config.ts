import dotenv from "dotenv";
import { UserController } from "./routerLayer/user.controller";

dotenv.config();

export const PORT = process.env.PORT || 5000;

export const POOL_CONFIG = {
    driver: process.env.SQL_DRIVER,
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    user: process.env.SQL_UID,
    password: process.env.SQL_PWD,
};

export const ControllerTypes = [UserController];
