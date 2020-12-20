import { validateUser, validateSignIn } from '../validations/users';
import { isInDatabase } from '../repositories/usersRepository';

export const signUpMiddleware = async (request, response, next): Promise<any> => {
	const { email, username, password, passwordConfirmation} = request.body;

	const failValidation = validateUser(email, username, password, passwordConfirmation);

	if(failValidation) return response.status(400).send({error: 'Please, check the data you are sending'});

	const userIsInDatabase = await isInDatabase(username, email);

	if(userIsInDatabase) return response.status(409).send({error: 'Username or Email already used'});

	next();
};

export const signInMiddleware = async (request, response, next): Promise<any> => {
	const { email, password} = request.body;

	const failValidation = validateSignIn(email, password);

	if(failValidation) return response.status(400).send({error: 'Please, check the data you are sending'});

	next();
};