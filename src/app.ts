import express from 'express';
import helmet from 'helmet';
import 'express-async-errors';
import path from 'path';

import { formRouter } from './routes';
import { HandleErrors } from './middleware/handleErrors.middleware';

export const app = express();
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(helmet());
app.use(express.json());

app.use('/form', formRouter);

app.use(HandleErrors.execute);
