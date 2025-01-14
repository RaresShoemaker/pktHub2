import React from 'react';
import { Link } from 'react-router-dom';

type ChannelCardProps = {
	href: string;
	logo: React.ReactNode;
};

const ChannelCard: React.FC<ChannelCardProps> = ({ href, logo }) => {
	return (
		<Link to={href} target='_blank'>
			<div className='bg-white border-2 border-white hover:bg-transparent rounded-2xl transition-all duration-200 group outline-none'>
				<div className='rounded-xl p-4 aspect-[4/3] md:aspect-square lg:aspect-[5/3] flex items-center justify-center'>
					<div
						className='w-full h-full flex items-center justify-center 
            group-hover:[&_path]:fill-white 
            group-hover:[&_rect]:fill-white 
            group-hover:[&_circle]:fill-white 
            group-hover:[&_#ytb-text]:fill-transparent
            group-hover:[&_g#ytb-text>path]:fill-blue-700
            group-hover:[&_g#mlb-player>path]:fill-blue-700
            group-hover:[&_g#mlb-ball>path]:fill-blue-700'
					>
						{logo}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ChannelCard;
