import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryOverviewLayout from '../layouts/CategoryOverviewLayout';
import CategoryContainer from '../components/Category/CategoryContainer';
import { CategoryData } from '../mockdata/CategoryMockData';

const Home: React.FC = () => {
	const [searchParams] = useSearchParams();
	const category = React.useMemo(() => searchParams.get('category'), [searchParams]);

	const categoryData = React.useMemo(() => {
		if (category && CategoryData[category]) {
			return CategoryData[category];
		}
		return null;
	}, [category]);

	if (categoryData) {
		return (
			<CategoryOverviewLayout>
				<CategoryContainer title={categoryData.title} cards={categoryData.data} isFullPage={true} />
			</CategoryOverviewLayout>
		);
	}

	return (
		<CategoryOverviewLayout>
			<div className='flex flex-col gap-4'>
				{Object.entries(CategoryData).map(([key, categoryInfo]) => (
					<CategoryContainer
						key={key}
						title={categoryInfo.title}
						cards={categoryInfo.data}
						isFullPage={false}
						isViewOnly={categoryInfo.isViewOnly}
					/>
				))}
			</div>
		</CategoryOverviewLayout>
	);
};

export default Home;
