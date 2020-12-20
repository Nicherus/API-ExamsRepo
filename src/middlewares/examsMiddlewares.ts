import { validateExam } from '../validations/exams';


export const registerExamMiddleware = async (request, response, next): Promise<any> => {
	const { pdf, name, exams_types_id, disciplines_id, professors_id} = request.body;

	const failValidation = validateExam(pdf, name, exams_types_id, disciplines_id, professors_id);
	
	if(failValidation) return response.status(400).send({error: 'Please, check the data you are sending'});

	next();
};

export const examsByDisciplineMiddleware = async (request, response, next): Promise<any> => {
	const id = request.body.id;

	if(!id) return response.status(400).send({error: 'Please, send a valid discipline id'});

	request.id = id;
	next();
};

export const examsByProfessorMiddleware = async (request, response, next): Promise<any> => {
	const id = request.body.id;

	if(!id) return response.status(400).send({error: 'Please, send a valid professor id'});

	request.id = id;
	next();
};

export const examsByDisciplineAndTypeMiddleware = async (request, response, next): Promise<any> => {
	const { disciplineId, typeId } = request.body;

	if(!disciplineId) return response.status(400).send({error: 'Please, send a valid discipline id'});
	if(!typeId) return response.status(400).send({error: 'Please, send a valid type id'});

	request.disciplineId = disciplineId;
	request.typeId = typeId;
	next();
};

export const examsByProfessorAndTypeMiddleware = async (request, response, next): Promise<any> => {
	const { professorId, typeId } = request.body;

	if(!professorId) return response.status(400).send({error: 'Please, send a valid professor id'});
	if(!typeId) return response.status(400).send({error: 'Please, send a valid type id'});

	request.professorId = professorId;
	request.typeId = typeId;
	next();
};
