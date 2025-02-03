import React, {useEffect, useMemo} from 'react';
import ReactGA from "react-ga4";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, SubmissionPage, CreatorsHubPage } from './pages/index';
import PageLayout from './layouts/PageLayout';
import { TransitionAnimationProvider } from './context/TransitionAnimationContext/TransitionAnimationProvider';
import AnalyticsTracker from './components/AnalyticsTracker';

const App: React.FC = () => {
	const TRACKING_ID = useMemo(() => import.meta.env.VITE_TRACKING_ID_GA, []);

	 // Initialize GA only once when the app loads
	 useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, [TRACKING_ID]);


	return (
		<>
			<Router>
				<AnalyticsTracker />
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
