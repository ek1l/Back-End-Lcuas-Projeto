import { Request, Response } from 'express';
import { AppError } from '../errors/appError';
import { FormularioService } from '../services';

export class FormularioController {
  formularioService = new FormularioService();
  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const comprovantePix = req.file ? req.file.filename : null;
      const formData = {
        ...req.body,
        comprovantePix,
      };

      const response = await this.formularioService.create(
        formData,
        comprovantePix,
      );
      return res.status(201).json(response);
    } catch (error: string | any) {
      throw new AppError(String(error.message), 400);
    }
  };

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const response = await this.formularioService.getAll();
    return res.status(200).json(response);
  };
  public getOne = async (req: Request, res: Response): Promise<Response> => {
    const response = await this.formularioService.getOne(res.locals.formulario);
    return res.status(200).json(response);
  };
  public delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const response = await this.formularioService.delete(id);
    return res.status(200).json(response);
  };
}
