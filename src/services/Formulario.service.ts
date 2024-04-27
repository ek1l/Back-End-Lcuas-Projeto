import { prisma } from '../database/prisma';
import { CreateFormData, FormData } from '../interfaces';
import { formularioSchema } from '../schemas';

export class FormularioService {
  public create = async (
    data: CreateFormData,
    comprovantePix?: string | null,
  ): Promise<FormData> => {
    const createForm = await prisma.formulario.create({ data });
    if (comprovantePix) {
      const newComprovante = await prisma.foto.create({
        data: {
          formularioId: createForm.id,
        },
      });
      await prisma.formulario.update({
        where: {
          id: createForm.id,
        },
        data: {
          comprovantePix: comprovantePix,
        },
      });
    }
    return formularioSchema.parse(createForm);
  };

  public getAll = async (): Promise<FormData[]> => {
    const forms = await prisma.formulario.findMany();
    if (forms.length === 0) {
      return [];
    }
    return forms.map((form) => formularioSchema.parse(form));
  };

  public getOne = async (form: FormData): Promise<FormData> => {
    return form;
  };

  //   public getOne = async (): Promise<FormData> => {};
  public delete = async (id: string): Promise<void> => {
    await prisma.formulario.delete({ where: { id } });
    return;
  };
}
