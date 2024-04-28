import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/appError';
import jwt from 'jsonwebtoken';
export class VerifyHeaderAuthorizationMiddleware {
  public static execute = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new AppError('Token not found', 401);
    }
    const token = authorization?.replace('Bearer ', '');
    const secret = process.env.SECRET_KEY;

    if (token && secret) {
      jwt.verify(token, secret);
    }

    next();
  };
}
