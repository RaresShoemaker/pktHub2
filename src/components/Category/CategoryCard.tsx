import React from 'react';
import { Link } from 'react-router-dom';

export interface CategoryCardProps {
	alt: string;
	logo: React.ReactNode;
	logoWhite?: React.ReactNode;
	href: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ alt, logo, logoWhite, href }) => {
	return (
		<div className='flex flex-col gap-4'>
			<Link to={href} target='_blank' className='w-full transition-all duration-200'>
				<div
					className='w-full h-[100px] md:h-[120px] bg-white rounded-2xl transition-all duration-200 group relative overflow-hidden'
					style={
						{
							'--hover-gradient': 'linear-gradient(180deg, #3569ED 0%, #282FE9 100%)'
						} as React.CSSProperties
					}
				>
					{/* Normal state */}
					<div className='absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-200 group-hover:opacity-0'>
						{logo}
					</div>

					{/* Hover state */}
					<div
						className='absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-200'
						style={{
							background: 'var(--hover-gradient)',
							boxShadow: '0px 0px 40px rgba(26, 41, 179, 0.48)'
						}}
					>
						{logoWhite || logo}
					</div>
				</div>
			</Link>
			<div className='text-white font-semibold'>
				<p>{alt}</p>
			</div>
		</div>
	);
};

export default CategoryCard;
