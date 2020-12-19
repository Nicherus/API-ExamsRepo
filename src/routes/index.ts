import { Router } from 'express';
import usersRouter from './users';
import disciplinesRouter from './disciplines';
import professorsRouter from './professors';
import examsRouter from './exams';
import examsTypesRouter from './examsTypes';

const routes = Router();

routes.use('/api/v1/users', usersRouter);
routes.use('/api/v1/disciplines', disciplinesRouter);
routes.use('/api/v1/professors', professorsRouter);
routes.use('/api/v1/exams', examsRouter);
routes.use('/api/v1/exams-types', examsTypesRouter);

export default routes;