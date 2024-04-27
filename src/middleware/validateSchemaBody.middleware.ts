import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export class ValidateSchemaBodyMiddleware {
  public static execute = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      next();
    };
  };
}
