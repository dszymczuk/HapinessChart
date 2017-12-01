import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CellUser = ({name}) => {
	return (
		<div className="cellUser">
			{name}
		</div>
	);
};

CellUser.defaultProps = {
	name: ''
};

CellUser.propTypes = {
	name: PropTypes.string
};

export default CellUser;
