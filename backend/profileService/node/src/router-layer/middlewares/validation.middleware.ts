import express from "express";
import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { HttpException } from "../../exceptions";

export function validationMiddleware<T>(
    type: any,
    skipMissingProperties = false
): express.RequestHandler {
    return (req, res, next) => {
        validate(plainToInstance(type, req.body), {
            skipMissingProperties,
        }).then((errors: ValidationError[]) => {
            if (errors.length > 0) {
                const message = parseError(errors);
                next(new HttpException(400, "validation-error", message));
            } else {
                next();
            }
        });
    };
}

const parseError = (errors: ValidationError[]): string => {
    let message = "";
    for (const error of errors) {
        if (error.children && error.children.length > 0) {
            message = message.length > 0 ? message.concat(", ") : message;
            message = message.concat(parseError(error.children));
        }

        if (error.constraints) {
            const localMessage = Object.values(error.constraints);
            if (localMessage) {
                message = message.length > 0 ? message.concat(", ") : message;
                message = message.concat(localMessage.join(", "));
            }
        }
    }
    return message;
};
