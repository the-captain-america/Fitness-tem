import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import store, { history } from '../store/store';
import Landing from './landing';
import Wrapper from '../features/Wrapper';

const Routes = () => {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Wrapper>
					<Switch>
						<Route path="/" component={Landing} />
					</Switch>
				</Wrapper>
			</Router>
		</Provider>
	);
};

export default Routes;
