import wordWellStyle from '../../styles/portfolioDetails/wordWell.module.scss'
import React, { useEffect } from 'react';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import data from '../../resources/portfolioDetails.json';
import 'owl.carousel/dist/assets/owl.carousel.css';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import DesignProcess from './portfolioDetailsCommon/designProcess';
import AOS from 'aos';
import 'aos/dist/aos.css';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

export default function WordWell() {

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, 
      offset: 0, 
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
    <div className={portfolioDetailsCommon.mainSection}>

      <div className={wordWellStyle.bannerSection}>
        <div className="container">
          <div className={`${wordWellStyle.sectionContent}`}>
            <h3 data-aos="slide-left" className={portfolioDetailsCommon.bannerPrimaryText}>Comprehensive Home Renovations <span className={wordWellStyle.mainheadingSpan}>Transforming spaces with expert.</span>
            </h3>
            <div data-aos="flip-up" className={wordWellStyle.bannerImg}>
              <div className={wordWellStyle.bannerInnerImg}>
              </div>
            </div>
            <p className={portfolioDetailsCommon.bannerSecondaryText}>Transforming Spaces with Expert Craftsmanship and Innovative Designs: Your one-stop solution for home renovations, including whole house makeovers, bathroom and kitchen remodels, extensions, carpentry, fencing, land leveling (civils), and carpentry repairs.</p>
          </div>
        </div>
      </div>


      {/* sliderSection */}

      <section className={wordWellStyle['sliderSection']}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
            Innovative design solution for Website: <br /><span className={wordWellStyle.mainheadingSpan}>WordWell </span>Showcase
          </h3>
        </div>
        <div data-aos="slide-up" className="container">
          <OwlCarousel className={`${wordWellStyle['owlcarousel']} ${wordWellStyle['review-owlcarousel']}`} navText={["", ""]}  {...options}>
            <div className={`${wordWellStyle['slider-item']}`}>
              <div className={wordWellStyle['imgPart']}>
                <img
                  src='/work/2024/wordWell/sliderImg1.svg'
                  alt="Animated"
                />
              </div>
              <div>
                <h6>
                  WordWell is a simple yet powerful platform that enhances your writing with grammar checks, vocabulary suggestions, and formatting tools. It provides real-time feedback and allows users to save and track progress, making writing more efficient and polished. Perfect for essays, business documents, or creative content.
                </h6>
              </div>
            </div>
            <div className={`${wordWellStyle['slider-item']}`}>
              <div className={wordWellStyle['imgPart']}>
                <img
                  src='/work/2024/wordWell/sliderImg2.svg'
                  alt="Animated"
                />
              </div>
              <div>
                <h6>
                  WordWell combines human-crafted website copy, AI-generated text, and smart editing tools to make writing easier. With features like grammar checks, real-time feedback, and content generation, it streamlines the process of crafting polished, professional content effortlessly. Ideal for users looking for seamless and efficient text improvement.
                </h6>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      {/* DesignProcess */}
      <DesignProcess
        description="At WordWell, our design process starts with detailed research and clear objective-setting. We then move into brainstorming and prototyping, followed by user testing to gather feedback. Based on these insights, we refine the designs and collaborate closely with developers to ensure a seamless launch and continuous improvements for the best user experience."
      />
      <TechnologySection data={data.techdata.jv} />
      {/* color pallet */}
      <div className={`${wordWellStyle['colorPalletContainer']}`}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
            Color Palette presentation for
            <br /><span className={wordWellStyle.mainheadingSpan}>WordWell</span> Design
          </h3>
          <p>The rich, vibrant green was incorporated into the design to elevate visual impact while maintaining a professional look. This color choice reinforces a strong and cohesive brand identity, enhancing user engagement with its bold and unique presence.</p>

          <div className={portfolioDetailsCommon.colorPalette} data-aos="flip-down">
            <div className={`${portfolioDetailsCommon.colorPalette1} ${wordWellStyle.colorPalette1}`}><div className={`${portfolioDetailsCommon.imageContainer} ${wordWellStyle.imageContainer}`}><img src="/work/2024/wordWell/colorPalette1.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette2} ${wordWellStyle.colorPalette2}`}><div className={`${portfolioDetailsCommon.imageContainer} ${wordWellStyle.imageContainer}`}><img src="/work/2024/wordWell/colorPalette2.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette3} ${wordWellStyle.colorPalette3}`}><div className={`${portfolioDetailsCommon.imageContainer} ${wordWellStyle.imageContainer}`}><img src="/work/2024/wordWell/colorPalette3.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette4} ${wordWellStyle.colorPalette4}`}><div className={`${portfolioDetailsCommon.imageContainer} ${wordWellStyle.imageContainer}`}><img src="/work/2024/wordWell/colorPalette4.png" alt="colorPalette" /></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}










