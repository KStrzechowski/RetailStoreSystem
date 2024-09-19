import { Router } from 'express';
import { DataAccessLayer } from '../data-access-layer/data-access-layer';
import { BusinessLogicLayer } from '../business-logic-layer/businessLogicLayer';

export interface Controller {
    readonly router: Router;
    readonly path: string;
    readonly DAL: DataAccessLayer;
    readonly BLL: BusinessLogicLayer;
}
