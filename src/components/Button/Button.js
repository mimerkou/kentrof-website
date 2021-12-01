import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
  const { path, children } = props;

  return (
    <Link to={path} className="btn">
      {children}
    </Link>
  );
};

export default Button;
