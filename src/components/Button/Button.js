import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
  const { path, darkBg, children } = props;

  return (
    <Link to={path} className={darkBg ? 'btn darkBg' : 'btn'}>
      {children}
    </Link>
  );
};

export default Button;
