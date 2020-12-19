import User from '../models/User';
import db from '../database/index';
import bcrypt from 'bcrypt';

import { createSession } from './sessionsRepository';

export const createUser =  async (
	email: string, 
	username: string, 
	password: string,
) : Promise<User | null> => {

	try {
		const user = new User(email, username, password);
		await db.query(`
			INSERT INTO users (username, email, password)
			VALUES ($1, $2, $3)`,
		[user.username, user.email, user.password]
		);

		const userObject = {
			email,
			username,
		};

		return userObject;
	} catch (error) {
		return null;
	}
};

export const signInData = async (
	emailInserted: string, 
	passwordInserted: string,
) : Promise<any> => {

	const loginData = await checkEmailPasswordMatch(emailInserted, passwordInserted);
	
	if(loginData){
		try{
			const {username, email, id} = loginData;
			
			if(id){
				const session = await createSession(id);
				if(session){
					return ({
						email: email,
						username: username,
						token: session.token,
					});
				} else return null;
			} else return null;
		} catch(error){
			return null;
		}
	} 
	return null;
};

export const checkEmailPasswordMatch = async (
	email: string, 
	password: string,
) : Promise<User | null> => {

	try {
		const UserEmailMatch = await db.query(`
		SELECT * FROM users
		WHERE email = $1
		`,
		[email]
		);
		
		const passwordMatch = bcrypt.compareSync(password, UserEmailMatch.rows[0].password);
		if(passwordMatch) return UserEmailMatch.rows[0];
		
		return null;
	} catch (error) {
		return(null);
	}
};

export const isInDatabase = async (
	username: string, 
	email: string,
) : Promise<boolean | null> => {

	try{
		const userMatch = await db.query(`
			SELECT * FROM users
			WHERE email = $1 OR username = $2
			`,
		[email, username]
		);
		return userMatch.rows.length ? true : false;
	} catch(error){
		return null;
	}
};

export const getUserId = async (
	email: string
) : Promise<number | null> => {
	try{
		const user = await db.query(`
			SELECT id FROM users
			WHERE email = $1
			`,
		[email]
		);
		console.log(user);
		return user.rows[0].id;
	} catch(error){
		return null;
	}
};