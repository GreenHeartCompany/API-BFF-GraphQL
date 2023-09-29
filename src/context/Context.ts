import { Request, Response } from 'express';
import { BaseContext } from '../dtos/models/Context/context-model';

const createContext = ({ req }: { req: Request; res: Response }): BaseContext => {
  const token = req.headers.authorization || ''; 
  const url = req.url || '';
  return { token, url };
};

export default createContext;