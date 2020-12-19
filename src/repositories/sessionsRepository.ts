import db from '../database/index';
import Session from '../models/Session';
import { v4 as uuid } from 'uuid';

export const createSession = async (
	id: number
) : Promise<Session | null> => {

	try{
		const token = uuid();
		const session = new Session(id, token);
		await db.query(`
            INSERT INTO sessions (users_id, token)
            VALUES ($1, $2)`,
		[id, token]
		);
		return session;
	} catch (error) {
		return null;
	}
};

export const deleteSession = async (token: string): Promise<boolean | null> => {
	try{
		const query = await db.query(`
			DELETE FROM sessions
			WHERE token = $1
			`,
		[token]
		);
		
		if(query) return true;
		
		return null;
	} catch(error){
		return null;
	}
};

export const getUserIdByToken = async (
	token: string
) : Promise<number | null> => {
	try{
		const session = await db.query(`
			SELECT users_id FROM sessions
			WHERE token = $1
			`,
		[token]
		);
		return session.rows[0].users_id;
	} catch(error){
		return null;
	}
};