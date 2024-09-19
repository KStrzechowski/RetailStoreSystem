import { NextFunction, Request, Response, Router } from "express";
import { Controller } from "../controller";
import { DataAccessLayer } from "../../data-access-layer/data-access-layer";
import { BusinessLogicLayer } from "../../business-logic-layer/businessLogicLayer";

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

        router.get("/", this.getUsers).get("/:id", this.getUser);

        this.router.use(this.path, router);
    }

    private async getUsers(req: Request, res: Response, next: NextFunction) {
        const users = await this.DAL.getUsers();

        res.json(users);
    }

    private async getUser(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const user = await this.DAL.getUser(Number(id));

        res.json(user);
    }
}
