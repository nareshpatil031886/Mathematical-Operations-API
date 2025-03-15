import { Request, Response, NextFunction } from 'express';
import { MathService } from '../services/math.service';
import { AppError } from '../middleware/error.middleware';

const mathService = new MathService();

export class MathController {
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const { a, b } = req.body;
      const result = await mathService.add(Number(a), Number(b));
      res.json({ success: true, result });
    } catch (error) {
      next(error);
    }
  }

  async factorial(req: Request, res: Response, next: NextFunction) {
    try {
      const n = parseInt(req.params.number);
      const result = await mathService.factorial(n);
      res.json({ success: true, result });
    } catch (error) {
      next(error);
    }
  }

  async fibonacci(req: Request, res: Response, next: NextFunction) {
    try {
      const count = parseInt(req.params.count);
      const result = await mathService.fibonacci(count);
      res.json({ success: true, result });
    } catch (error) {
      next(error);
    }
  }
} 
