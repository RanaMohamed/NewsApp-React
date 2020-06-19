import React from 'react';
import { useState } from 'react';
import LoginForm from '../components/loginForm';
import SignupForm from '../components/signupForm';

const Login = (props) => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<React.Fragment>
			<div className='login container'>
				<div className='login__img'></div>
				<div className='login__form'>
					<div className='tabs'>
						<h1
							className={'tab subtitle' + (isLogin ? ' tab--active' : '')}
							onClick={() => setIsLogin(true)}
						>
							Login
						</h1>
						<h1
							className={'tab subtitle' + (!isLogin ? ' tab--active' : '')}
							onClick={() => setIsLogin(false)}
						>
							Signup
						</h1>
					</div>
					<div className='tabs-body'>
						{isLogin ? <LoginForm /> : <SignupForm />}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
