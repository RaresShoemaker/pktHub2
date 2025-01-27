import React from 'react';
import CreatorsCategoryContainer from '../components/Creators/CreatorsContainer';
import CategoryOverviewLayout from '../layouts/CategoryOverviewLayout';
import { CreatorsData } from '../mockdata/CreatorsMockData';

const CreatorsHubPage: React.FC = () => {

  const creatorsData = React.useMemo(() => {
    return CreatorsData;
  }, [])

  return (
    <CategoryOverviewLayout>
      <div className="flex flex-col gap-8">
        {Object.entries(creatorsData).map(([key, section]) => (
          <CreatorsCategoryContainer 
            key={key}
            title={section.title}
            cards={section.data}
          />
        ))}
      </div>
    </CategoryOverviewLayout>
  );
}


export default CreatorsHubPage