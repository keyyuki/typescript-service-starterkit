/**
 * This middleware must use after other auth middleware
 * This will check if request param has user properties
 * if not found user in request, it will response 401, Unauthorized
 */
import { Request, Response, NextFunction } from 'express';

const guard = (
  req: Request,
  res: Response,
  next: NextFunction,
): boolean | Response => {
  // pass for route login
  if (req.path === '/login') {
    next();
    return true;
  }

  if (req.user) {
    next();
    return true;
  }
  return res.status(401).json({ code: 0, messages: ['Unauthorized user!'] });
};

export default guard;
