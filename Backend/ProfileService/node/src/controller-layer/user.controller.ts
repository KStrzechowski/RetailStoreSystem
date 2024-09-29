import { Request, Response, Router } from 'express';
import { Controller } from './controller';
import { DataAccessLayer } from '../data-access-layer/data-access-layer';
import { BusinessLogicLayer } from '../business-logic-layer/business-logic-layer';

export class UserController implements Controller {
    readonly router = Router();
    readonly path = '/user';
    readonly DAL: DataAccessLayer;
    readonly BLL: BusinessLogicLayer;

    constructor(DAL: DataAccessLayer, BLL: BusinessLogicLayer) {
        this.DAL = DAL;
        this.BLL = BLL;
    }

    public async getUsers(req: Request, res: Response) {
        const users = await this.DAL.getUsers();

        res.json(users);
    }

    public async getUser(req: Request, res: Response) {
        const { id } = req.params;

        const user = await this.DAL.getUser(Number(id));

        res.json(user);
    }
}
