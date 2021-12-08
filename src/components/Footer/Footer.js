import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Κεντρο Φ</h3>
        <p>
          Αστική μη κερδοσκοπική εταιρία που προωθεί το δικαιώμα στην παροχή
          ψυχολογικής υποστήριξης ευάλωτων ομάδων.
        </p>
        <ul className="social-icons">
          <li>
            <a
              href="https://www.facebook.com/centre.golden.ratio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kentro_f/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3>Η εταιρια</h3>
        <ul className="terms">
          <li>
            <a
              href="https://5d45f3d5-0b27-40a8-a20f-7f23399ee799.filesusr.com/ugd/5aa2aa_85ecb6da64714a8ba696e3fb461b1867.pdf?index=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Καταστατικό
            </a>
          </li>
          <li>
            <Link to="/privacy-policy">Πολιτική Απορρήτου</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3>Ωραριο Λειτουργιας</h3>
        <p>Δευτέρα - Παρασκευή</p>
        <p>09:00 πμ - 17:00 μμ</p>
      </div>

      <div>
        <h3>Επικοινωνια</h3>
        <ul className="contact-info">
          <li>
            <span>
              <FaMapMarkerAlt />
            </span>
            <span>Τιτάνων 23, Ελληνικό</span>
          </li>
          <li>
            <span>
              <FaEnvelope />
            </span>
            <span>
              <a href="mailto:info@kentrof.com">info@kentrof.com</a>
            </span>
          </li>
          <li>
            <span>
              <FaPhone />
            </span>
            <span>+30 698 19 01 769</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
