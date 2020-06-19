import Joi from '@hapi/joi';

// eslint-disable-next-line no-useless-escape
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const fullname = Joi.string().required().messages({
	'string.empty': 'Full Name should not be empty',
	'any.required': `Full Name is required`,
});

const email = Joi.string().required().pattern(emailRegex).messages({
	'string.pattern.base': 'Email is invalid',
	'string.empty': 'Email should not be empty',
	'any.required': `Email is required`,
});

const password = Joi.string().min(8).required().messages({
	'string.empty': 'Password should not be empty',
	'string.min': `Password should have a minimum length of {#limit}`,
	'any.required': `Password is required`,
});
export const loginSchema = Joi.object({
	email,
	password,
});

export const signupSchema = Joi.object({ fullname, email, password });
