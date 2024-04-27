import { Request, Response } from 'express';
import { FormularioService } from '../services/Formulario.service';
import { AppError } from '../errors/appError';

export class FormularioController {
  formularioService = new FormularioService();
  public create = async (req: Request, res: Response) => {
    try {
      const { filename }: any = req.file;
      const formData = {
        ...req.body,
        comprovantePix: filename,
      };

      const response = await this.formularioService.create(formData);
      return res.status(201).json(response);
    } catch (error: string | any) {
      throw new AppError(String(error.message), 400);
    }
  };
}
