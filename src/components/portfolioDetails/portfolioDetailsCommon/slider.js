// Slider.jsx
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '../../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}



const options = {
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  margin: 20,
  loop: true,
  responsiveClass: true,
  nav: true,
  navClass: [`${styles['circle-btn']} ${styles['left-btn']}`, `${styles['circle-btn']} ${styles['right-btn']}`],
  dots: false,
  stagePadding: 0,
  responsive: {
    0: {
      items: 1.2,
    },
    400: {
      items: 1.5,
    },
    600: {
      items: 1.5,
    },
    700: {
      items: 2.2,
    },
    1000: {
      items: 2.2,
    },
    1600: {
      items: 2.5
    }
  },
};

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider = ({ slides }) => {
  useEffect(() => {
    AOS.init({
        duration: 2000,
        once: true, 
        offset: 0, 
    });
  }, []);

  return (
    <div data-aos="fade-up" className={styles['slider-part']}>
      <OwlCarousel className={`${styles['owlcarousel']} ${styles['review-owlcarousel']}`} {...options}>
        {slides.map((slide, index) => (
          <div key={index} className={styles['slider-card']}>
            <div className={styles['slider-img-part']}>
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />
            </div>
            <div className={styles['slider-text-part']}>
              <p className={styles['slider-text']}>
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Slider;
