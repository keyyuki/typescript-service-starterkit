/**
 * Middle ware help get jwt token from header authorization and decode it to get authen information
 * header {
 *  authorization: Bearer JWT-TOKEN
 * }
 *
 * after decode, set user to request param
 * req.user = user from token
 */
import { Request, Response, NextFunction } from 'express';
import * as get from 'get-value';
import * as fs from 'fs';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';

const publicKey = fs.readFileSync(
  path.resolve(__dirname, '../../config/authen/jwt-public.key'),
);
const auth = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = get(req.header, 'authorization', { default: '' });
  const token = authHeader.split(' ')[1];
  if (authHeader && token) {
    jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (error, decode) => {
      if (error || typeof decode === 'string') {
        req.user = undefined;
      } else {
        req.user = decode;
      }
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
};

export default auth;
