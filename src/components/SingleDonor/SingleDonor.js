import React from 'react';
import './SingleDonor.css';

const SingleDonor = (props) => {
  const { img, name, text1, text2, text3 } = props;

  return (
    <div className="donors-wrapper">
      <div className="donors-box">
        <div className="donors-img-wrap">
          <img src={img} alt={`${name} Logo`} />
        </div>
      </div>
      <div className="donors-box">
        <h4>{name}</h4>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
      </div>
    </div>
  );
};

export default SingleDonor;
