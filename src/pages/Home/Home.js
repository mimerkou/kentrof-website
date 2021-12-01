import React from 'react';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-banner">
          <div className="home-banner-heading">
            <h1>Κέντρο Φ</h1>
          </div>
          <div className="home-banner-text">
            <p>
              Όραμά μας: Καθολική και ισότιμη πρόσβαση στο δικαίωμα της ψυχικής
              υγείας για μια κοινωνία ψυχικά υγιής.
            </p>
          </div>
          <div className="home-btn-wrapper">
            <Button path="/who-we-are">Ποιοι είμαστε</Button>
          </div>
        </div>

        <div className="home-about">
          <div className="home-about-text">
            Παροχή ψυχολογικής υποστήριξης ευάλωτων ομάδων
          </div>
          <div className="home-about-img">IMG</div>
        </div>
      </div>
    </>
  );
};

export default Home;
