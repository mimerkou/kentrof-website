import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';
import './Navbar.css';

const Navbar = (props) => {
  const { toggle } = props;

  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [supportDropdown, setSupportDropdown] = useState(false);
  const [publicationsDropdown, setPublicationsDropdown] = useState(false);

  const aboutMouseEnterHandler = () => {
    setAboutDropdown(true);
  };

  const aboutMouseLeaveHandler = () => {
    setAboutDropdown(false);
  };

  const supportMouseEnterHandler = () => {
    setSupportDropdown(true);
  };

  const supportMouseLeaveHandler = () => {
    setSupportDropdown(false);
  };

  const publicationsMouseEnterHandler = () => {
    setPublicationsDropdown(true);
  };

  const publicationsMouseLeaveHandler = () => {
    setPublicationsDropdown(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="navbar-container">
          <Link to="/home" className="nav-logo">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="mobile-icon" onClick={toggle}>
            <FaBars />
          </div>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/home" className="nav-links">
                Αρχικη
              </Link>
            </li>

            <li
              className="nav-item"
              onMouseEnter={aboutMouseEnterHandler}
              onMouseLeave={aboutMouseLeaveHandler}
            >
              <Link to="/about" className="nav-links">
                Σχετικα <FaCaretDown />
              </Link>
              {aboutDropdown && (
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link to="/who-we-are" className="dropdown-links">
                      Ποιοι ειμαστε
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/why-center-f" className="dropdown-links">
                      Γιατι Κεντρο Φ
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/our-team" className="dropdown-links">
                      Η ομαδα μας
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <Link to="/actions" className="nav-links">
                Δρασεις
              </Link>
            </li>

            <li
              className="nav-item"
              onMouseEnter={supportMouseEnterHandler}
              onMouseLeave={supportMouseLeaveHandler}
            >
              <Link to="/support-us" className="nav-links">
                Στηριξτε μας <FaCaretDown />
              </Link>
              {supportDropdown && (
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link to="/donation" className="dropdown-links">
                      Δωρεα
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/volunteering" className="dropdown-links">
                      Εθελοντισμος
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/practice" className="dropdown-links">
                      Πρακτικη Ασκηση
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/donors" className="dropdown-links">
                      Χρηματοδοτες
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/supporters" className="dropdown-links">
                      Υποστηρικτες
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="nav-item"
              onMouseEnter={publicationsMouseEnterHandler}
              onMouseLeave={publicationsMouseLeaveHandler}
            >
              <Link to="/publications" className="nav-links">
                Δημοσιευσεις <FaCaretDown />
              </Link>
              {publicationsDropdown && (
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link to="/our-news" className="dropdown-links">
                      Τα νεα μας
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/written-about-us" className="dropdown-links">
                      Εγραψαν για εμας
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/articles" className="dropdown-links">
                      Αρθρογραφια
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Επικοινωνια
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
