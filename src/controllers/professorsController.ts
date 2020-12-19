import { getProfessorsData, getProfessorsByDisciplineData } from '../repositories/professorsRepository';

export const getProfessors = async (request, response) : Promise<any> => {
	
	const professorsData = await getProfessorsData();

	if(professorsData) return response.status(200).send(professorsData);
	
	return response.status(500).send({error: 'internal error please send this to a developer'});
};

export const getProfessorsByDiscipline = async (request, response) : Promise<any> => {
	const disciplineId = request.id;

	const professorsByDisciplineData = await getProfessorsByDisciplineData(disciplineId);

	if(professorsByDisciplineData) return response.status(200).send(professorsByDisciplineData);

	return response.status(500).send({error: 'internal error please send this to a developer'});

};
