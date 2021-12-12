import React from 'react';
import Button from '../../components/Button/Button';
import volunteerImg from '../../assets/volunteer.jpg';
import './Volunteering.css';

const Volunteering = () => {
  return (
    <div className="volunteering-container">
      <div className="volunteering-wrapper">
        <div className="volunteering-box">
          <h2>Εθελοντισμός</h2>
          <p>Στο Κέντρο Φ κάθε εθελοντική προσφορά είναι σημαντικότατη.</p>
          <br />
          <p>
            Θέλεις να στηρίξεις τον συνάνθρωπό σου και δεν ξέρεις πως;
            Επικοινώνησε μαζί μας.
          </p>
          <br />
          <p>
            Δείξε αλληλεγγύη και θα ανακαλύψεις τις πιο όμορφες πτυχές του
            εαυτού σου!
          </p>
          <div className="volunteering-btn-wrap">
            <Button path="/contact" darkBg={false}>
              Επικοινωνία
            </Button>
          </div>
        </div>

        <div className="volunteering-box">
          <div className="volunteering-img-wrap">
            <img src={volunteerImg} alt="Volunteering" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
