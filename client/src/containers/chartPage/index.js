import React, { Component } from 'react';
import './style.css';
import Cell from "../../components/cell/index";
import CellDate from "../../components/cellDate/index";
import CellHapiness from "../../components/cellHapiness/index";

const row = Array.apply(null, {length: 10}).map((item, index) => {
	return {
		key: index
	}
});

console.log(row);


class MainPage extends Component {

	render() {
		return (
			<div className="chartPage">
				<div className="days">
				{row.map(item => {
					return (<Cell key={item.key}>
						<CellDate/>
					</Cell>)
				})}
				</div>

				<div className="emotion">
				{row.map(item => {
					return (<Cell key={item.key}><CellHapiness/></Cell>)
				})}
				</div>

				<div className="emotion">
					{row.map(item => {
						return (<Cell key={item.key}><CellHapiness/></Cell>)
					})}
				</div>
			</div>
		);
	}
}

export default MainPage;

