import { getDisciplinesData } from '../repositories/disciplinesRepository';

export const getDisciplines = async (request, response) : Promise<any> => {
	
	const disciplinesData = await getDisciplinesData();
	
	if(disciplinesData) return response.status(200).send(disciplinesData);
	
	return response.status(500).send({error: 'internal error please send this to a developer'});
};
