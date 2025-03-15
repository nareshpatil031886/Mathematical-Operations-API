import { Router } from 'express';
import { MathController } from '../controllers/math.controller';

const router = Router();
const mathController = new MathController();

router.post('/addition', mathController.add);
router.get('/factorial/:number', mathController.factorial);
router.get('/fibonacci/:count', mathController.fibonacci);

export default router; 
