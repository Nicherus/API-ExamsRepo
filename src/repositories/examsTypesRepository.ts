import Discipline from '../models/Discipline';
import db from '../database/index';

export const getExamsTypesData = async () : Promise<Discipline | null | any> => {
	try{
		const examsTypes = await db.query(`
			SELECT * FROM exams_types`,
		);
		return examsTypes.rows;
	} catch(error){
		return null;
	}
};