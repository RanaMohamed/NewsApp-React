import React from 'react';

const LoginForm = () => {
	return (
		<form action=''>
			<label htmlFor='Email' className='label'>
				Email
			</label>
			<input className='input' type='text' id='Email' placeholder='Email' />
			<label htmlFor='Password' className='label'>
				Password
			</label>
			<input
				className='input'
				type='text'
				id='Password'
				placeholder='Password'
			/>
			<input type='submit' className='btn' value='Login' />
		</form>
	);
};

export default LoginForm;
