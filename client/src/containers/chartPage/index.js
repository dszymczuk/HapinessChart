import React, { Component } from 'react';
import './style.css';
import Row from "../../components/row";
import Cell from "../../components/cell";
import CellDate from "../../components/cellDate";
import CellHapiness from "../../components/cellHapiness";
import CellUser from "../../components/cellUser";


const row = Array.apply(null, {length: 10}).map((item, index) => {
	return {
		key: index
	}
});

const users = Array.apply(null, {length: 10}).map((item, index) => {
	return {
		key: index
	}
});

const hapiness = Array.apply(null, {length: 10}).map((item, index) => {
	return {
		key: index
	}
});


class MainPage extends Component {

	render() {
		return (
			<div className="chartPage">
				<div className="users">
					<Row>
						<Cell empty />
						{users.map(item => {
							return (<Cell key={item.key}>
								<CellUser/>
							</Cell>)
						})}
					</Row>
				</div>
				<div className="days">
					{row.map(item => {
						return (
							<Row key={item.key}>
								<Cell>
									<CellDate/>
								</Cell>
								{hapiness.map(item => {
									return (<Cell key={item.key}>
										<CellHapiness/>
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

