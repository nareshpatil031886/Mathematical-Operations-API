import { Request, Response, NextFunction } from 'express';
import { MathService } from '../services/math.service';
import { AppError } from '../middleware/error.middleware';

const mathService = new MathService();

export class MathController {
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const { a, b } = req.body;
      
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new AppError(400, 'Both parameters must be numbers');
      }

      const result = await mathService.add(a, b);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }

  async factorial(req: Request, res: Response, next: NextFunction) {
    try {
      const n = parseInt(req.params.number);
      
      if (isNaN(n)) {
        throw new AppError(400, 'Invalid number provided');
      }

      const result = await mathService.factorial(n);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }

  async fibonacci(req: Request, res: Response, next: NextFunction) {
    try {
      const count = parseInt(req.params.count);
      
      if (isNaN(count)) {
        throw new AppError(400, 'Invalid count provided');
      }

      const result = await mathService.fibonacci(count);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }
} 
