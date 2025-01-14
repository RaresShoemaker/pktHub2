import React from 'react';
import { cn } from '../../lib/utils';
import Footer from '../Footer';
import { useTransitionAnimation } from '../../context/TransitionAnimationContext/TransitionAnimationContext';
interface CategoryBgTransitionProps {
	children: React.ReactNode;
}

const CategoryBgTransition: React.FC<CategoryBgTransitionProps> = ({ children }) => {
	const { activeIndex, isTransitioning, nextIndex, category } = useTransitionAnimation();

	const getGradientsByCategory = (category: string | null): string[] => {
		switch (category) {
			case 'home':
				return [
					'bg-gradient-to-b from-[#090D23] to-[#1D2343]',
					'bg-gradient-to-b from-[#621816] to-[#1D2343]',
					'bg-gradient-to-b from-[#122C7D] to-[#3278D4]'
				];
			case 'media':
				return [
					'bg-gradient-to-b from-[#090D23] to-[#1D2343]',
					'bg-gradient-to-b from-[#621816] to-[#1D2343]',
					'bg-gradient-to-b from-[#008CFF] to-[#3278D4]'
				];
			case 'music':
				return [
					'bg-gradient-to-b from-[#0A4677] to-[#3278D4]',
					'bg-gradient-to-b from-[#090D23] to-[#1D2343]',
					'bg-gradient-to-b from-[#621816] to-[#1D2343]'
				];
			case 'casino':
				return [
					'bg-gradient-to-b from-[#090D23] to-[#1D2343]',
					'bg-gradient-to-b from-[#621816] to-[#1D2343]',
					'bg-gradient-to-b from-[#008CFF] to-[#3278D4]',
					'bg-gradient-to-b from-[#090D23] to-[#1D2343]'
				];
			case 'technology':
				return [
					'bg-gradient-to-b from-[#0A4677] to-[#3278D4]',
					'bg-gradient-to-b from-[#621816] to-[#1D2343]',
					'bg-gradient-to-b from-[#090D23] to-[#1D2343]'
				];
			case 'games':
				return [
					'bg-gradient-to-b from-[#621816] to-[#1D2343]',
					'bg-gradient-to-b from-[#090D23] to-[#1D2343]',
					'bg-gradient-to-b from-[#0A4677] to-[#3278D4]'
				];
			default:
				return [
					'bg-gradient-to-b from-[#090D23] to-[#1D2343]',
					'bg-gradient-to-b from-[#621816] to-[#1D2343]',
					'bg-gradient-to-b from-[#122C7D] to-[#3278D4]'
				];
		}
	};

	const gradients = getGradientsByCategory(category);

	return (
		<div className='relative min-h-screen isolate'>
			<div className='fixed inset-0 isolate -z-10'>
				<div className='absolute inset-0 bg-[#090D23]' />

				<div className='absolute inset-0 w-full h-full'>
					{/* Current gradient */}
					<div
						key={activeIndex}
						className={cn(
							'absolute inset-0 w-full h-full',
							gradients[activeIndex],
							'transition-opacity duration-1000 ease-in-out'
						)}
					/>

					{/* Next gradient */}
					<div
						key={`next-${nextIndex}`}
						className={cn(
							'absolute inset-0 w-full h-full',
							gradients[nextIndex],
							'transition-opacity duration-1000 ease-in-out'
						)}
						style={{
							opacity: isTransitioning ? 1 : 0
						}}
					/>
				</div>
			</div>

			<div className='relative flex flex-col min-h-screen'>
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default CategoryBgTransition;
