import { Router } from 'express';
import { getExamsByProfessor, getExamsByProfessorAndType } from '../controllers/examsController';
import { getProfessors } from '../controllers/professorsController';
import { examsByDisciplineMiddleware, examsByProfessorAndTypeMiddleware, examsByProfessorMiddleware } from '../middlewares/examsMiddlewares';

const professorsRouter = Router();


professorsRouter.get('/', getProfessors);
professorsRouter.get('/exams', examsByDisciplineMiddleware, examsByProfessorMiddleware, getExamsByProfessor);
professorsRouter.get('/exams/exams-types', examsByProfessorAndTypeMiddleware, getExamsByProfessorAndType);

export default professorsRouter;