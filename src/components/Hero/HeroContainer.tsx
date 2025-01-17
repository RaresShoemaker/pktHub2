import React from 'react';
import HeroImage from './HeroImage';
import TransitionGradient from '../TransitionGradient';
import HeroText from './HeroText';
import PktHubLogo from '../../assets/PktHubLogo.svg';
import { Link } from 'react-router-dom';

const HeroContainer: React.FC = () => {
	return (
		<>
			<div className='absolute top-0 left-0 right-0 h-[550px] md:h-[700px] w-full'>
				<HeroImage />
				<TransitionGradient />
			</div>
			<div className='z-50 absolute top-0 md:left-auto md:right-10 left-10'>
				<Link to='/'>
					<img src={PktHubLogo} alt='Packet Hub Logo' className='w-14 h-14 mx-auto mt-10 fixed md:static' />
				</Link>
			</div>
			<HeroText description='Discover content platforms from around the world' />
		</>
	);
};

export default HeroContainer;
