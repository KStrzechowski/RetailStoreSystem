import { DataAccessLayer } from '../data-access-layer/data-access-layer';
import { BusinessLogicLayer } from '../business-logic-layer/business-logic-layer';

export interface Controller {
    readonly DAL: DataAccessLayer;
    readonly BLL: BusinessLogicLayer;
}
