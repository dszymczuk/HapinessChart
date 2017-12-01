import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './style.css';

const Cell = ({children})=> {

		return (
      <div className="cell">
        {children}
      </div>
		);
	}
;

Cell.defaultProps = {};

Cell.propTypes = {};

export default Cell;
