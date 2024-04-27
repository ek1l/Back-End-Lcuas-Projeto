import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prisma';
import { AppError } from '../errors/appError';

export class VerifyIDExistFormMiddleware {
  public static execute = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = req.params;

    const verifyId = await prisma.formulario.findUnique({
      where: {
        id,
      },
    });

    if (!verifyId) {
      throw new AppError('Form not exist', 404);
    }
    res.locals.formulario = verifyId;
    return next();
  };
}
