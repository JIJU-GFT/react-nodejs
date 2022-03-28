import React from 'react';
import PropTypes from 'prop-types';

function Card({ children }) {
  return <div className="card-component">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.string,
};

export default Card;
