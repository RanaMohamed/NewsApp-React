import React from 'react';
import { useState } from 'react';
import Post from '../components/post';
import { useEffect } from 'react';

const Home = () => {
	const [posts, setPosts] = useState([
		{
			source: {
				id: 'bbc-news',
				name: 'BBC News',
			},
			author: 'https://www.facebook.com/bbcnews',
			title: "Trump's bid to end Obama-era immigration policy ruled unlawful",
			description:
				"US Supreme Court rules against the president's bid to end Obama-era programme that protects children.",
			url: 'https://www.bbc.co.uk/news/world-us-canada-53096887',
			urlToImage:
				'https://ichef.bbci.co.uk/news/1024/branded_news/148B2/production/_111764148_breaking-promo.png',
			publishedAt: '2020-06-18T14:29:31Z',
			content:
				"The US Supreme Court has ruled against US President Donald Trump's bid to end a programme that protects hundreds of thousands of young immigrants from deportation. \r\nThe justices upheld lower court r… [+397 chars]",
		},
		{
			source: {
				id: 'bbc-news',
				name: 'BBC News',
			},
			author: 'https://www.facebook.com/bbcnews',
			title: 'Top US court backs protection for LGBT workers',
			description:
				'Watershed moment for LGBT rights in US as Supreme Court rules workplace law protects gay and transgender employees.',
			url: 'https://www.bbc.co.uk/news/world-us-canada-53055632',
			urlToImage:
				'https://ichef.bbci.co.uk/news/1024/branded_news/148B2/production/_111764148_breaking-promo.png',
			publishedAt: '2020-06-15T14:43:27Z',
			content:
				"The US Supreme Court has ruled that employers who fire workers for being gay or transgender are breaking the country's civil rights laws.\r\nIn a 6-3 decision it said federal law, which prohibits discr… [+487 chars]",
		},
		{
			source: {
				id: 'bbc-news',
				name: 'BBC News',
			},
			author: 'https://www.facebook.com/bbcnews',
			title: "Burundi election: Nkurunziza set to become 'supreme guide'",
			description:
				"Burundi's president did everything to remain in power five years ago but is now stepping down - officially at least.",
			url: 'https://www.bbc.co.uk/news/world-africa-52682171',
			urlToImage:
				'https://ichef.bbci.co.uk/news/1024/branded_news/B819/production/_112292174_hi061229390.jpg',
			publishedAt: '2020-05-18T23:48:42Z',
			content:
				'Image copyrightAFP\r\nBurundi is about to lose its president of 15 years but gain a "supreme guide to patriotism", according to the official title that will be given to Pierre Nkurunziza once he steps … [+7862 chars]',
		},
		{
			source: {
				id: 'cnn',
				name: 'CNN',
			},
			author: 'Ariane de Vogue and Devan Cole, CNN',
			title: 'Supreme Court says federal law protects LGBTQ workers',
			description:
				"• SCOTUS declines to weigh in on legal doctrine that shields law enforcement\n• Supreme Court won't hear challenge to California sanctuary law",
			url:
				'https://www.cnn.com/2020/06/15/politics/supreme-court-lgbtq-employment-case/index.html',
			urlToImage:
				'https://cdn.cnn.com/cnnnext/dam/assets/190819115217-01-supreme-court-lgbt-file-super-tease.jpg',
			publishedAt: '2020-06-15T14:13:52Z',
			content: null,
		},
		{
			source: {
				id: 'cnn',
				name: 'CNN',
			},
			author: null,
			title: 'Jeffrey Toobin explains Supreme Court decision on DACA',
			description:
				"CNN's Chief Legal Analyst Jeffrey Toobin explains the Supreme Court decision to block the Trump administration's attempt to end the Deferred Action for Childhood Arrivals, an Obama-era program that protects hundreds of thousands of immigrants brought to the U…",
			url:
				'https://www.cnn.com/videos/politics/2020/06/18/daca-supreme-court-decision-trump-toobin-newsroom-vpx.cnn',
			urlToImage:
				'https://cdn.cnn.com/cnnnext/dam/assets/200618102200-daca-supreme-court-decision-trump-toobin-newsroom-vpx-00000000-super-tease.jpg',
			publishedAt: '2020-06-18T14:36:24Z',
			content:
				"Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
		},
		{
			source: {
				id: 'cnn',
				name: 'CNN',
			},
			author: null,
			title: 'Supreme Court rules state can restrict religious gatherings',
			description:
				"A Supreme Court ruling of 5-4 will allow California to enforce certain coronavirus pandemic related restrictions on religious gatherings. CNN's Chris Cuomo reports.",
			url:
				'https://www.cnn.com/videos/politics/2020/05/30/supreme-court-california-religious-restrictions-cuomo-vpx.cnn',
			urlToImage:
				'https://cdn.cnn.com/cnnnext/dam/assets/200225125440-02-supreme-court-building-file-super-tease.jpg',
			publishedAt: '2020-05-30T05:32:46Z',
			content:
				"Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
		},
		{
			source: {
				id: 'cnn',
				name: 'CNN',
			},
			author: 'Ariane de Vogue, CNN Supreme Court Reporter',
			title:
				'Supreme Court blocks release of Mueller grand jury documents to House',
			description:
				"The Supreme Court on Wednesday temporarily blocked the release of former special counsel Robert Mueller's grand jury material to the Democratic-led House of Representatives.",
			url:
				'https://www.cnn.com/2020/05/20/politics/house-mueller-documents-supreme-court/index.html',
			urlToImage:
				'https://cdn.cnn.com/cnnnext/dam/assets/191118113014-trump-mueller-split-super-tease.jpg',
			publishedAt: '2020-05-20T20:19:37Z',
			content: null,
		},
		{
			source: {
				id: null,
				name: 'Gizmodo.com',
			},
			author: 'Shoshana Wodinsky',
			title:
				'Your Lock Screen is Protected Under The Fourth Amendment, Court Rules',
			description:
				'Thanks to a Supreme Court ruling from 2018, most of the evidence that might be hidden on a suspect’s phone is only accessible with some sort of warrant. Now, a Seattle judge is extending these protections even further. Read more...',
			url:
				'https://gizmodo.com/your-lock-screen-is-protected-under-the-fourth-amendmen-1843608132',
			urlToImage:
				'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/zkuz4vjalkr9wzvulwdq.jpg',
			publishedAt: '2020-05-22T16:30:00Z',
			content:
				'Thanks to a Supreme Court ruling from 2018, most of the evidence that might be hidden on a suspects phone is only accessible with some sort of warrant. Now, a Seattle judge is extending these protect… [+2401 chars]',
		},
		{
			source: {
				id: 'mashable',
				name: 'Mashable',
			},
			author: 'Natasha Piñon',
			title: 'The Supreme Court just gave LGBTQ people a major, major win',
			description:
				'Finally, some good news. \nOn Monday, the U.S. Supreme Court ruled 6-3 that previously existing federal law protects gay and transgender employees from discrimination. \nBefore the ruling, the Supreme Court had yet to determine whether or not Title VII of the C…',
			url:
				'https://mashable.com/article/supreme-court-lgbtq-employment-discrimination-ruling/',
			urlToImage:
				'https://mondrian.mashable.com/2020%252F06%252F15%252Fe4%252F4c5d30617077481f85993230c0331b41.f63c0.jpg%252F1200x630.jpg?signature=s0yqYSrAK_-zE1T38mCeywwTY44=',
			publishedAt: '2020-06-15T16:39:56Z',
			content:
				'Finally, some good news. \r\nOn Monday, the U.S. Supreme Court ruled 6-3 that previously existing federal law protects gay and transgender employees from discrimination. \r\nBefore the ruling, the Suprem… [+1718 chars]',
		},
		{
			source: {
				id: null,
				name: 'Gizmodo.com',
			},
			author: 'Joanna Nelius',
			title:
				"California Supreme Court Rules Cops Can't Bury Public Record Requests With Redaction Fees",
			description:
				'A recent California Supreme Court decision has ruled that government agencies in the state can’t pass on the costs of privacy redactions in the course of fulfilling records requests. According to the ruling, the cost of redacting records that citizens file un…',
			url:
				'https://gizmodo.com/california-supreme-court-rules-cops-cant-bury-public-re-1843857674',
			urlToImage:
				'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dy1y10jr4oeosedxa3tx.jpg',
			publishedAt: '2020-06-02T19:00:00Z',
			content:
				'A recent California Supreme Court decision has ruled that government agencies in the state cant pass on the costs of privacy redactions in the course of fulfilling records requests. According to the … [+3820 chars]',
		},
		{
			source: {
				id: 'cnn',
				name: 'CNN',
			},
			author: null,
			title: 'READ: SCOTUS opinion blocking Trump attempt to end DACA',
			description:
				"The Supreme Court blocked the Trump administration's attempt to end the Deferred Action for Childhood Arrivals, an Obama-era program that protects hundreds of thousands of immigrants brought to the US as children from deportation.",
			url:
				'https://www.cnn.com/2020/06/18/politics/daca-supreme-court-opinion/index.html',
			urlToImage:
				'https://cdn.cnn.com/cnnnext/dam/assets/200426191349-05-daca-recipients-information-ice-access-super-tease.jpg',
			publishedAt: '2020-06-18T14:16:24Z',
			content:
				"(CNN)The Supreme Court blocked the Trump administration's attempt to end the Deferred Action for Childhood Arrivals, an Obama-era program that protects hundreds of thousands of immigrants brought to … [+35 chars]",
		},
		{
			source: {
				id: 'cnn',
				name: 'CNN',
			},
			author: 'Ariane de Vogue and Jamie Ehrlich, CNN',
			title:
				'Supreme Court upholds constitutionality of board charged with reorganizing Puerto Rican debt',
			description:
				"A board charged with reorganizing Puerto Rico's debt in the wake of financial crisis can continue its work, the Supreme Court held unanimously Monday, rejecting a constitutional challenge that threatened the restructuring of billions of dollars of debt.",
			url:
				'https://www.cnn.com/2020/06/01/politics/puerto-rico-supreme-court-debt/index.html',
			urlToImage:
				'https://cdn.cnn.com/cnnnext/dam/assets/161117202651-puerto-rico-teeters-on-edge-of-massive-default-super-tease.jpg',
			publishedAt: '2020-06-01T15:34:21Z',
			content:
				"(CNN)A board charged with reorganizing Puerto Rico's debt in the wake of financial crisis can continue its work, the Supreme Court held unanimously Monday, rejecting a constitutional challenge that t… [+3531 chars]",
		},
	]);
	const [page, setPage] = useState(1);
	const loadMore = () => {
		setPage((page) => page + 1);
	};
	return (
		<div className='container'>
			<h1 className='title'>Latest News</h1>
			<div className='posts'>
				{posts.map((post) => (
					<Post key={post.title} post={post}></Post>
				))}
			</div>

			<button className='btn btn-center' onClick={loadMore}>
				Load More {page}
			</button>
		</div>
	);
};

export default Home;
