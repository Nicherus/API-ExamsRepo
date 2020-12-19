import { Router } from 'express';
import { registerExam } from 'src/controllers/examsController';
import { registerExamMiddleware } from 'src/middlewares/examsMiddlewares';

const examsRouter = Router();


examsRouter.post('/', registerExamMiddleware, registerExam);

export default examsRouter;