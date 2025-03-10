import React from 'react';
import CreatorsCategoryContainer from '../components/Creators/CreatorsContainer';
import CategoryOverviewLayout from '../layouts/CategoryOverviewLayout';
import { CreatorsData } from '../mockdata/CreatorsMockData';
import SEO from '../components/SEO';
import CreatorsStackedLogo from '../assets/PktCreatorStackLogo.png';

const CreatorsHubPage: React.FC = () => {
	const creatorsData = React.useMemo(() => {
		return CreatorsData;
	}, []);

	return (
		<>
			<SEO
				title='Creator Hub'
				description='PKT Network is a fully decentralized media network. Anyone can distribute media content with global accessibility, censorship-resistance and built-in payments.'
				keywords='packet hub, content platform, media, entertainment, creators'
				url='https://hub.pkt.tv/creatorhub'
				imgSrc={CreatorsStackedLogo}
				siteName='Packet Hub'
			/>
			<CategoryOverviewLayout>
				<div className='flex flex-col gap-8'>
					{Object.entries(creatorsData).map(([key, section]) => (
						<CreatorsCategoryContainer key={key} title={section.title} cards={section.data} />
					))}
				</div>
			</CategoryOverviewLayout>
		</>
	);
};

export default CreatorsHubPage;
