import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import MenuButton from './MenuButtons';
import { HomeIcon, MediaIcon, MusicIcon, GamesIcon, CasinoIcon, TechnologyIcon } from '../../assets/icons';

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Lock body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	const menuItems = [
		{ title: 'Home', icon: <HomeIcon />, query: 'home' },
		{ title: 'Media', icon: <MediaIcon />, query: 'media' },
		{ title: 'Music', icon: <MusicIcon />, query: 'music' },
		{ title: 'Games', icon: <GamesIcon />, query: 'games' },
		{ title: 'Casino', icon: <CasinoIcon />, query: 'casino' },
		{ title: 'Technology', icon: <TechnologyIcon />, query: 'technology' }
	];

	const MenuContent = () => (
		<div className='fixed inset-0 bg-[#1B1B1B] z-50 md:hidden pt-8'>
			<div className='flex flex-col h-full'>
				<div className='flex pt-7 justify-end'>
					<button
						onClick={() => setIsOpen(false)}
						className='pr-7 text-white hover:text-gray-300 transition-colors'
						aria-label='Close menu'
					>
						<X size={24} />
					</button>
				</div>

				<div className='flex-1 flex flex-col gap-6 mt-8'>
					{menuItems.map((item, i) => (
						<div key={i} onClick={() => setIsOpen(false)}>
							<MenuButton title={item.title} icon={item.icon} query={item.query} />
						</div>
					))}
				</div>

				<div className='mt-auto pb-6 px-6'>
					<Link
						to='/submission'
						onClick={() => setIsOpen(false)}
						className='rounded-full bg-primary text-white font-medium w-full h-12 flex items-center justify-center'
					>
						Submit Channel
					</Link>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<div className='fixed h-12 w-12 bg-white/25 rounded-full p-1 backdrop-blur-md z-40'>
				<button
					onClick={() => setIsOpen(true)}
					className='p-2 text-white hover:text-gray-300 transition-colors md:hidden'
					aria-label='Open menu'
				>
					<Menu size={24} />
				</button>
			</div>

			{isOpen && createPortal(<MenuContent />, document.body)}
		</>
	);
};

export default MobileMenu;
