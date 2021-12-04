import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img01 from '../../../assets/kentro-f-04.jpg';
import img02 from '../../../assets/kentro-f-05.jpg';
import img03 from '../../../assets/kentro-f-06.jpg';
import img04 from '../../../assets/kentro-f-07.jpg';
import img05 from '../../../assets/kentro-f-08.jpg';
import './HomeTestimonials.css';

const HomeTestimonials = () => {
  return (
    <div className="testimonials">
      <h2>Είπαν για εμάς</h2>

      <Carousel
        infiniteLoop
        autoPlay
        interval={7000}
        showThumbs={false}
        swipeable={true}
        stopOnHover={false}
        // dynamicHeight={true}
        className="main-slide"
      >
        <div className="image">
          <img src={img01} alt="Carousel Slide 1" />
          <div className="quote">
            <cite>"Η βοήθεια σας είναι μια σανίδα σωτήριας για μένα."</cite>
            <p>Aντωνία Κ., 65 Ετών</p>
          </div>
        </div>

        <div className="image">
          <img src={img02} alt="Carousel Slide 2" />
          <div className="quote">
            <cite>"Είστε μια ηλιαχτίδα στη ζωή μου."</cite>
            <p>Γιάννης Μ., 67 Ετών</p>
          </div>
        </div>

        <div className="image">
          <img src={img03} alt="Carousel Slide 3" />
          <div className="quote">
            <cite>
              "Αντιμετώπισα το άγχος μου και νιώθω ότι μπορώ να ανταπεξέλθω και
              στις πιο δύσκολες συνθήκες."
            </cite>
            <p>Ελευθερία Ξ., 74 Ετών</p>
          </div>
        </div>

        <div className="image">
          <img src={img04} alt="Carousel Slide 4" />
          <div className="quote">
            <cite>
              "Μέσα από τις συνεδρίες μας, η ζωή μου ξαναμπήκε σε τάξη."
            </cite>
            <p>Ηλίας Τ., 66 Ετών</p>
          </div>
        </div>

        <div className="image">
          <img src={img05} alt="Carousel Slide 5" />
          <div className="quote">
            <cite>
              "Είχα μαραζώσει και δεν χαμογελούσα. Εσείς με βοηθήσατε να ξαναβρώ
              την χαρά."
            </cite>
            <p>Βασιλική Λ., 77 Ετών</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeTestimonials;
