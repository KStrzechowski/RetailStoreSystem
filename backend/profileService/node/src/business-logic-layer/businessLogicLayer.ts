import { DataAccessLayer } from "../data-access-layer/data-access-layer";

export class BusinessLogicLayer {
    private dal: DataAccessLayer;
    constructor(dal: DataAccessLayer) {
        this.dal = dal;
    }
}
