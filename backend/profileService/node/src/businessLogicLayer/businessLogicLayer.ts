import { DataAccessLayer } from "../dataAccessLayer/dataAccessLayer";

export class BusinessLogicLayer {
    private dal: DataAccessLayer;
    constructor(dal: DataAccessLayer) {
        this.dal = dal;
    }
}
