import { createUser, signInData } from '../repositories/usersRepository';
import { deleteSession } from '../repositories/sessionsRepository';

export const signUp = async (request, response) : Promise<any> => {
	const { email, username, password} = request.body;
	
	const user = await createUser(email, username, password);
	
	if(user) return response.status(201).json(user);

	return response.status(500).send({error: 'internal error please send this to a developer'});
};

export const signIn = async (request, response) : Promise<any> => {
	const {email, password} = request.body;

	const loginData = await signInData(email, password);

	if(loginData){
		return response.status(200).json(loginData);
	} else{
		return response.status(401).send({error: 'User not found or wrong password'});
	}

};

export const signOut = async (req, res) => {
	const token = req.token;

	const deleted = await deleteSession(token);
	
	if(deleted){
		return res.status(200).send('Ok!');
	} else{
		return res.status(401).send({error: 'nao autorizado'});
	}

};