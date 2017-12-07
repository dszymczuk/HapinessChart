import React, { Component } from 'react';
import './style.css';
import Row from "../../components/row";
import Cell from "../../components/cell";
import CellDate from "../../components/cellDate";
import CellHapiness from "../../components/cellHapiness";
import CellUser from "../../components/cellUser";

const generateKeyArray = (length) => Array.apply(null, {length}).map((item, index) => {
	return {
		key: index
	}
});

const row = generateKeyArray(10);
const users = generateKeyArray(10);
const hapiness = generateKeyArray(2);


class MainPage extends Component {

	render() {
		return (
			<div className="chartPage">
				<div className="users">
					<Row>
						<Cell empty customClasses="dayHeight" />
						{users.map(item => {
							return (<Cell key={item.key} customClasses="center">
								<CellUser name="Damian"/>
							</Cell>)
						})}
					</Row>
				</div>
				<div className="days">
					{row.map(item => {
						return (
							<Row key={item.key}>
								<Cell customClasses="dayHeight">
									<CellDate date="23-11-2017"/>
								</Cell>
								{hapiness.map(item => {
									return (<Cell key={item.key} hapinessLevel="1">
										<CellHapiness emoji='weary'/>
									</Cell>)
								})}

								{hapiness.map(item => {
									return (<Cell key={item.key} hapinessLevel="2">
										<CellHapiness emoji='unamused'/>
									</Cell>)
								})}

								{hapiness.map(item => {
									return (<Cell key={item.key} hapinessLevel="3">
										<CellHapiness emoji='neutral_face'/>
									</Cell>)
								})}

								{hapiness.map(item => {
									return (<Cell key={item.key} hapinessLevel="4">
										<CellHapiness emoji='relaxed'/>
									</Cell>)
								})}

								{hapiness.map(item => {
									return (<Cell key={item.key} hapinessLevel="5">
										<CellHapiness emoji='grinning'/>
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

export default MainPage;

