import { Router } from 'express';

export interface CustomRouter {
    readonly router: Router;
    readonly path: string;
}
