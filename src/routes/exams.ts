import { Router } from 'express';
import { registerExam } from '../controllers/examsController';
import { registerExamMiddleware } from '../middlewares/examsMiddlewares';

const examsRouter = Router();


examsRouter.post('/', registerExamMiddleware, registerExam);

export default examsRouter;