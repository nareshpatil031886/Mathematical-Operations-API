import express from 'express';
import cors from 'cors';
import { json } from 'express';
import mathRoutes from './routes/math.routes';
import { errorHandler } from './middleware/error.middleware';
import { requestLogger } from './middleware/logger.middleware';

const app = express();

// Middleware
app.use(cors());
app.use(json());
app.use(requestLogger);

// Routes
app.use('/api', mathRoutes);

// Error handling
app.use(errorHandler);

export default app; 
