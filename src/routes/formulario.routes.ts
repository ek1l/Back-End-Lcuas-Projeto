import { Router } from 'express';
import {
  ValidateSchemaBodyMiddleware,
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

formRouter.get('/', formController.getAll);

formRouter.get('/:id', VerifyIDExistFormMiddleware.execute, formController.getOne);

formRouter.delete(
  '/:id',
  VerifyIDExistFormMiddleware.execute,
  formController.delete,
);
