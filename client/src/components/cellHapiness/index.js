import React  from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { Emoji } from 'emoji-mart'


const CellHapiness = (props)=> {
    return (
      <div className="cellHapiness">
				<Emoji {...props} />
      </div>
    );
};

CellHapiness.defaultProps = {
  emoji: '',
	set: 'messenger',
  size: 40
};

CellHapiness.propTypes = {
	emoji: PropTypes.string,
	set: PropTypes.string,
	size: PropTypes.number,
};

export default CellHapiness;
