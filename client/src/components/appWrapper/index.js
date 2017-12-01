import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { main,user } from "../../constants/routes";
import MainPage from "../../containers/mainPage";
import UserPage from "../../containers/userPage";


const AppWrapper = () => {
  return (
    <Router>
        <Switch>
          <Route exact path={main} component={MainPage}/>
          <Route exact path={user} component={UserPage}/>
        </Switch>
    </Router>
  );
};

export default AppWrapper;
