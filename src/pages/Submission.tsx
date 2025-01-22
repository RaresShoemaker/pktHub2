import React, { useState } from 'react';
import ChannelSubmissionForm from '../components/forms/ChannelSubmission';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SubmissionTab from '../components/forms/SubmissionTab';
import CreatorsSubmissionForm from '../components/forms/CreatorsSubmission';

const SubmissionPage: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<'channel' | 'creator'>('channel');

	const handleChangeTab = (tab: 'channel' | 'creator') => {
		setSelectedTab(tab);
	};
	return (
		<main className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-12 md:py-20'>
				<div className='max-w-4xl mx-auto space-y-10 text-white'>
					{/* Header */}
					<header className='flex items-center'>
						<Link to='/' className='flex items-center gap-2 z-40'>
							<ChevronLeft className='w-6 h-6' />
							<span className='hidden md:inline'>Back</span>
						</Link>
						<div className='flex-1 flex justify-center -ml-6'>
							<SubmissionTab handleTabChange={handleChangeTab} selectedValue={selectedTab} />
						</div>
					</header>

					{/* Content */}
					<div className='space-y-5 text-center'>
						<h1 className='text-3xl md:text-4xl font-semibold'>Onboarding Form</h1>
						<p className='font-medium lg:text-2xl max-w-2xl mx-auto'>
							{`If you would like to list your platform on the ${
								selectedTab === 'channel' ? 'Packet Hub' : 'Creator Hub'
							}, please submit the form below.`}
						</p>
					</div>

					{/* Form */}
					<div className='w-full max-w-2xl mx-auto'>
						{selectedTab === 'channel' && <ChannelSubmissionForm />}
						{selectedTab === 'creator' && <CreatorsSubmissionForm />}
					</div>
				</div>
			</div>
		</main>
	);
};

export default SubmissionPage;
