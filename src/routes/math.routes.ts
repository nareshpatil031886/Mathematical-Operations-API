import { Router } from 'express';
import { MathController } from '../controllers/math.controller';
import { validate } from '../middleware/validation.middleware';
import {
  additionValidation,
  factorialValidation,
  fibonacciValidation,
} from '../validators/math.validators';

const router = Router();
const mathController = new MathController();

router.post('/addition', validate(additionValidation), mathController.add);
router.get('/factorial/:number', validate(factorialValidation), mathController.factorial);
router.get('/fibonacci/:count', validate(fibonacciValidation), mathController.fibonacci);

export default router; 
