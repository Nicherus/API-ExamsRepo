import { Router } from 'express';
import { registerExam, getExams } from '../controllers/examsController';
import { registerExamMiddleware } from '../middlewares/examsMiddlewares';

const examsRouter = Router();


examsRouter.post('/', registerExamMiddleware, registerExam);
examsRouter.get('/', getExams);

export default examsRouter;