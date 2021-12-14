import React from 'react';
import Button from '../../Button/Button';
import homeAboutImg from '../../../assets/kentro-f-01.jpg';
import './HomeAbout.css';

const HomeAbout = () => {
  return (
    <div className="home-about-container">
      <div className="home-about-wrapper">
        <div className="home-about-box box1">
          <div className="home-about-img-wrap">
            <img src={homeAboutImg} alt="About" />
          </div>
        </div>

        <div className="home-about-box box2">
          <h2>Ψυχολογική υποστήριξη ευάλωτων ομάδων</h2>
          <p>
            Το Κέντρο Φ αποτελεί μια σύμπραξη νέων επιστημόνων της ψυχικής
            υγείας, ως απάντηση στην εθνική κρίση της οικονομίας και των αξιών,
            σε μια σθεναρή απόπειρα αναχαίτισης των αρνητικών της επιπτώσεων
            στον ψυχισμό της κοινωνίας μας.
          </p>
          <br />
          <p>
            Το "Φ" στα μαθηματικά, τις τέχνες και τη φύση συμβολίζει τη χρυσή
            τομή. Προς αναζήτηση, λοιπόν, μια χρυσής αναλογίας στην
            καθημερινότητά μας, προσφέρουμε ψυχο-κοινωνική στήριξη σε όποιον το
            έχει ανάγκη και αδυνατεί να στραφεί αλλού.
          </p>
          <div className="home-about-btn-wrap">
            <Button path="/why-center-f" darkBg={false}>
              Περισσότερα
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
