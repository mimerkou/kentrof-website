import React from 'react';
import Button from '../../components/Button/Button';
import homeAboutImg from '../../assets/kentro-f-03.jpg';
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
            <Button path="/who-we-are" darkBg={true}>
              Ποιοι είμαστε
            </Button>
          </div>
        </div>

        <div className="home-about-container">
          <div className="home-about-wrapper">
            <div className="home-about-box">
              <h2>Ψυχολογική υποστήριξη ευάλωτων ομάδων</h2>
              <p>
                Το Κέντρο Φ αποτελεί μια σύμπραξη νέων επιστημόνων της ψυχικής
                υγείας, ως απάντηση στην εθνική κρίση της οικονομίας και των
                αξιών, σε μια σθεναρή απόπειρα αναχαίτισης των αρνητικών της
                επιπτώσεων στον ψυχισμό της κοινωνίας μας.
              </p>
              <br />
              <p>
                Το "Φ" στα μαθηματικά, τις τέχνες και τη φύση συμβολίζει τη
                χρυσή τομή. Προς αναζήτηση, λοιπόν, μια χρυσής αναλογίας στην
                καθημερινότητά μας, προσφέρουμε ψυχο-κοινωνική στήριξη σε όποιον
                το έχει ανάγκη και αδυνατεί να στραφεί αλλού.
              </p>
              <div className="home-about-btn-wrap">
                <Button path="/why-center-f" darkBg={false}>
                  Περισσότερα
                </Button>
              </div>
            </div>

            <div className="home-about-box">
              <div className="home-about-img-wrap">
                <img src={homeAboutImg} alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
