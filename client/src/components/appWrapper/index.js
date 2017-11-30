import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { main } from "../../constants/routes";
import MainPage from "../../containers/mainPage";


const AppWrapper = () => {
  return (
    <Router>
        <Switch>
          <Route exact path={main} component={MainPage}/>
        </Switch>
    </Router>
  );
};

export default AppWrapper;
