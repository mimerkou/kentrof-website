import React from 'react';
import Button from '../../Button/Button';
import bannerImg from '../../../assets/kentro-f-02.jpg';
import './HomeBanner.css';

const HomeBanner = () => {
  return (
    <div className="home-banner-container">
      {/* <div className="home-banner-heading">
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
      </div> */}

      <div className="home-banner-wrapper">
        <div className="home-banner-box">
          <h1>Κέντρο Φ</h1>
          <p>
            Όραμά μας: Καθολική και ισότιμη πρόσβαση στο δικαίωμα της ψυχικής
            υγείας για μια κοινωνία ψυχικά υγιής.
          </p>
          <br />
          <div className="home-banner-btn-wrap">
            <Button path="/who-we-are" darkBg={false}>
              Ποιοι είμαστε
            </Button>
          </div>
        </div>

        <div className="home-banner-box">
          <div className="home-banner-img">
            <img src={bannerImg} alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
