import { prisma } from '../database/prisma';
import { CreateUser, LoginUser, User, UserParsed } from '../interfaces';
import bcrypt from 'bcrypt';
import { userParsed } from '../schemas';
import { AppError } from '../errors/appError';
import jwt from 'jsonwebtoken';
export class UserService {
  public create = async (data: CreateUser): Promise<UserParsed> => {
    const encryptPassword = await bcrypt.hash(data.password, 10);
    const newUser = {
      nome: data.nome,
      email: data.email,
      password: encryptPassword,
    };
    await prisma.user.create({ data: newUser });
    return userParsed.parse(newUser);
  };

  public login = async (data: LoginUser): Promise<{ token: string }> => {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new AppError('Email ou senha inválidos', 401);
    }
    const verifyPassword = await bcrypt.compare(data.password, user.password);

    if (!verifyPassword) {
      throw new AppError('Email ou senha inválidos', 401);
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.SECRET_KEY as string,
      {
        expiresIn: '1h',
      },
    );

    return { token };
  };
}
