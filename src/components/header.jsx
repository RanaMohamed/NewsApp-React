import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<div className='logo'>NEWS.</div>
				<div className='nav'>
					<Link className='nav-link' to='home'>
						Home
					</Link>
					<Link className='nav-link' to='sources'>
						Sources
					</Link>
					<Link className='nav-link' to='login'>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
