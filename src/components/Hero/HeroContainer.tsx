import React from 'react';
import HeroImage from './HeroImage';
import TransitionGradient from '../TransitionGradient';
import HeroText from './HeroText';
import PktHubLogo from '../../assets/PktHubLogo.svg';
import { Link } from 'react-router-dom';
import { useTransitionAnimation } from '../../context/TransitionAnimationContext/TransitionAnimationContext';
import CreatorsHubLogo from '../../assets/CreatorHubLogoWhite.svg?react';

const HeroContainer: React.FC = () => {
	const { category } = useTransitionAnimation();

	return (
		<>
			{category !== 'creators' && (
				<div className='absolute top-0 left-0 right-0 h-[550px] md:h-[700px] w-full'>
					<HeroImage />
					<TransitionGradient />
				</div>
			)}
			{category === 'creators' && (
				<div className='md:h-[890px] h-[100px] -ml-[550px] md:ml-0'>
					<HeroImage />
					<div className='hidden md:block absolute top-0 left-0 right-0 h-[470px] md:h-[570px] w-full'>
						<TransitionGradient />
					</div>
					<div className='absolute top-[400px] -right-10 h-[130px] bg-[#090D23] blur-[24px] w-[600px]' />
					<div className='md:hidden h-20 inset-0 absolute top-[440px] justify-center flex items-center'>
						<CreatorsHubLogo />
					</div>
				</div>
			)}
			<div
				className={`z-50 absolute top-0 md:left-auto md:right-10 left-10 transition-all duration-500 ease-in-out transform`}
			>
				<Link to='/'>
					<img src={PktHubLogo} alt='Packet Hub Logo' className='w-14 h-14 mx-auto mt-10 fixed md:static' />
				</Link>
			</div>
			{category !== 'creators' && <HeroText description='Discover content platforms from around the world' />}
		</>
	);
};

export default HeroContainer;
