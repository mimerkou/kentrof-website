import React from 'react';
import './Person.css';

const Person = (props) => {
  const { name, title, text, img } = props;

  return (
    <div className="person-box">
      <div className="person-wrapper">
        <div className="person-info">
          <h4>{name}</h4>
          <h5>{title}</h5>
          <p>{text}</p>
        </div>

        <div className="person-img">
          <img src={img} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Person;
