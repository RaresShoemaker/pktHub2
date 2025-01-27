import React, { useMemo } from 'react';
import MenuButton from './MenuButtons';
import { Link } from 'react-router-dom';
import CreatorHub from '../../assets/CreatorHubLogoWhite.svg?react'

import { HomeIcon, MediaIcon, MusicIcon, GamesIcon, CasinoIcon, TechnologyIcon, CreatorsIcon } from '../../assets/icons';
import { useSearchParams } from 'react-router-dom';

const MenuCategory: React.FC = () => {
	const [searchParams] = useSearchParams();
	const currentCategory = searchParams.get('category');
	const menuItems = useMemo(
		() => [
			{ title: 'Packet Hub', icon: <HomeIcon />, query: 'home', link: '/' },
			{ title: 'Creator Hub', icon: <CreatorsIcon />, query: '', link: '/creatorhub' },
			{ title: 'Media', icon: <MediaIcon />, query: 'media' },
			{ title: 'Music', icon: <MusicIcon />, query: 'music' },
			{ title: 'Games', icon: <GamesIcon />, query: 'games' },
			{ title: 'Casino', icon: <CasinoIcon />, query: 'casino' },
			{ title: 'Technology', icon: <TechnologyIcon />, query: 'technology' }
		],
		[]
	);

	return (
		<div className='h-full md:hidden lg:w-full rounded-2xl bg-[#1B1B1B] px-4 py-6 lg:flex flex-col justify-between hidden shadow-[0_0_40px_0_rgba(62,74,192,0.24)]'>
			<div className='flex flex-col gap-4 align-middle	'>
				{menuItems.map((item, i) => {
					return <MenuButton key={i} title={item.title} icon={item.icon} query={item.query} link={item.link} />;
				})}
			</div>
			{currentCategory === 'creators' && <div className='mt-40'>
				<CreatorHub className='w-full' />
			</div>}
			<div className='mt-auto'>
				<Link to='/submission'>
					<button className='rounded-full bg-primary text-white font-medium w-full h-12'>
						Submit Channel
					</button>
				</Link>
			</div>
		</div>
	);
};

export default MenuCategory;
