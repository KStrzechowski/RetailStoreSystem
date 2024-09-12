import express from "express";
import http from "http";
import { ControllerTypes, PORT } from "./config";
import { initializeDatabase } from "./dataAccessLayer/initializeDatabase";
import { DataAccessLayer } from "./dataAccessLayer/dataAccessLayer";
import { BusinessLogicLayer } from "./businessLogicLayer/businessLogicLayer";
import { UserController } from "./routerLayer/user.controller";

class App {
    private app = express();

    constructor() {
        this.initMiddlewares();
        this.initLayers();
    }

    public listen() {
        this.app.listen(PORT, () => {
            console.log(`Server is up and running on port ${PORT}`);
        });
    }

    private initMiddlewares() {}

    private async initLayers() {
        const database = initializeDatabase();

        const dataAccessLayer = new DataAccessLayer(database);
        const businessAccessLayer = new BusinessLogicLayer(dataAccessLayer);

        this.initControllers(dataAccessLayer, businessAccessLayer);
    }

    private initControllers(DAL: DataAccessLayer, BLL: BusinessLogicLayer) {
        for (const ControllerType of ControllerTypes) {
            const controller = new ControllerType(DAL, BLL);

            this.app.use("/", controller.router);
        }
    }
}

export default App;
