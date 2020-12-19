import { Router } from 'express';
import { getDisciplines } from 'src/controllers/disciplinesController';
import { getExamsByDiscipline, getExamsByDisciplineAndType } from 'src/controllers/examsController';
import { getProfessorsByDiscipline } from 'src/controllers/professorsController';
import { examsByDisciplineAndTypeMiddleware, examsByDisciplineMiddleware } from 'src/middlewares/examsMiddlewares';
import { professorsByDisciplineMiddleware } from 'src/middlewares/professorsMiddlewares';

const disciplinesRouter = Router();


disciplinesRouter.get('/', getDisciplines);
disciplinesRouter.get('/professors', professorsByDisciplineMiddleware, getProfessorsByDiscipline);
disciplinesRouter.get('/exams', examsByDisciplineMiddleware, getExamsByDiscipline);
disciplinesRouter.get('/exams/exams-types', examsByDisciplineAndTypeMiddleware, getExamsByDisciplineAndType);

export default disciplinesRouter;