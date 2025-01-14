import React from 'react';

interface HeroTextProps {
	title: string;
	description: string;
}

const HeroText: React.FC<HeroTextProps> = ({ title, description }) => {
	return (
		<div className='absolute w-full md:w-fit md:right-10 mt-[350px] z-10'>
			<div className='h-full w-full flex flex-col gap-2 items-center justify-center text-white'>
				<h1 className='text-5xl font-bold'>{title}</h1>
				<p className='max-w-[350px] text-2xl text-center opacity-80'>{description}</p>
			</div>
		</div>
	);
};

export default HeroText;
