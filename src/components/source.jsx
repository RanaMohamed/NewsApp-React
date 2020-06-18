import React from 'react';

const Source = ({ source }) => {
	return (
		<div className='post'>
			<div className='post__text'>
				<p className='post__date'>{source.category}</p>
				<p className='subtitle'>{source.name}</p>
				<p>{source.description}</p>
			</div>
			<button
				className={
					'btn btn-center' + (source.subscribed ? '' : ' btn--secondary')
				}
			>
				{source.subscribed ? 'Unsubscribe' : 'Subscribe'}
			</button>
		</div>
	);
};

export default Source;
