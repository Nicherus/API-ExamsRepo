import { Router } from 'express';
import { getExamsTypes } from 'src/controllers/examsTypesController.ts';

const examsTypesRouter = Router();


examsTypesRouter.get('/', getExamsTypes);
export default examsTypesRouter;