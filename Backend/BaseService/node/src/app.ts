import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { CONTROLLER_TYPES, CORS_ORIGINS, NODE_ENV, PORT } from './config';
import { initializeDatabase } from './data-access-layer/initialize-database';
import { DataAccessLayer } from './data-access-layer/data-access-layer';
import { BusinessLogicLayer } from './business-logic-layer/business-logic-layer';
import { castErrorMiddleware, errorMiddleware } from './router-layer/middlewares';

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

    private initMiddlewares() {
        if (NODE_ENV === 'dev') {
            this.app.use(morgan('dev'));
        }

        this.app.use(
            cors({
                credentials: true,
                origin: CORS_ORIGINS,
            })
        );

        this.app.use(helmet());
        this.app.use(errorMiddleware);
        this.app.use(castErrorMiddleware);
    }

    private async initLayers() {
        const database = initializeDatabase();

        const dataAccessLayer = new DataAccessLayer(database);
        const businessAccessLayer = new BusinessLogicLayer(dataAccessLayer);

        this.initControllers(dataAccessLayer, businessAccessLayer);
    }

    private initControllers(DAL: DataAccessLayer, BLL: BusinessLogicLayer) {
        for (const ControllerType of CONTROLLER_TYPES) {
            const controller = new ControllerType(DAL, BLL);

            this.app.use('/', controller.router);
        }
    }
}

export default App;
