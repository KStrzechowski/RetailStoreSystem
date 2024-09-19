import { Request, Response, NextFunction } from "express";
import { HttpException } from "../../exceptions";

export const castErrorMiddleware = (
    err: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err.name === "CastError") {
        const status = err.status || 400;
        const code = "cast-error";
        const message = err.message;
        console.error(
            `Error: status: ${status}, code: ${code}, message: ${message}`
        );
        console.error(`${err.stack}`);
        return res.status(status).json({ code, message });
    }
    return next(err);
};
