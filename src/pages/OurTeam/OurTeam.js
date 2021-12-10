import React from 'react';
import Person from '../../components/Person/Person';
import { personData } from '../../components/Person/personData';
import './OurTeam.css';

const OurTeam = () => {
  return (
    <div className="our-team-container">
      <h2>Η Ομάδα μας</h2>
      {personData.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

export default OurTeam;
