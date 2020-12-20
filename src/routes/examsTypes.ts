import { Router } from 'express';
import { getExamsTypes } from '../controllers/examsTypesController.ts';

const examsTypesRouter = Router();


examsTypesRouter.get('/', getExamsTypes);
export default examsTypesRouter;