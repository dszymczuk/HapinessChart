import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { get } from 'lodash/fp';
import './style.css';

import { getHapinessData } from './../../reducers/hapiness';
import Chart from "../../components/chart";


class MainPage extends Component {

	componentWillMount = () => {
		this.props.getHapinessData();
	}

	render() {

		const {levels, users} = this.props;

		return (
			<Chart levels={levels} users={users}/>
		);
	}
}

const mapStateToProps = state => {
	const levels = get('hapiness.data.levels')(state);
	const users = get('hapiness.data.users')(state);

	return {
		users,
		levels
	}
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getHapinessData
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
