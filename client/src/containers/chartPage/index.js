import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { get, keys, values } from 'lodash/fp';
import './style.css';
import Row from "../../components/row";
import Cell from "../../components/cell";
import CellDate from "../../components/cellDate";
import CellHapiness from "../../components/cellHapiness";
import CellUser from "../../components/cellUser";
import { getHapinessData } from './../../reducers/hapiness';


class MainPage extends Component {

	componentWillMount = () => {
		this.props.getHapinessData();
	}

	render() {
		const {levels, users} = this.props;

		return (
			<div className="chartPage">
				<div className="users">
					<Row>
						<Cell empty customClasses="dayHeight"/>
						{users && users.map(user => {
							return (<Cell key={user} customClasses="center">
								<CellUser name={user}/>
							</Cell>)
						})}
					</Row>
				</div>
				<div className="days">
					{levels && Object.keys(levels).map(level => {

						const hapiness = get([level])(levels);

						return (
							<Row key={level}>
								<Cell customClasses="dayHeight">
									<CellDate date={level}/>
								</Cell>
								{users && users.map((user, index) => {
									const userObj = hapiness.find(u => get([0])(keys(u)) === user);
									const [happyData] = values(userObj).map(i => i);
									const emoji = get('emoji')(happyData);
									const level = get('level')(happyData);
									const key = `${index}-${user}-${level}`;
									return (<Cell key={key} hapinessLevel={level}>
										<CellHapiness emoji={emoji}/>
									</Cell>)
								})}
							</Row>
						)
					})}
				</div>
			</div>
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
