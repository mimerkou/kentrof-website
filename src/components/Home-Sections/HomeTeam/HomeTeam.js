import React from 'react';
import Button from '../../Button/Button';
import toliosPhoto from '../../../assets/team-tolios.jpg';
import stavropoulouPhoto from '../../../assets/team-stavropoulou.jpg';
import kourikaPhoto from '../../../assets/team-kourika.jpg';
import platanitiPhoto from '../../../assets/team-plataniti.jpg';
import './HomeTeam.css';

const HomeTeam = () => {
  return (
    <div className="team-container">
      <h2>Η Ομάδα μας</h2>

      <div className="team-wrapper">
        <div className="team-info">
          <img src={toliosPhoto} alt="Αθανάσιος Τόλιος" />
          <h4>Αθανάσιος Τόλιος</h4>
          <p>MSc Κλινικής Ψυχολογίας</p>
        </div>
        <div className="team-info">
          <img src={stavropoulouPhoto} alt="Μάρθα Σταυροπούλου" />
          <h4>Μάρθα Σταυροπούλου</h4>
          <p>Κοινωνική Λειτουργός</p>
        </div>
        <div className="team-info">
          <img src={kourikaPhoto} alt="Μαριέττα Κουρίκα" />
          <h4>Μαριέττα Κουρίκα</h4>
          <p>Ψυχολόγος</p>
        </div>
        <div className="team-info">
          <img src={platanitiPhoto} alt="Παναγιώτα Πλατανίτη" />
          <h4>Παναγιώτα Πλατανίτη</h4>
          <p>Ψυχολόγος</p>
        </div>
      </div>

      <div className="team-btn-wrap">
        <Button path="/our-team" darkBg={false}>
          Βιογραφικά
        </Button>
      </div>
    </div>
  );
};

export default HomeTeam;
