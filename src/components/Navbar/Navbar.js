// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = (props) => {
//   const [click, setClick] = useState(false);

//   const clickHandler = () => {
//     setClick(!click);
//   };

//   const closeMobileMenu = () => {
//     setClick(false);
//   };

//   return (
//     <>
//       <nav className="main-nav">
//         <div className="logo">ΚΕΝΤΡΟ Φ</div>

//         <label htmlFor="btn" className="icon" onClick={clickHandler}>
//           <span>
//             <i className={click ? `fa fa-times` : `fa fa-bars`}></i>
//           </span>
//         </label>
//         <input type="checkbox" id="btn" />

//         <ul className="nav-menu">
//           <li onClick={closeMobileMenu}>
//             <a href="#">ΑΡΧΙΚΗ</a>
//           </li>

//           <li>
//             <label htmlFor="btn-1" className="show">
//               ΣΧΕΤΙΚΑ +
//             </label>
//             <a href="#">ΣΧΕΤΙΚΑ</a>
//             <input type="checkbox" id="btn-1" />
//             <ul>
//               <li>
//                 <a href="#">ΠΟΙΟΙ ΕΙΜΑΣΤΕ</a>
//               </li>
//               <li>
//                 <a href="#">ΓΙΑΤΙ ΚΕΝΤΡΟ Φ</a>
//               </li>
//               <li>
//                 <a href="#">Η ΟΜΑΔΑ ΜΑΣ</a>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <a href="#">ΔΡΑΣΕΙΣ</a>
//           </li>

//           <li>
//             <label htmlFor="btn-2" className="show">
//               ΣΤΗΡΙΞΤΕ ΜΑΣ +
//             </label>
//             <a href="#">ΣΤΗΡΙΞΤΕ ΜΑΣ</a>
//             <input type="checkbox" id="btn-2" />
//             <ul>
//               <li>
//                 <a href="#">ΔΩΡΕΑ</a>
//               </li>
//               <li>
//                 <a href="#">ΕΘΕΛΟΝΤΙΣΜΟΣ</a>
//               </li>
//               <li>
//                 <a href="#">ΠΡΑΚΤΙΚΗ ΑΣΚΗΣΗ</a>
//               </li>
//               <li>
//                 <a href="#">ΧΡΗΜΑΤΟΔΟΤΕΣ</a>
//               </li>
//               <li>
//                 <a href="#">ΥΠΟΣΤΗΡΙΚΤΕΣ</a>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <label htmlFor="btn-3" className="show">
//               ΔΗΜΟΣΙΕΥΣΕΙΣ +
//             </label>
//             <a href="#">ΔΗΜΟΣΙΕΥΣΕΙΣ</a>
//             <input type="checkbox" id="btn-3" />
//             <ul>
//               <li>
//                 <a href="#">ΤΑ ΝΕΑ ΜΑΣ</a>
//               </li>
//               <li>
//                 <a href="#">ΕΓΡΑΨΑΝ ΓΙΑ ΕΜΑΣ</a>
//               </li>
//               <li>
//                 <a href="#">ΑΡΘΡΟΓΡΑΦΙΑ</a>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <a href="#">ΕΠΙΚΟΙΝΩΝΙΑ</a>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/kentrof-logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/home" className="navbar-logo">
          {/* ΚΕΝΤΡΟ Φ */}
          <img src={logo} alt="Logo" />
        </Link>

        <div className="menu-icon" onClick={clickHandler}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              ΑΡΧΙΚΗ
            </Link>
          </li>

          <li className="nav-item">
            <label htmlFor="btn-1" className="show">
              ΣΧΕΤΙΚΑ +
            </label>
            <Link to="/about">ΣΧΕΤΙΚΑ</Link>
            <input type="checkbox" id="btn-1" />
            <ul className="dropdown">
              <li className="dropdown-item">
                <Link to="/whoweare" onClick={closeMobileMenu}>
                  ΠΟΙΟΙ ΕΙΜΑΣΤΕ
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/whykentrof" onClick={closeMobileMenu}>
                  ΓΙΑΤΙ ΚΕΝΤΡΟ Φ
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/ourteam" onClick={closeMobileMenu}>
                  Η ΟΜΑΔΑ ΜΑΣ
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/actions" className="nav-links" onClick={closeMobileMenu}>
              ΔΡΑΣΕΙΣ
            </Link>
          </li>

          <li className="nav-item">
            <label htmlFor="btn-2" className="show">
              ΣΤΗΡΙΞΤΕ ΜΑΣ +
            </label>
            <Link to="/support">ΣΤΗΡΙΞΤΕ ΜΑΣ</Link>
            <input type="checkbox" id="btn-2" />
            <ul className="dropdown">
              <li className="dropdown-item">
                <Link to="/donation" onClick={closeMobileMenu}>
                  ΔΩΡΕΑ
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/volunteering" onClick={closeMobileMenu}>
                  ΕΘΕΛΟΝΤΙΣΜΟΣ
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/practice" onClick={closeMobileMenu}>
                  ΠΡΑΚΤΙΚΗ ΑΣΚΗΣΗ
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/donors" onClick={closeMobileMenu}>
                  ΧΡΗΜΑΤΟΔΟΤΕΣ
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/supporters" onClick={closeMobileMenu}>
                  ΥΠΟΣΤΗΡΙΚΤΕΣ
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <label htmlFor="btn-2" className="show">
              ΔΗΜΟΣΙΕΥΣΕΙΣ +
            </label>
            <Link to="/publications">ΣΤΗΡΙΞΤΕ ΜΑΣ</Link>
            <input type="checkbox" id="btn-2" />
            <ul className="dropdown">
              <li className="dropdown-item">
                <Link to="/ournews" onClick={closeMobileMenu}>
                  ΤΑ ΝΕΑ ΜΑΣ
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/writtenaboutus" onClick={closeMobileMenu}>
                  ΕΓΡΑΨΑΝ ΓΙΑ ΕΜΑΣ
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/articles" onClick={closeMobileMenu}>
                  ΑΡΘΡΟΓΡΑΦΙΑ
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              ΕΠΙΚΟΙΝΩΝΙΑ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
