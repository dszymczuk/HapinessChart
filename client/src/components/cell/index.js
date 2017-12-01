import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Cell = ({empty, children}) => {
		return (
			<div className="cell">
				{empty &&
				<span>&nbsp;</span>
				}

				{!empty && children}
			</div>
		);
	}
;

Cell.defaultProps = {};

Cell.propTypes = {
	empty: PropTypes.bool,
	children: PropTypes.node
};

export default Cell;
