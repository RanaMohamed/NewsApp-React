import React, { useState, useContext } from 'react';
import axios from '../axios';
import { UserContext } from '../App';

const Source = ({ source, onSubscribeChange }) => {
	const [isLoading, setIsLoading] = useState(false);

	const userContext = useContext(UserContext);

	const subcribeChange = async () => {
		setIsLoading(true);
		await axios.post(
			`source/${source.subscribed ? 'unsubscribe' : 'subscribe'}/${source.id}`
		);
		source.subscribed
			? userContext.unsubscribe(source.id)
			: userContext.subscribe(source.id);
		onSubscribeChange(source.id);
		setIsLoading(false);
	};
	return (
		<div className='post post--justify'>
			<div className='post__text'>
				<p className='post__date'>{source.category}</p>
				<p className='subtitle'>{source.name}</p>
				<p>{source.description}</p>
			</div>
			<button
				className={
					'btn btn-center' +
					(isLoading ? ' loading' : '') +
					(source.subscribed ? '' : ' btn--secondary')
				}
				disabled={isLoading}
				onClick={subcribeChange}
			>
				{!isLoading && (source.subscribed ? 'Unsubscribe' : 'Subscribe')}
			</button>
		</div>
	);
};

export default Source;
