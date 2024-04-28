import { Router } from 'express';
import { UserController } from '../controllers';
import {
  ValidateSchemaBodyMiddleware,
  VerifyHeaderAuthorizationMiddleware,
  VerifyUserExistMiddleware,
} from '../middleware';
import { createUserSchema, loginUserSchema } from '../schemas';
export const userRouter = Router();
const userController = new UserController();

userRouter.post(
  '/register',
  VerifyHeaderAuthorizationMiddleware.execute,
  ValidateSchemaBodyMiddleware.execute(createUserSchema),
  VerifyUserExistMiddleware.execute,
  userController.create,
);

userRouter.post(
  '/login',

  ValidateSchemaBodyMiddleware.execute(loginUserSchema),
  userController.login,
);
