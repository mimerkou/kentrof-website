import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-banner">
          <div className="home-banner-heading">
            <h1>Κέντρο Φ</h1>
          </div>
          {/* <div className="home-banner-sub-heading">
          <h3>Όραμά μας</h3>
        </div> */}
          <div className="home-banner-text">
            <p>
              Όραμά μας: Καθολική και ισότιμη πρόσβαση στο δικαίωμα της ψυχικής
              υγείας για μια κοινωνία ψυχικά υγιής.
            </p>
          </div>
        </div>

        <div className="about">ABOUT US</div>
      </div>
    </>
  );
};

export default Home;
