import express from "express";
import http from "http";

interface Controller {
    router: express.Router;
}

class App {
    private app = express();

    constructor(controllers: Controller[]) {
        this.initControllers(controllers);
        this.initMiddlewares();
        this.initDatabase();
    }

    public listen() {
        this.app.listen(3000, () => {
            console.log("Server is up and running on port 3000");
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
