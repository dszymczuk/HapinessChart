import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './style.css';
import Cell from "../cell/index";
import CellDate from "../cellDate/index";
import CellHapiness from "../cellHapiness/index";

const row = Array.apply(null, {length: 10}).map((item, index) => {
	return {
		key: index
	}
});

class ChartDay extends Component {
  render() {
    return (
      <div className="chartDay">
          <Cell>
            <CellDate/>
          </Cell>
					{row.map(item => {
						return (<Cell key={item.key}>
              <CellHapiness/>
            </Cell>)
					})}
      </div>
    );
  }
}
;

ChartDay.defaultProps = {};

ChartDay.propTypes = {};

export default ChartDay;
