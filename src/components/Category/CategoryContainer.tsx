import React from 'react';
import { CategoryCardProps } from './CategoryCard';
import { ChevronRight } from 'lucide-react';
import CategoryCard from './CategoryCard';
import CustomHr from './CustomHr';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface CategoryContainerProps {
	title: string;
	cards: CategoryCardProps[];
	isFullPage?: boolean;
	isViewOnly?: boolean;
}

const CategoryContainer: React.FC<CategoryContainerProps> = React.memo(
	({ title, cards, isFullPage = false, isViewOnly = false }) => {
		if (isFullPage) {
			return (
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full'>
						{cards.map((card, index) => (
							<div key={index} className='w-full'>
								<CategoryCard {...card} />
							</div>
						))}
					</div>
				</div>
			);
		}

		return (
			<div className={cn('flex flex-col gap-4 w-full', isViewOnly ? 'glass pl-5 py-5' : '')}>
				{/* Title section */}
				<div className='flex items-center gap-1 text-white'>
					{!isViewOnly &&  <Link to={`/?category=${title.toLowerCase()}`} className='flex items-center gap-1 text-white'>
						<p className='font-bold'>{title}</p>
					</Link>}
					{
						isViewOnly &&
						 <p className={cn('font-bold text-gradient', title === "Discover" ? 'bg-gradient-text-discover': 'bg-gradient-text-hot')}>{title}</p>
					}
					<ChevronRight className={cn('w-5 h-5', title === "Discover" ? 'text-[#3CADEF]': 'text-[#F79422]')} />
				</div>

				{/* Scrollable container with width constraints */}
				<div className='w-full'>
					<div className='max-w-full overflow-x-auto no-scrollbar'>
						<div className='inline-flex gap-4'>
							{cards.map((card, index) => (
								<div key={index} className='shrink-0 w-[145px] md:w-[224.5px]'>
									<CategoryCard {...card} />
								</div>
							))}
							<div className='flex text-white max-h-[120px] max-w-[224.5px] w-[120px] h-[100px] md:h-[120px] items-center'>
								{!isViewOnly && <Link to={`/?category=${title.toLowerCase()}`} className='flex gap-1 items-center'>
									<p className='font-semibold underline underline-offset-4'>See more</p>
									<ChevronRight />
								</Link>}
							</div>
						</div>
					</div>
				</div>

				{/* Divider */}
				{!isViewOnly && <div className='w-full'>
					<CustomHr />
				</div>}
			</div>
		);
	}
);

export default CategoryContainer;
