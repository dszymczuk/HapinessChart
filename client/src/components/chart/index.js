import React from 'react';
import PropTypes from 'prop-types';
import { get, keys, values } from 'lodash/fp';
import Row from "../../components/row";
import Cell from "../../components/cell";
import CellDate from "../../components/cellDate";
import CellHapiness from "../../components/cellHapiness";
import CellUser from "../../components/cellUser";
import './style.css';

const Chart = ({levels, users}) => {
		return (
			<div className="chart">
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
;

Chart.defaultProps = {};

Chart.propTypes = {
	users: PropTypes.array,
	levels: PropTypes.shape()
};

export default Chart;
