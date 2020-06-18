import React from 'react';

const Login = () => {
	return (
		<React.Fragment>
			<div className='login container'>
				<div className='login__img'>
					<img src='../imgs/news_presenter.svg' alt='' />
				</div>
				<div className='login__form'>
					<h1 className='subtitle'>Login</h1>
					<form action=''>
						<label htmlFor='Email' className='label'>
							Email
						</label>
						<input
							className='input'
							type='text'
							id='Email'
							placeholder='Email'
						/>
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
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
