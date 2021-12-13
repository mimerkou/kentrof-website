import React from 'react';
import Button from '../../components/Button/Button';
import practiceImg from '../../assets/kentro-f-12.jpg';
import './Practice.css';

const Practice = () => {
  return (
    <div className="practice-container">
      <div className="practice-wrapper">
        <div className="practice-box">
          <h2>Πρακτική Άσκηση</h2>
          <p>
            Είσαι νέος επαγγελματίας υγείας και θέλεις να αποκτήσεις πρακτική
            εμπειρία;
          </p>
          <br />
          <p>Έλα σε επαφή μαζί μας!</p>

          <div className="practice-btn-wrapper">
            <Button path="/contact" darkBg={false}>
              Επικοινωνία
            </Button>
          </div>
        </div>

        <div className="practice-box">
          <div className="practice-img-wrap">
            <img src={practiceImg} alt="Practice" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
