import HttpException from "./http.exception";

export class NotFoundException extends HttpException {
    constructor() {
        super(404, "not-found", `Record does not exist`);
    }
}
