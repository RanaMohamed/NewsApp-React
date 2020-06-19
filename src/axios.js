import axios from 'axios';
import toastr from './components/toastr';

const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const token = localStorage.getItem('token');
if (token) instance.defaults.headers.common['authorization'] = token;

instance.interceptors.request.use(
	function (config) {
		console.log(config);
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		toastr.error(
			error.response?.data?.errors
				? 'Check your data'
				: error.response?.data?.message
				? error.response.data.message
				: error.message
		);
		return Promise.reject(error.response?.data || {});
	}
);

export default instance;
