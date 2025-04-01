import React, { useEffect } from 'react'
import portfolioDetailsCommon from '../../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

export default function ShowcaseSlider({ slides }) {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 1600,
      easing: 'ease-in-out',
      once: true,
    });
  }, [])
  const options = {
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: false,
    margin: 20,
    loop: true,
    rtl: true,
    responsiveClass: true,
    autoWidth: false,
    nav: true,
    dots: false,
    stagePadding: 0,
    responsive: {
      0: { items: 1 },
      700: { items: 1 },
      1200: { items: 1 },
      1800: { items: 1 }
    },
  };
  return (
    <section className={portfolioDetailsCommon['showcaseSliderSection']}>
      <div data-aos="slide-up" className="container">
        <OwlCarousel className={`${portfolioDetailsCommon['owlcarousel']} ${portfolioDetailsCommon['review-owlcarousel']}`} navText={["", ""]}  {...options}>
          {slides.map((item, index) => (
            <div key={index} className={`${portfolioDetailsCommon['slider-item']}`}>
              <div className={portfolioDetailsCommon['imgPart']}>
                <img
                  src={item.image}
                  alt={`showcase img ${index + 1}`}
                />
              </div>
              <div>
                <h6>
                  {item.text}
                </h6>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  )
}
