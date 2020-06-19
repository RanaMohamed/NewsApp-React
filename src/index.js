import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/reset.css';
import './css/index.css';
import './css/toastr.min.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import ScrollToTop from './components/scrollToTop';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
