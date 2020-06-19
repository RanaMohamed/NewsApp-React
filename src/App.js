import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/login';
import Home from './pages/home';
import Header from './components/header';
import Sources from './pages/sources';
import ProtectedRoute from './components/protectedRoute';
import axios from './axios';

export const UserContext = React.createContext();

function App() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		localStorage.getItem('token') &&
			axios.get('user').then((data) => setUser(data.user));
	}, []);

	const subscribe = (source) => {
		setUser((user) => ({ ...user, sources: user.sources.concat(source) }));
	};
	const unsubscribe = (source) => {
		setUser((user) => ({
			...user,
			sources: user.sources.filter((src) => src !== source),
		}));
	};
	const setLoggedUser = (data) => {
		if (!data) {
			setUser(null);
			localStorage.removeItem('token');
			delete axios.defaults.headers.common['authorization'];
			return;
		}
		setUser(data.user);
		localStorage.setItem('token', data.token);
		axios.defaults.headers.common['authorization'] = data.token;
	};
	return (
		<div className='App'>
			<UserContext.Provider
				value={{ user, setUser, setLoggedUser, subscribe, unsubscribe }}
			>
				<Header></Header>
				<Switch>
					<Route path='/login' component={Login}></Route>
					<ProtectedRoute path='/sources' component={Sources}></ProtectedRoute>
					<ProtectedRoute path='/' component={Home}></ProtectedRoute>
					{/* <Route path='/sources' component={Sources}></Route>
				<Route path='/' component={Home}></Route> */}
				</Switch>
			</UserContext.Provider>
		</div>
	);
}

export default App;
