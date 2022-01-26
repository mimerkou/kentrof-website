import React from 'react';
import supporter01 from '../../assets/supporters01.jpg';
import supporter02 from '../../assets/supporters02.jpg';
import supporter03 from '../../assets/supporters03.jpg';
import supporter04 from '../../assets/supporters04.jpg';
import supporter05 from '../../assets/supporters05.jpg';
import supporter06 from '../../assets/supporters06.jpg';
import supporter07 from '../../assets/supporters07.jpg';
import supporter08 from '../../assets/supporters08.jpg';
import supporter09 from '../../assets/supporters09.jpg';
import './Supporters.css';

const Supporters = () => {
  return (
    <div className="supporters-container">
      <h2>Υποστηρικτές</h2>

      <div className="supporters-wrapper">
        <div className="supporters-img">
          <img
            src={supporter01}
            alt="Δημοτική Κοινωφελής Επιχείρηση Φιλοθέης Ψυχικού Logo"
          />
        </div>
        <div className="supporters-img">
          <img src={supporter02} alt="Δήμος Μεταμόρφωσης Logo" />
        </div>
        <div className="supporters-img">
          <img src={supporter03} alt="Δήμος Αιγάλεω Logo" />
        </div>

        <div className="supporters-img">
          <img src={supporter04} alt="Δήμος Αγίων Αναργύρων - Καματερού Logo" />
        </div>
        <div className="supporters-img">
          <img src={supporter05} alt="Δήμος Αγίας Παρασκευής Logo" />
        </div>
        <div className="supporters-img">
          <img src={supporter06} alt="Δήμος Παπάγου - Χολαργού Logo" />
        </div>

        <div className="supporters-img">
          <img src={supporter07} alt="Δήμος Γαλατσίου Logo" />
        </div>
        <div className="supporters-img">
          <img src={supporter08} alt="Δήμος Περάματος Logo" />
        </div>
        <div className="supporters-img">
          <img src={supporter09} alt="Δήμος Νέας Ιωνίας Logo" />
        </div>
      </div>
    </div>
  );
};

export default Supporters;
