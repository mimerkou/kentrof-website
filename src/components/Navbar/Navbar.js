import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">ΚΕΝΤΡΟ Φ</div>

        <ul>
          <li>
            <a href="#">ΑΡΧΙΚΗ</a>
          </li>

          <li>
            <a href="#">ΣΧΕΤΙΚΑ</a>
            <ul>
              <li>
                <a href="#">ΠΟΙΟΙ ΕΙΜΑΣΤΕ</a>
              </li>
              <li>
                <a href="#">ΓΙΑΤΙ ΚΕΝΤΡΟ Φ</a>
              </li>
              <li>
                <a href="#">Η ΟΜΑΔΑ ΜΑΣ</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">ΔΡΑΣΕΙΣ</a>
          </li>

          <li>
            <a href="#">ΣΤΗΡΙΞΤΕ ΜΑΣ</a>
            <ul>
              <li>
                <a href="#">ΔΩΡΕΑ</a>
              </li>
              <li>
                <a href="#">ΕΘΕΛΟΝΤΙΣΜΟΣ</a>
              </li>
              <li>
                <a href="#">ΠΡΑΚΤΙΚΗ ΑΣΚΗΣΗ</a>
              </li>
              <li>
                <a href="#">ΧΡΗΜΑΤΟΔΟΤΕΣ</a>
              </li>
              <li>
                <a href="#">ΥΠΟΣΤΗΡΙΚΤΕΣ</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">ΔΗΜΟΣΙΕΥΣΕΙΣ</a>
            <ul>
              <li>
                <a href="#">ΤΑ ΝΕΑ ΜΑΣ</a>
              </li>
              <li>
                <a href="#">ΕΓΡΑΨΑΝ ΓΙΑ ΕΜΑΣ</a>
              </li>
              <li>
                <a href="#">ΑΡΘΡΟΓΡΑΦΙΑ</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">ΕΠΙΚΟΙΝΩΝΙΑ</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
