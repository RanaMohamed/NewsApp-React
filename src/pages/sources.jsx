import React, { useEffect } from 'react';
import Source from '../components/source';
import { useState } from 'react';

import axios from '../axios';

const Sources = () => {
	const [sources, setSources] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function getSources() {
			setIsLoading(true);
			const data = await axios.get('sources');
			setSources(data);
			setIsLoading(false);
		}
		getSources();
	}, []);

	const subscribeHandler = (source) => {
		setSources((srcs) =>
			srcs.map((src) =>
				src.id === source ? { ...src, subscribed: !src.subscribed } : src
			)
		);
	};
	return (
		<div className='container'>
			<h1 className='title'>Sources {isLoading}</h1>
			{!isLoading ? (
				<div className='posts'>
					{sources.map((source) => (
						<Source
							key={source.id}
							source={source}
							onSubscribeChange={subscribeHandler}
						></Source>
					))}
				</div>
			) : (
				<button className='btn btn-center loading'></button>
			)}
		</div>
	);
};

export default Sources;
