import React from 'react';
import Button from '../../components/Button/Button';
import homeAboutImg from '../../assets/kentro-f-03.jpg';
import toliosPhoto from '../../assets/team-tolios.jpg';
import stavropoulouPhoto from '../../assets/team-stavropoulou.jpg';
import kourikaPhoto from '../../assets/team-kourika.jpg';
import platanitiPhoto from '../../assets/team-plataniti.jpg';
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

        <div className="actions-container">
          <h2>Οι Δράσεις μας</h2>
          <p className="actions-details">
            Παρακάτω μπορείτε να δείτε συνοπτικά τις δράσεις και τα προγράμματα
            που υλοποιεί το Κέντρο Φ.
          </p>

          <div className="actions-box">
            <div className="card">
              <div className="card-content">
                <h4>Πρόγραμμα "Στηρίζω Εσένα που Στηρίζεις"</h4>
                <p>
                  Στόχος του συγκεκριμένου προγράμματος είναι η ψυχολογική
                  υποστήριξη του προσωπικού των μονάδων φροντίδας ηλικιωμένων
                  και του προγράμματος "Βοήθεια στο Σπίτι".
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h4>Πρόγραμμα "ΖΩ την Τρίτη Ηλικία. Χωρίς Φόβο."</h4>
                <p>
                  Η δράση μας είναι προσαρμοσμένες στις νέες συνθήκες προστασίας
                  κατά του covid-19, παρέχοντας δωρεάν τηλεφωνική ψυχολογική
                  υποστήριξη στην Τρίτη Ηλικία.
                </p>
              </div>
            </div>
          </div>

          <div className="actions-box">
            <div className="card card-3">
              <div className="card-content">
                <h4>
                  Πιλοτικό πρόγραμμα ενημέρωσης και ψυχολογικής υποστήριξης των
                  ηλικιωμένων σε Κ.Α.Π.Η.
                </h4>
                <p>
                  Ψυχολογική υποστήριξη του προσωπικού των μονάδων φροντίδας
                  ηλικιωμένων και του προγράμματος "Βοήθεια στο Σπίτι".
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h4>Πρόγραμμα "ΖΩ την Τρίτη Ηλικία. Χωρίς Φόβο."</h4>
                <p>
                  Η πρώτη μας ουσιαστική δράση ξεκίνησε το Σεπτέμβριο του 2016
                  με πρώτους αποδέκτες των υπηρεσιών μας τους ανέργους.
                </p>
              </div>
            </div>
          </div>

          <div className="actions-btn-wrap">
            <Button path="/actions" darkBg={false}>
              Περισσότερα
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
