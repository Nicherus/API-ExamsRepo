import { Router } from 'express';
import { getDisciplines } from '../controllers/disciplinesController';
import { getExamsByDiscipline, getExamsByDisciplineAndType } from '../controllers/examsController';
import { getProfessorsByDiscipline } from '../controllers/professorsController';
import { examsByDisciplineAndTypeMiddleware, examsByDisciplineMiddleware } from '../middlewares/examsMiddlewares';
import { professorsByDisciplineMiddleware } from '../middlewares/professorsMiddlewares';

const disciplinesRouter = Router();


disciplinesRouter.get('/', getDisciplines);
disciplinesRouter.get('/professors', professorsByDisciplineMiddleware, getProfessorsByDiscipline);
disciplinesRouter.get('/exams', examsByDisciplineMiddleware, getExamsByDiscipline);
disciplinesRouter.get('/exams/exams-types', examsByDisciplineAndTypeMiddleware, getExamsByDisciplineAndType);

export default disciplinesRouter;