import React from 'react';
import ChannelSubmissionForm from '../components/forms/ChannelSubmission';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PacketHubLogoWhite from '../assets/PacketHubLogoWhite.svg?react';
import PacketHubLogoMobile from '../assets/PacketHubMobile.svg?react';

const SubmissionPage: React.FC = () => {
	return (
		<section className='flex flex-col mt-12 md:mt-20'>
			<div className='text-white flex flex-col gap-10'>
				<div className='font-semibold flex'>
					<Link to='/' className='flex'>
						<ChevronLeft className='w-6 h-6 z-10' />
						<p className='hidden md:block'>Back</p>
					</Link>
					<div className='w-full hidden md:flex justify-center -ml-6'>
							<PacketHubLogoWhite />
					</div>
					<div className='w-full flex justify-center -ml-6 md:hidden'>
						<PacketHubLogoMobile />
					</div>
				</div>
				<div className='flex flex-col gap-5 md:self-center'>
					<h1 className='text-3xl md:text-4xl font-semibold text-center'>Onboarding Form</h1>
					<p className='text-center font-medium lg:text-2xl md:w-[80%] lg:w-[58%] self-center'>
					If you would like to list your platform on the Packet Hub Hub, please submit the form below.
					</p>
				</div>

				<div className='min-w-full md:min-w-[400px] self-center'>
					<ChannelSubmissionForm />
				</div>
			</div>
		</section>
	);
};

export default SubmissionPage;
