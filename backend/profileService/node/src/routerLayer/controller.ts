import { Router } from "express";
import { DataAccessLayer } from "../dataAccessLayer/dataAccessLayer";
import { BusinessLogicLayer } from "../businessLogicLayer/businessLogicLayer";

export interface Controller {
    readonly router: Router;
    readonly path: string;
    readonly DAL: DataAccessLayer;
    readonly BLL: BusinessLogicLayer;
}
