import React, { useCallback } from 'react';
import { cn } from '../../lib/utils';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

interface MenuButtonProps {
	title: string;
	icon: React.ReactNode;
	query?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ title, icon, query }) => {
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const currentCategory = searchParams.get('category');

	const isSelected = !query
		? location.pathname === '/' && !currentCategory
		: currentCategory === query || (!currentCategory && query === 'home');

	const getImagesByCategory = useCallback((category: string | null): string[] => {
		switch (category) {
			case 'home':
				return ['/Home1.svg', '/Home2.svg', '/Home3.svg'];
			case 'media':
				return ['/Media1.svg', '/Media2.svg', '/Media3.svg'];
			case 'music':
				return ['/Music1.svg', '/Music2.svg', '/Music3.svg'];
			case 'games':
				return ['/Games1.svg', '/Games2.svg', '/Games3.svg'];
			case 'casino':
				return ['/Casino1.svg', '/Casino2.svg', '/Casino3.svg', '/Casino4.svg'];
			case 'technology':
				return ['/Technology1.svg', '/Technology2.svg', '/Technology3.svg'];
			default:
				return ['/Home1.svg', '/Home2.svg', '/Home3.svg'];
		}
	}, []);

	const handleMouseEnter = useCallback(() => {
		if (!query) return;

		const images = getImagesByCategory(query);

		// Preload images using both Image object and link preload
		images.forEach((src) => {
			// Method 1: Create new Image object
			const img = new Image();
			img.src = src;

			// Method 2: Add preload link
			const link = document.createElement('link');
			link.rel = 'preload';
			link.as = 'image';
			link.href = src;

			// Remove existing preload link for this image if it exists
			const existingLink = document.head.querySelector(`link[href="${src}"]`);
			if (existingLink) {
				document.head.removeChild(existingLink);
			}

			document.head.appendChild(link);
		});
	}, [query, getImagesByCategory]);

	return (
		<Link to={query ? `/?category=${query}` : '/'} onMouseEnter={handleMouseEnter}>
			<div
				className={cn(
					'w-full rounded-lg text-white flex gap-2 items-center p-2',
					isSelected && 'bg-white/10 rounded-2xl [&_rect.icon-bg]:fill-white/50 [&_#icon-bg]:fill-opacity-100'
				)}
			>
				{icon}
				<p>{title}</p>
			</div>
		</Link>
	);
};

export default MenuButton;
