import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, SubmissionPage } from './pages/index';
import PageLayout from './layouts/PageLayout';
import { TransitionAnimationProvider } from './context/TransitionAnimationContext/TransitionAnimationProvider';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
	const currentUrl = window.location.href;
	return (
		<>
			<Helmet>
				<meta property='og:url' content={currentUrl} />
				<meta property='og:title' content='Pkt Hub' />
				<meta property='og:description' content='Packet Hub' />
				<meta property='og:image' content='./PacketaShareLink.png' />
			</Helmet>
			<Router>
				<Routes>
					<Route element={<PageLayout />}>
						<Route path='/submission' element={<SubmissionPage />} />
					</Route>
					<Route
						path='/'
						element={
							<TransitionAnimationProvider>
								<HomePage />
							</TransitionAnimationProvider>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
