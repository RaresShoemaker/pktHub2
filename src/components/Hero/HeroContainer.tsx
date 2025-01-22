import React from 'react';
import HeroImage from './HeroImage';
import TransitionGradient from '../TransitionGradient';
import HeroText from './HeroText';
import PktHubLogo from '../../assets/PktHubLogo.svg';
import { Link } from 'react-router-dom';
import { useTransitionAnimation } from '../../context/TransitionAnimationContext/TransitionAnimationContext';

const HeroContainer: React.FC = () => {
	const { category } = useTransitionAnimation();
	return (
		<>
			{category !== 'creators' && <div className='absolute top-0 left-0 right-0 h-[550px] md:h-[700px] w-full'>
				<HeroImage />
				<TransitionGradient />
			</div>}
			{
				category === 'creators' && <div className='absolute top-0 left-0 right-0 h-[430px] md:h-[480px] md:ml-48 md:object-center'>
					<HeroImage />
					<div className='hidden md:block h-[500px] w-64 absolute bg-[#090D23] blur-[14px] bottom-0 -left-[200px]'>
						<p>asd</p>
					</div>
					<div className='relative md:h-[100px] h-[120px]'>
					<TransitionGradient />
					</div>
				</div>
			}
			<div className='z-50 absolute top-0 md:left-auto md:right-10 left-10'>
				<Link to='/'>
					<img src={PktHubLogo} alt='Packet Hub Logo' className='w-14 h-14 mx-auto mt-10 fixed md:static' />
				</Link>
			</div>
			{category !== 'creators' && <HeroText description='Discover content platforms from around the world' />}
		</>
	);
};

export default HeroContainer;
