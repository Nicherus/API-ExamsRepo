import { validateUser } from 'src/validations/users';
import { createUser } from '../repositories/UsersRepository';


export const signUp = async (request, response) => {
	const { email, username, password, passwordConfirmation} = request.body;

	const validation = validateUser(email, username, password, passwordConfirmation);

	if(validation) return response.status(400).send({error: 'Please, check the data you are sending'});

	// if(userIsInDatabase){
	// 	return response.status(409).send({error: 'Username or Email already used'});
	// }

	const user = await createUser(email, username, password);
	if(user) return response.status(201).json(user);
	return response.status(500).send({error: 'internal error please send this to a developer'});
};


export const signIn = (request, response) => {

	// const {email, password} = request.body;

	// const loginData = await login(email, password);

	// if(loginData){
	// 	return response.status(200).json(loginData);
	// } else{
	// 	return response.status(401).send('User not found or wrong password');
	// }

	response.status(200).send('ok!');
};



export const signOut = (request, response) => {
	response.status(200).send('signout route');
};