import { z } from 'zod';

const isValidImageFile = (file: File) => {
  if (!file || !(file instanceof File)) {
    return true;
  }

  const allowedExtensions = ['jpg', 'jpeg', 'png'];
  const extension = file.name.split('.').pop()?.toLowerCase();
  return (
    file.type.startsWith('image/') &&
    extension &&
    allowedExtensions.includes(extension)
  );
};

export const formularioSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  dataNascimento: z.string(),
  cpf: z.string().min(11, 'O CPF deve ter pelo menos 11 caracteres'),
  whatsappNumber: z
    .string()
    .min(8, 'O WhatsApp deve ter pelo menos 8 caracteres'),
  demaisNumeros: z.string().optional(),
  email: z
    .string()
    .email('Email inválido')
    .min(3, 'O email deve ter pelo menos 3 caracteres'),
  cep: z.string().min(8, 'O CEP deve ter pelo menos 8 caracteres'),
  ruaAvenida: z
    .string()
    .min(3, 'A rua ou avenida deve ter pelo menos 3 caracteres'),
  numero: z.string().min(1, 'O número deve ter pelo menos 1 caractere'),
  bairro: z.string().min(3, 'O bairro deve ter pelo menos 3 caracteres'),
  cidade: z.string().min(3, 'A cidade deve ter pelo menos 3 caracteres'),
  estado: z.string().min(2, 'O estado deve ter pelo menos 2 caracteres'),
  prontoReferencia: z.string().optional(),
  assistenciaSaude: z.string().optional(),
  assistenciaFuneral: z.string().optional(),
  dependentes: z.string().optional(),
  mensalidade: z.string(),
  valorAdesao: z.string(),
  comprovantePix: z.any().refine(isValidImageFile, {
    message: 'O arquivo deve ser uma imagem no formato .jpg, .jpeg, ou .png',
  }),
  observacao: z.string().optional(),
});

export const createFormSchema = formularioSchema.omit({ id: true });
