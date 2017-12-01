import React  from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Row = ({children}) => {
	return (
		<div className="row">
			{children}
		</div>
	);
};

Row.defaultProps = {};

Row.propTypes = {
	children: PropTypes.node
};

export default Row;
