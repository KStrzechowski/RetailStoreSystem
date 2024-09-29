import { Router } from 'express';
import { CustomRouter } from './router';
import { DataAccessLayer } from '../data-access-layer/data-access-layer';
import { BusinessLogicLayer } from '../business-logic-layer/business-logic-layer';
import { UserController } from '../controller-layer/user.controller';

export class UserRouter implements CustomRouter {
    readonly router = Router();
    readonly path = '/user';
    readonly userController: UserController;

    constructor(DAL: DataAccessLayer, BLL: BusinessLogicLayer) {
        this.userController = new UserController(DAL, BLL);

        this.initializeRouter();
    }

    private initializeRouter() {
        const router = Router();

        router.get('/', this.userController.getUsers).get('/:id', this.userController.getUser);

        this.router.use(this.path, router);
    }
}
