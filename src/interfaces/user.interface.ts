import { z } from 'zod';
import {
  userSchema,
  createUserSchema,
  loginUserSchema,
  userParsed,
} from '../schemas';

export type User = z.infer<typeof userSchema>;
export type CreateUser = z.infer<typeof createUserSchema>;
export type LoginUser = z.infer<typeof loginUserSchema>;
export type UserParsed = z.infer<typeof userParsed>;
