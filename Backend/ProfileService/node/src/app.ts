import express from "express";
import { PORT } from "./config";

interface Controller {
    router: express.Router;
}

class App {
    private app = express();

    constructor(controllers: Controller[]) {
        this.initMiddlewares();
        this.initControllers(controllers);
        this.initDatabase();
    }

    public listen() {
        this.app.listen(PORT, () => {
            console.log(`Server is up and running on port ${PORT}`);
        });
    }

    private initControllers(controllers: Controller[]) {
        for (const controller of controllers) {
            this.app.use("/v1", controller.router);
        }
    }

    private initMiddlewares() {}

    private initDatabase() {}
}

export default App;
