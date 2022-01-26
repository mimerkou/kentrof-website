import React from 'react';
import SingleDonor from '../../components/SingleDonor/SingleDonor';
import { singleDonorData } from '../../components/SingleDonor/singleDonorData';
import './Donors.css';

const Donors = () => {
  return (
    <div className="donors-container">
      <h2>Χρηματοδότες</h2>

      {singleDonorData.map((donor) => {
        return <SingleDonor key={donor.id} {...donor} />;
      })}
    </div>
  );
};

export default Donors;
