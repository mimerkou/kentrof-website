import React from 'react';
import Button from '../../Button/Button';
import './HomeBanner.css';

const HomeBanner = () => {
  return (
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
        <Button path="/who-we-are" darkBg={true}>
          Ποιοι είμαστε
        </Button>
      </div>
    </div>
  );
};

export default HomeBanner;
