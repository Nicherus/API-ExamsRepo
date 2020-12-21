

export const professorsByDisciplineMiddleware = async (request, response, next): Promise<any> => {
	const id = request.headers['id'];

	if(!id) return response.status(400).send({error: 'Please, send a valid professor id'});

	request.id = id;
	next();
};

