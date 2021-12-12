import React from 'react';
import donationImg from '../../assets/kentro-f-11.jpg';
import './Donation.css';

const Donation = () => {
  return (
    <div className="donation-container">
      <div className="donation-wrapper">
        <div className="donation-box">
          <h2>Στηρίξτε το έργο μας</h2>
          <p>Κάθε δωρεά, έστω και η ελάχιστη... μετράει.</p>
          <p>Παρακάτω εμφανίζεται ο τραπεζικός μας λογαριασμός.</p>
          <p>Χωρίς την δική σας συνεισφορά δεν θα μπορούσαμε να υπάρχουμε.</p>
          <br />
          <p className="thanks">Σας ευχαριστούμε!</p>
          <br />
          <p className="bank">ALPHA BANK</p>
          <p>IBAN: GR14 0140 3550 3550 0200 2002 342</p>
          <p>BIC: CRBAGRAA</p>
        </div>

        <div className="donation-box">
          <div className="donation-img-wrap">
            <img src={donationImg} alt="Donation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
