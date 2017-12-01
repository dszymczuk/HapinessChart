import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import "./style.css";
import { chart, user } from "../../constants/routes";
import Chart from "../../containers/chartPage";
import UserPage from "../../containers/userPage";


const AppWrapper = () => {
	return (
		<div className="appWrapper">
			<Router>
				<Switch>
					<Route exact path={chart} component={Chart}/>
					<Route exact path={user} component={UserPage}/>
				</Switch>
			</Router>
		</div>
	);
};

export default AppWrapper;
