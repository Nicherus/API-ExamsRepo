import Discipline from '../models/Discipline';
import db from '../database/index';

export const getDisciplinesData = async () : Promise<Discipline | null | any> => {
	try{
		const disciplines = await db.query(`
			SELECT * FROM disciplines`,
		);
		return disciplines.rows;
	} catch(error){
		return null;
	}
};