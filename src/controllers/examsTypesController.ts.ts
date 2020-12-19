import { getExamsTypesData } from '../repositories/examsTypesRepository';

export const getExamsTypes = async (request, response) : Promise<any> => {
	
	const examsTypesData = await getExamsTypesData();
	
	if(examsTypesData) return response.status(200).send(examsTypesData);
	
	return response.status(500).send({error: 'internal error please send this to a developer'});
};
