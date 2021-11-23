import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="main-nav">
        <div className="logo">ΚΕΝΤΡΟ Φ</div>

        <label htmlFor="btn" className="icon" onClick={toggle}>
          <span>
            <i className={isOpen ? `fa fa-times` : `fa fa-bars`}></i>
          </span>
        </label>
        <input type="checkbox" id="btn" />

        <ul>
          <li>
            <a href="#">ΑΡΧΙΚΗ</a>
          </li>

          <li>
            <label htmlFor="btn-1" className="show">
              ΣΧΕΤΙΚΑ +
            </label>
            <a href="#">ΣΧΕΤΙΚΑ</a>
            <input type="checkbox" id="btn-1" />
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
            <label htmlFor="btn-2" className="show">
              ΣΤΗΡΙΞΤΕ ΜΑΣ +
            </label>
            <a href="#">ΣΤΗΡΙΞΤΕ ΜΑΣ</a>
            <input type="checkbox" id="btn-2" />
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
            <label htmlFor="btn-3" className="show">
              ΔΗΜΟΣΙΕΥΣΕΙΣ +
            </label>
            <a href="#">ΔΗΜΟΣΙΕΥΣΕΙΣ</a>
            <input type="checkbox" id="btn-3" />
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
