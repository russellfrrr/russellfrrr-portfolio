import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './documentation/swagger.config.js';

import connectDB from './database/connectDB.js';

import authRouter from './routes/auth.routes.js';
import accountsRouter from './routes/accounts.routes.js';
import categoryRouter from './routes/categories.routes.js';
import txRouter from './routes/transactions.routes.js';
import budgetsRouter from './routes/budgets.routes.js';
import statsRouter from './routes/stats.routes.js';

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
})); 
app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1/auth/', authRouter);
app.use('/api/v1/accounts/', accountsRouter);
app.use('/api/v1/categories/', categoryRouter);
app.use('/api/v1/transactions/', txRouter);
app.use('/api/v1/budgets/', budgetsRouter);
app.use('/api/v1/stats/', statsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the SpendWise API!');
})

export default app;
