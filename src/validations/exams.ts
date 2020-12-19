import joi from 'joi';


export const validateExam = (
	pdf: string,
	name: string,
	exams_types_id: string,
	disciplines_id: number,
	professors_id: number,
) : boolean => {

	const user = joi.object({
		pdf: joi.string().uri().required(),
		name: joi.string().min(2).max(30).required(), //CHECK_DEV improve regex
		exams_types_id: joi.number().required(),
		disciplines_id: joi.number().required(),
		professors_id: joi.number().required(),
	});

	const data = {
		pdf,
		name,
		exams_types_id,
		disciplines_id,
		professors_id,
	};

	const validation = user.validate(data);
	
	return !!validation.error;
};