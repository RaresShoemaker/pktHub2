import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, SubmissionPage, CreatorsHubPage } from './pages/index';
import PageLayout from './layouts/PageLayout';
import { TransitionAnimationProvider } from './context/TransitionAnimationContext/TransitionAnimationProvider';

const App: React.FC = () => {
	return (
		<>
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
					<Route
						path='/creatorhub'
						element={
							<TransitionAnimationProvider>
								< CreatorsHubPage/>
							</TransitionAnimationProvider>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
