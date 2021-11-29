import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes, FaCaretDown } from 'react-icons/fa';
import './Sidebar.css';

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 30rem;
  height: 100%;
  background: #4d273f;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  /* opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; */
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="icon">
        <FaTimes />
      </div>

      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Link to="/home" className="sidebar-link">
              Αρχικη
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/about" className="sidebar-link">
              Σχετικα <FaCaretDown />
            </Link>
            <ul className="sidebar-dropdown">
              <li className="sidebar-dropdown-item">
                <Link to="/who-we-are" className="sidebar-dropdown-links">
                  Ποιοι ειμαστε
                </Link>
              </li>
              <li className="sidebar-dropdown-item">
                <Link to="/why-center-f" className="sidebar-dropdown-links">
                  Γιατι Κεντρο Φ
                </Link>
              </li>
              <li className="sidebar-dropdown-item">
                <Link to="/our-team" className="sidebar-dropdown-links">
                  Η ομαδα μας
                </Link>
              </li>
            </ul>
          </li>

          <li className="sidebar-item">
            <Link to="/actions" className="sidebar-link">
              Δρασεις
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/support-us" className="sidebar-link">
              Στηριξτε μας <FaCaretDown />
            </Link>
            <ul className="sidebar-dropdown">
              <li className="sidebar-dropdown-item">
                <Link to="/donation" className="sidebar-dropdown-links">
                  Δωρεα
                </Link>
              </li>
              <li className="sidebar-dropdown-item">
                <Link to="/volunteering" className="sidebar-dropdown-links">
                  Εθελοντισμος
                </Link>
              </li>
              <li className="sidebar-dropdown-item">
                <Link to="/practice" className="sidebar-dropdown-links">
                  Πρακτικη Ασκηση
                </Link>
              </li>
              <li className="sidebar-dropdown-item">
                <Link to="/donors" className="sidebar-dropdown-links">
                  Χρηματοδοτες
                </Link>
              </li>
              <li className="sidebar-dropdown-item">
                <Link to="/supporters" className="sidebar-dropdown-links">
                  Υποστηρικτες
                </Link>
              </li>
            </ul>
          </li>

          <li className="sidebar-item">
            <Link to="/publications" className="sidebar-link">
              Δημοσιευσεις <FaCaretDown />
            </Link>
            <ul className="sidebar-dropdown">
              <li className="sidebar-dropdown-item">
                <Link to="/our-news" className="sidebar-dropdown-links">
                  Τα νεα μας
                </Link>
              </li>
              <li className="sidebar-dropdown-item">
                <Link to="/written-about-us" className="sidebar-dropdown-links">
                  Εγραψαν για εμας
                </Link>
              </li>
              <li className="sidebar-dropdown-item">
                <Link to="/articles" className="sidebar-dropdown-links">
                  Αρθρογραφια
                </Link>
              </li>
            </ul>
          </li>

          <li className="sidebar-item">
            <Link to="/contact" className="sidebar-link">
              Επικοινωνια
            </Link>
          </li>
        </ul>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
