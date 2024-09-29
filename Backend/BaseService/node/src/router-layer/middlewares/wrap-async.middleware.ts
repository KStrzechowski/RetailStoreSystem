import { Request, Response, NextFunction } from 'express';

/**
 * Makes sure to catch any errors and pass them along to the next
 * middleware in the chain, in this case the error handler.
 * @param fn Asynchronous endpoint function to be performed.
 */
export const wrapAsync = (fn: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next);
    };
};
