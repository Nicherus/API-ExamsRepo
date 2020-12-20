import { getExamsByDisciplineData, getExamsByProfessorData, registerExamData, getExamsByProfessorAndTypeData, getExamsByDisciplineAndTypeData } from '../repositories/examsRepository';

export const registerExam = async (request, response) : Promise<any> => {
	const { pdf, name, exams_types_id, disciplines_id, professors_id } = request.body;
	
	const data = await registerExamData(pdf, name, exams_types_id, disciplines_id, professors_id);
	
	if(data) return response.status(200).send('Ok!');
	
	return response.status(500).send({error: 'internal error please send this to a developer'});
};

export const getExamsByDiscipline = async (request, response) : Promise<any> => {
	const disciplineId = request.id;


	const examsByDisciplineData = await getExamsByDisciplineData(disciplineId);

	if(examsByDisciplineData) return response.status(200).send(examsByDisciplineData);

	return response.status(500).send({error: 'internal error please send this to a developer'});

};

export const getExamsByProfessor = async (request, response) : Promise<any> => {
	const disciplineId = request.id;


	const examsByProfessorData = await getExamsByProfessorData(disciplineId);

	if(examsByProfessorData) return response.status(200).send(examsByProfessorData);

	return response.status(500).send({error: 'internal error please send this to a developer'});

};

export const getExamsByProfessorAndType = async (request, response) : Promise<any> => {
	const professorId = request.professorId;
	const typeId = request.typeId;

	const examsByProfessorData = await getExamsByProfessorAndTypeData(professorId, typeId);

	if(examsByProfessorData) return response.status(200).send(examsByProfessorData);

	return response.status(500).send({error: 'internal error please send this to a developer'});

};

export const getExamsByDisciplineAndType = async (request, response) : Promise<any> => {
	const disciplineId = request.disciplineId;
	const typeId = request.typeId;

	const examsByDisciplineData = await getExamsByDisciplineAndTypeData(disciplineId, typeId);

	if(examsByDisciplineData) return response.status(200).send(examsByDisciplineData);

	return response.status(500).send({error: 'internal error please send this to a developer'});

};
