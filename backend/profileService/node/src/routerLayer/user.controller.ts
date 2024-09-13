import { Router } from "express";
import { Controller } from "./controller";
import { DataAccessLayer } from "../dataAccessLayer/dataAccessLayer";
import { BusinessLogicLayer } from "../businessLogicLayer/businessLogicLayer";

export class UserController implements Controller {
    readonly router = Router();
    readonly path = "/user";
    readonly DAL: DataAccessLayer;
    readonly BLL: BusinessLogicLayer;

    constructor(DAL: DataAccessLayer, BLL: BusinessLogicLayer) {
        this.DAL = DAL;
        this.BLL = BLL;

        this.initializeRouter();
    }

    private initializeRouter() {
        const router = Router();

        router
            .get("/", (req, res) => res.send("Hello world!"))
            .get("/:id", async (req, res) => {
                const { id } = req.params;
                const user = await this.DAL.getUser(Number(id));
                console.log(user);
                res.json(user);
            });

        this.router.use(this.path, router);
    }
}
