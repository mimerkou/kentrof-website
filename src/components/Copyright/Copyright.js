import React from 'react';
import './Copyright.css';

const year = new Date().getFullYear();

const Copyright = () => {
  return (
    <div className="copyright">
      Copyright &copy; {year} Κέντρο Φ
      {/* <br />
      All rights reserved */}
    </div>
  );
};

export default Copyright;
