import { Request, Response, NextFunction } from 'express';

/**
 * A template method just to show the convention used
 */
export const publicTemplateMethod = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        return res.json({
            message: "This is a public template method, it doesn't do anything",
        });
    } catch (err) {
        next(err);
    }
};
