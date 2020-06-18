import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/login';
import Home from './pages/home';
import Header from './components/header';
import Sources from './pages/sources';

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Switch>
				<Route path='/login' component={Login}></Route>
				<Route path='/sources' component={Sources}></Route>
				<Route path='/' component={Home}></Route>
			</Switch>
		</div>
	);
}

export default App;
