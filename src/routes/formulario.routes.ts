import { Router } from 'express';
import {
  ValidateSchemaBodyMiddleware,
  VerifyHeaderAuthorizationMiddleware,
  VerifyIDExistFormMiddleware,
} from '../middleware';
import { createFormSchema } from '../schemas';
import { FormularioController } from '../controllers';
import upload from '../middleware/multerFormData';

export const formRouter = Router();
const formController = new FormularioController();

formRouter.post(
  '/',
  upload.single('comprovantePix'),
  ValidateSchemaBodyMiddleware.execute(createFormSchema),
  formController.create,
);

formRouter.get(
  '/',
  VerifyHeaderAuthorizationMiddleware.execute,
  formController.getAll,
);

formRouter.get(
  '/:id',
  VerifyHeaderAuthorizationMiddleware.execute,
  VerifyIDExistFormMiddleware.execute,
  formController.getOne,
);

formRouter.delete(
  '/:id',
  VerifyHeaderAuthorizationMiddleware.execute,
  VerifyIDExistFormMiddleware.execute,
  formController.delete,
);
