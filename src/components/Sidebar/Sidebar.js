import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaCaretDown } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = (props) => {
  const { isOpen, toggle } = props;

  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [supportDropdown, setSupportDropdown] = useState(false);
  const [publicationsDropdown, setPublicationsDropdown] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown);
  };

  const toggleSupportDropdown = () => {
    setSupportDropdown(!supportDropdown);
  };

  const togglePublicationsDropdown = () => {
    setPublicationsDropdown(!publicationsDropdown);
  };

  return (
    <div
      className={isOpen ? 'sidebar-container active' : 'sidebar-container'}
      isOpen={isOpen}
    >
      <div className="icon" onClick={toggle}>
        <FaTimes />
      </div>

      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Link to="/home" className="sidebar-link" onClick={toggle}>
              Αρχικη
            </Link>
          </li>

          <li className="sidebar-item">
            <div className="sidebar-link" onClick={toggleAboutDropdown}>
              Σχετικα <FaCaretDown />
            </div>
            {aboutDropdown && (
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/who-we-are"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Ποιοι ειμαστε
                  </Link>
                </li>
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/why-center-f"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Γιατι Κεντρο Φ
                  </Link>
                </li>
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/our-team"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Η ομαδα μας
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar-item">
            <Link to="/actions" className="sidebar-link" onClick={toggle}>
              Δρασεις
            </Link>
          </li>

          <li className="sidebar-item">
            <div className="sidebar-link" onClick={toggleSupportDropdown}>
              Στηριξτε μας <FaCaretDown />
            </div>
            {supportDropdown && (
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/donation"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Δωρεα
                  </Link>
                </li>
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/volunteering"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Εθελοντισμος
                  </Link>
                </li>
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/practice"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Πρακτικη Ασκηση
                  </Link>
                </li>
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/donors"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Χρηματοδοτες
                  </Link>
                </li>
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/supporters"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Υποστηρικτες
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar-item">
            <div className="sidebar-link" onClick={togglePublicationsDropdown}>
              Δημοσιευσεις <FaCaretDown />
            </div>
            {publicationsDropdown && (
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/our-news"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Τα νεα μας
                  </Link>
                </li>
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/written-about-us"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Εγραψαν για εμας
                  </Link>
                </li>
                <li className="sidebar-dropdown-item">
                  <Link
                    to="/articles"
                    className="sidebar-dropdown-links"
                    onClick={toggle}
                  >
                    Αρθρογραφια
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar-item">
            <Link to="/contact" className="sidebar-link" onClick={toggle}>
              Επικοινωνια
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
