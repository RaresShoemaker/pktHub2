import React, { useMemo } from 'react';
import MenuButton from './MenuButtons';
import { Link } from 'react-router-dom';

import { HomeIcon, MediaIcon, MusicIcon, GamesIcon, CasinoIcon, TechnologyIcon } from '../../assets/icons';

const MenuCategory: React.FC = () => {
	const menuItems = useMemo(
		() => [
			{ title: 'Home', icon: <HomeIcon />, query: 'home' },
			{ title: 'Media', icon: <MediaIcon />, query: 'media' },
			{ title: 'Music', icon: <MusicIcon />, query: 'music' },
			{ title: 'Games', icon: <GamesIcon />, query: 'games' },
			{ title: 'Casino', icon: <CasinoIcon />, query: 'casino' },
			{ title: 'Technology', icon: <TechnologyIcon />, query: 'technology' }
		],
		[]
	);

	return (
		<div className='h-full rounded-2xl bg-[#1B1B1B] px-4 py-6 md:flex flex-col justify-between hidden shadow-[0_0_40px_0_rgba(62,74,192,0.24)]'>
			<div className='flex flex-col gap-4 align-middle	'>
				{menuItems.map((item, i) => {
					return <MenuButton key={i} title={item.title} icon={item.icon} query={item.query} />;
				})}
			</div>
			<div className='mt-auto'>
				<button className='rounded-full bg-primary text-white font-medium w-full h-12'>
					<Link to='/submission'>Submit Channel</Link>
				</button>
			</div>
		</div>
	);
};

export default MenuCategory;
