import React from 'react';
import Button from '../../Button/Button';
import './HomeActions.css';

const HomeActions = () => {
  return (
    <div className="actions-container">
      <h2>Οι Δράσεις μας</h2>
      <p className="actions-details">
        Παρακάτω μπορείτε να δείτε συνοπτικά τις δράσεις και τα προγράμματα που
        υλοποιεί το Κέντρο Φ.
      </p>

      <div className="actions-box">
        <div className="card">
          <div className="card-content">
            <h4>Πρόγραμμα "Στηρίζω Εσένα που Στηρίζεις"</h4>
            <p>
              Στόχος του συγκεκριμένου προγράμματος είναι η ψυχολογική
              υποστήριξη του προσωπικού των μονάδων φροντίδας ηλικιωμένων και
              του προγράμματος "Βοήθεια στο Σπίτι".
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
        <div className="card">
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
              Η πρώτη μας ουσιαστική δράση ξεκίνησε το Σεπτέμβριο του 2016 με
              πρώτους αποδέκτες των υπηρεσιών μας τους ανέργους.
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
  );
};

export default HomeActions;
