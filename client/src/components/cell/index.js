import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Cell = ({empty, children, hapinessLevel, customClasses}) => {

		const happyLevel = hapinessLevel ? `level-${hapinessLevel}` : '';

		return (
			<div className={`cell ${happyLevel} ${customClasses}`}>
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
	hapinessLevel: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	customClasses: PropTypes.string,
};

export default Cell;
