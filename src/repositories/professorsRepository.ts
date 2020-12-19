import Professor from 'src/models/Professor';
import db from '../database/index';

export const getProfessorsData = async () : Promise<Professor | null | any> => {
	try{
		const professors = await db.query(`
			SELECT * FROM professors`,
		);
		return professors.rows;
	} catch(error){
		return null;
	}
};

export const getProfessorsByDisciplineData = async (disciplineId: number) : Promise<Professor | null | any> => {
	try{
		const professorsFiltered = await db.query(`
			SELECT professors.*, d.name AS discipline
			FROM professors
			JOIN professors_disciplines AS pd
			ON professors.id = pd.id_professors
			JOIN disciplines AS d
			ON pd.id_disciplines = d.id
			WHERE pd.id_disciplines = $1
		`,
		[disciplineId]
		);
		return professorsFiltered.rows;
	} catch(error){
		return null;
	}
};