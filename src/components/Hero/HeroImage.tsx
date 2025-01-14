import React, { useState, useEffect } from 'react';
import { useTransitionAnimation } from '../../context/TransitionAnimationContext/TransitionAnimationContext';
import { TRANSITION_DURATION } from '../../context/TransitionAnimationContext/constants';

const HeroImage: React.FC = () => {
	const { activeIndex, isTransitioning, nextIndex, category } = useTransitionAnimation();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 425); // Standard mobile breakpoint
		};

		checkMobile();

		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const getImagesByCategory = (category: string | null): string[] => {
		const mobileSuffix = isMobile ? '-mobile' : '';

		switch (category) {
			case 'home':
				return [`/Home1${mobileSuffix}.svg`, `/Home2${mobileSuffix}.svg`, `/Home3${mobileSuffix}.svg`];
			case 'media':
				return [`/Media1${mobileSuffix}.svg`, `/Media2${mobileSuffix}.svg`, `/Media3${mobileSuffix}.svg`];
			case 'music':
				return [`/Music1${mobileSuffix}.svg`, `/Music2${mobileSuffix}.svg`, `/Music3${mobileSuffix}.svg`];
			case 'games':
				return [`/Games1${mobileSuffix}.svg`, `/Games2${mobileSuffix}.svg`, `/Games3${mobileSuffix}.svg`];
			case 'casino':
				return [
					`/Casino1${mobileSuffix}.svg`,
					`/Casino2${mobileSuffix}.svg`,
					`/Casino3${mobileSuffix}.svg`,
					`/Casino4${mobileSuffix}.svg`
				];
			case 'technology':
				return [
					`/Technology1${mobileSuffix}.svg`,
					`/Technology2${mobileSuffix}.svg`,
					`/Technology3${mobileSuffix}.svg`
				];
			default:
				return [`/Home1${mobileSuffix}.svg`, `/Home2${mobileSuffix}.svg`, `/Home3${mobileSuffix}.svg`];
		}
	};

	const images = getImagesByCategory(category);

	if (!images || images.length === 0) return null;

	if (images.length === 1) {
		return (
			<img
				src={images[0]}
				alt='Hero Background'
				className='absolute inset-0 md:object-cover md:h-full md:w-full'
			/>
		);
	}

	const currentImageIndex = activeIndex % images.length;
	const nextImageIndex = nextIndex % images.length;

	const transitionStyle = {
		transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`
	};

	return (
		<div className='relative h-full w-full overflow-hidden'>
			{/* Next image (bottom layer) */}
			<img
				key={`next-${nextImageIndex}`}
				src={images[nextImageIndex]}
				alt='Hero Background Next'
				className='absolute inset-0 md:object-cover md:h-full md:w-full pb'
			/>

			{/* Current image (top layer) */}
			<img
				key={`active-${currentImageIndex}`}
				src={images[currentImageIndex]}
				alt='Hero Background Current'
				className='absolute inset-0 md:object-cover md:h-full md:w-full'
				style={{
					...transitionStyle,
					opacity: isTransitioning ? 0 : 1
				}}
			/>
		</div>
	);
};

export default HeroImage;
