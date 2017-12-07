import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import dateFormat from './../../constants/dateFormat';
import './style.css';

const CellDate = ({date}) => {

	const formatedDate = moment(date, dateFormat);
	const day = formatedDate.format('DD');
	const month = formatedDate.format('MMMM');
	const year = formatedDate.format('YYYY');

	return (
		<div className="cellDate">
			<span className="day">{day}</span>
			<span className="month">{month}</span>
			<span className="year">{year}</span>
		</div>
	);
};

CellDate.defaultProps = {};

CellDate.propTypes = {
	day: PropTypes.string,
	month: PropTypes.string,
	year: PropTypes.string,
};

export default CellDate;
