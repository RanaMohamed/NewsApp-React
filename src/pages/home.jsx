import React, { useContext } from 'react';
import { useState } from 'react';
import Post from '../components/post';
import { useEffect } from 'react';
import axios from '../axios';
import { UserContext } from '../App';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const userContext = useContext(UserContext);

	useEffect(() => {
		async function getPosts() {
			setIsLoading(true);
			const data = await axios.get(`news?page=${page}`);
			setPosts((posts) => posts.concat(data.articles));
			setTotal(data.totalResults);
			setIsLoading(false);
		}
		userContext.user?.sources?.length > 0 && getPosts();
	}, [page, userContext.user]);

	const loadMore = () => {
		setPage((page) => page + 1);
	};

	return (
		<div className='container'>
			<div className='search-row'>
				<h1 className='title'>Latest News</h1>
				<div className='input-icon'>
					<input className='input' type='text' placeholder='Search' />
					<i className='search icon'></i>
				</div>
			</div>
			{userContext.user?.sources?.length > 0 ? (
				<React.Fragment>
					<div className='posts'>
						{posts.map((post) => (
							<Post key={post.title} post={post}></Post>
						))}
					</div>
					{total > posts.length && (
						<button
							className={'btn btn-center' + (isLoading ? ' loading' : '')}
							disabled={isLoading}
							onClick={loadMore}
						>
							{!isLoading && 'Load More'}
						</button>
					)}
				</React.Fragment>
			) : (
				<h1 style={{ textAlign: 'center' }}>
					Please subscribe to a source first
				</h1>
			)}
		</div>
	);
};

export default Home;
