import { prisma } from '../database/prisma';
import { CreateFormData, FormData } from '../interfaces';
import { formularioSchema } from '../schemas';

export class FormularioService {
  public create = async (data: CreateFormData): Promise<FormData> => {
    const createForm = await prisma.formulario.create({ data });
    return formularioSchema.parse(createForm);
  };

  //   public delete = async (): Promise<void> => {};
  //   public getAll = async (): Promise<FormData[]> => {};
  //   public getOne = async (): Promise<FormData> => {};
}
