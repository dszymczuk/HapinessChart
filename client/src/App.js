import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './createStore';
import AppWrapper from "./components/appWrapper";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppWrapper/>
			</Provider>
		);
	}
}

export default App;
