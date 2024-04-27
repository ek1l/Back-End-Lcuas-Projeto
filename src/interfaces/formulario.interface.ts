import { z } from 'zod';
import { formularioSchema, createFormSchema } from '../schemas';

export type FormData = z.infer<typeof formularioSchema>;
export type CreateFormData = z.infer<typeof createFormSchema>;
