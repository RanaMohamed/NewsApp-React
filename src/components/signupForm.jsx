import React, { useState, useContext } from 'react';
import { UserContext } from '../App';
import { useHistory } from 'react-router';
import * as _ from 'lodash';
import axios from '../axios';
import { signupSchema } from '../helpers/schemas';

const SignupForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const userContext = useContext(UserContext);
	const history = useHistory();

	const [user, setUser] = useState({ fullname: '', email: '', password: '' });

	const submitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const { error } = signupSchema.validate(user, { abortEarly: false });
		if (error) {
			const err = _.keyBy(error.details, (e) => e.context.label);
			setErrors(err);
			setIsLoading(false);
			return;
		}

		try {
			const data = await axios.post('user/register', user);
			userContext.setUser(data.user);
			localStorage.setItem('token', data.token);
			history.replace('/');
			return;
		} catch (errors) {
			setErrors(errors);
		}
		setIsLoading(false);
	};
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor='Fullname' className='label'>
				Fullname
			</label>
			<input
				className='input'
				type='text'
				id='Fullname'
				placeholder='Fullname'
				value={user.fullname}
				onChange={(e) => setUser({ ...user, fullname: e.target.value })}
			/>
			<span className='error-message'>{errors.fullname?.message}</span>
			<label htmlFor='Email' className='label'>
				Email
			</label>
			<input
				className='input'
				type='text'
				id='Email'
				placeholder='Email'
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<span className='error-message'>{errors.email?.message}</span>

			<label htmlFor='Password' className='label'>
				Password
			</label>
			<input
				className='input'
				type='password'
				id='Password'
				placeholder='Password'
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
			/>
			<span className='error-message'>{errors.password?.message}</span>

			<input
				type='submit'
				disabled={isLoading}
				className='btn'
				value={isLoading ? '...' : 'Signup'}
			/>
		</form>
	);
};

export default SignupForm;
