import React from 'react';

const SignupForm = () => {
	return (
		<form action=''>
			<label htmlFor='Fullname' className='label'>
				Fullname
			</label>
			<input
				className='input'
				type='text'
				id='Fullname'
				placeholder='Fullname'
			/>
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

export default SignupForm;
