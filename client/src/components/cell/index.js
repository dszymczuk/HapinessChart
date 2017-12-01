import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Cell = ({empty, children, hapinessLevel}) => {

		return (
			<div className={`cell level-${hapinessLevel}`}>
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
	children: PropTypes.node,
	hapinessLevel: PropTypes.string,
};

export default Cell;
