import React from 'react';

const Post = ({ post }) => {
	return (
		<div className='post'>
			<div className='post__img'>
				<img alt={post.title} src={post.urlToImage} />
			</div>
			<div className='post__text'>
				<p>{post.source?.name}</p>
				<p className='post__date'>
					{new Date(post.publishedAt).toLocaleString()}
				</p>
				<p className='subtitle'>{post.title}</p>
				<p>{post.content?.replace(/\[\+.* chars\]/, '')}</p>
			</div>
			<div className='post__overlay'>
				<a
					className='btn'
					href={post.url}
					target='_blank'
					rel='noopener noreferrer'
				>
					Read More
				</a>
			</div>
		</div>
	);
};

export default Post;
