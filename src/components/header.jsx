import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';

const Header = () => {
	const userContext = useContext(UserContext);

	return (
		<div className='header'>
			<div className='container'>
				<div className='logo'>NEWS.</div>
				<div className='nav'>
					{userContext.user ? (
						<React.Fragment>
							<Link className='nav-link' to='home'>
								Home
							</Link>
							<Link className='nav-link' to='sources'>
								Sources
							</Link>
							<span className='nav-link'>
								Welcome back {userContext.user?.fullname}
							</span>
							<span
								className='nav-link'
								onClick={() => userContext.setLoggedUser()}
							>
								Logout
							</span>
						</React.Fragment>
					) : (
						<Link className='nav-link' to='login'>
							Login
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
