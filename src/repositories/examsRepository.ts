import Exam from '../models/Exam';
import db from '../database/index';

export const registerExamData = async (
	pdf: string,
	name: string,
	exams_types_id: string,
	disciplines_id: number,
	professors_id: number,
) : Promise<Exam | null | any> => {
	try{
		const query = await db.query(`
			INSERT INTO exams (pdf, name, exams_types_id, disciplines_id, professors_id)
			VALUES ($1, $2, $3, $4, $5);`,
		[pdf, name, exams_types_id, disciplines_id, professors_id]
		);
		return query.rows;
	} catch(error){
		return null;
	}
};


export const getExamsData = async () : Promise<Exam | null | any> => {
	try{
		const exams = await db.query(`
			SELECT * FROM exams`,
		);
		return exams.rows;
	} catch(error){
		return null;
	}
};

export const getExamsByDisciplineData = async (disciplineId: number) : Promise<Exam | null | any> => {
	try{
		const examsFiltered = await db.query(`
			SELECT exams.*, d.name AS discipline
			FROM exams
			JOIN disciplines AS d
			ON exams.disciplines_id = d.id
			WHERE exams.disciplines_id = $1
		`,
		[disciplineId]
		);
		return examsFiltered.rows;
	} catch(error){
		return null;
	}
};

export const getExamsByProfessorData = async (professorId: number) : Promise<Exam | null | any> => {
	try{
		const examsFiltered = await db.query(`
			SELECT exams.*, p.name AS professor
			FROM exams
			JOIN professors AS p
			ON exams.professors_id = p.id
			WHERE exams.professors_id = $1
		`,
		[professorId]
		);
		return examsFiltered.rows;
	} catch(error){
		return null;
	}
};

export const getExamsByProfessorAndTypeData = async (professorId: number, typeId: number) : Promise<Exam | null | any> => {
	try{
		const examsFiltered = await db.query(`
			SELECT exams.pdf, exams.name, p.name AS professor, et.name AS type
			FROM exams
			JOIN professors AS p
			ON exams.professors_id = p.id
			JOIN exams_types AS et
			ON exams.exams_types_id = et.id
			WHERE exams.professors_id = $1 AND exams.exams_types_id = $2
		`,
		[professorId, typeId]
		);
		return examsFiltered.rows;
	} catch(error){
		return null;
	}
};

export const getExamsByDisciplineAndTypeData = async (disciplineId: number, typeId: number) : Promise<Exam | null | any> => {
	try{
		const examsFiltered = await db.query(`
			SELECT exams.pdf, exams.name, d.name AS discipline, et.name AS type
			FROM exams
			JOIN disciplines AS d
			ON exams.disciplines_id = d.id
			JOIN exams_types AS et
			ON exams.exams_types_id = et.id
			WHERE exams.disciplines_id = $1 AND exams.exams_types_id = $2
		`,
		[disciplineId, typeId]
		);
		return examsFiltered.rows;
	} catch(error){
		return null;
	}
};