import { Router } from 'express';
import usersRouter from './users';

const routes = Router();

routes.use('/api/users', usersRouter);

export default routes;