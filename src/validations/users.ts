import joi from 'joi';


export const validateUser = (
	email: string, 
	username: string, 
	password: string,
	passwordConfirmation: string,
) : boolean => {

	const user = joi.object({
		email: joi.string().email().required(),
		username: joi.string().alphanum().min(3).max(30).regex(/^[a-zA-Z0-9.]*$/).required(),
		password: joi.string().min(6).required(),
		passwordConfirmation: joi.ref('password'),
	});

	const data = {
		email,
		username,
		password,
		passwordConfirmation,
	};
	const validation = user.validate(data);
	
	return !!validation.error;
};

export const validateSignIn = (
	email: string,
	password: string,
) : boolean =>{

	const user = joi.object({
		email: joi.string().email().required(),
		password: joi.string().min(6).required(),
	});

	const data = {
		email,
		password,
	};

	const validation = user.validate(data);
	
	return !!validation.error;
};

