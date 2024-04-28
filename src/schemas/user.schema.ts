import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().optional(),
  email: z
    .string()
    .email('Email inválido')
    .min(3, 'O email deve ter pelo menos 3 caracteres'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
});

export const createUserSchema = userSchema.omit({ id: true });
export const loginUserSchema = userSchema.omit({ nome: true, id: true });
export const userParsed = userSchema.omit({ password: true });
