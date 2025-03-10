import React from 'react';
import CategoryOverviewLayout from '../layouts/CategoryOverviewLayout';
import SEO from '../components/SEO';
import NewsContainer from '../components/News/NewsContainer';
import PktHubLogoStacked from '../assets/PktHubLogoStacked.png';

const NewsHubPage: React.FC = () => {

	return (
		<>
<SEO
				title='News Hub'
				description='PKT Network is a fully decentralized media network. Anyone can distribute media content with global accessibility, censorship-resistance and built-in payments.'
				keywords='packet hub, content platform, media, entertainment, hot news, news'
				url='https://hub.pkt.tv/newshub'
				imgSrc={PktHubLogoStacked}
				siteName='Packet Hub'
			/>
			<CategoryOverviewLayout>
				<div className='flex flex-col gap-8'>
					<NewsContainer />
				</div>
			</CategoryOverviewLayout>
		</>
	);
};

export default NewsHubPage;
