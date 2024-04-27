import { Router } from 'express';
import { ValidateSchemaBodyMiddleware } from '../middleware';
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

formRouter.get('/');
formRouter.get('/:id');
formRouter.delete('/:id');
