import React from 'react';
import ChannelSubmissionForm from '../components/forms/ChannelSubmission';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubmissionPage: React.FC = () => {
	return (
		<section className='flex flex-col mt-12 md:mt-20'>
			<div className='text-white flex flex-col gap-10'>
				<div className='font-semibold flex'>
					<Link to='/'>
						<ChevronLeft className='w-6 h-6 md:hidden' />
					</Link>
					<div className='w-full text-center pr-10 md:pr-0'>
						<p>PKT Hub</p>
					</div>
				</div>
				<div className='flex flex-col gap-5 md:self-center'>
					<h1 className='text-3xl md:text-4xl font-semibold text-center'>PKT Hub Onboarding</h1>

					<p className='text-center font-medium lg:text-2xl md:w-[80%] lg:w-[58%] self-center'>
						Welcome to the PKT ecosystem! To list your platform on PKT Hub, please fill out the form below.{' '}
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
