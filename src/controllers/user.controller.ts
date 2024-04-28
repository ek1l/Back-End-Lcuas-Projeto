import { Request, Response } from 'express';
import { UserService } from '../services';

export class UserController {
  userService = new UserService();
  public create = async (req: Request, res: Response): Promise<Response> => {
    const response = await this.userService.create(req.body);
    return res.status(201).json(response);
  };
  public login = async (req: Request, res: Response): Promise<Response> => {
    const response = await this.userService.login(req.body);
    return res.status(200).json(response);
  };
}
