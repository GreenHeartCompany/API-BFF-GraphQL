import { Request, Response } from 'express';
import { TokenContext } from '../../dtos/inputs/Usuario/token-context';

const createContext = ({ req }: { req: Request; res: Response }): TokenContext => {
  const token = req.headers.authorization || ''; 
  return { token };
};

export default createContext;