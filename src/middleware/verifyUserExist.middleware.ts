import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prisma';
import { AppError } from '../errors/appError';

export class VerifyUserExistMiddleware {
  public  static execute = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const userFind = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userFind) {
      throw new AppError('Email já existe', 400);
    }

    next();
  };
}
