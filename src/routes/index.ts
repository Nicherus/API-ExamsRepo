import { Router } from 'express';
import usersRouter from './users';

const routes = Router();

routes.use('/api/v1/users', usersRouter);

export default routes;