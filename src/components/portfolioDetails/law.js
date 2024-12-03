import lawStyle from '../../styles/portfolioDetails/law.module.scss'
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
import ShowcaseSlider from './portfolioDetailsCommon/showcaseSlider';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

export default function Law() {

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
    <div className={portfolioDetailsCommon.mainSection}>

      <div className={lawStyle.bannerSection}>
        <div className="container">
          <div className={`${lawStyle.sectionContent}`}>
            <h3 data-aos="slide-left" className={portfolioDetailsCommon.bannerPrimaryText}>Your Advocate for Justice and Fairness: <br />
              <span className={lawStyle.mainheadingSpan}>The Estes Law Firm</span>
            </h3>
            <div data-aos="flip-up" className={lawStyle.bannerImg}>
              <div className={lawStyle.bannerInnerImg}>
              </div>
            </div>
            <p className={portfolioDetailsCommon.bannerSecondaryText}>At The Estes Law Firm, we are committed to providing personalized legal services with compassion and expertise. Our skilled attorneys are dedicated to protecting your rights and guiding you through every step of the legal process. Whether you&apos;re facing a personal injury case or need legal advice, we work tirelessly to achieve the best possible outcome for you. Trust us to be your advocate in the pursuit of justice.</p>
          </div>
        </div>
      </div>




      {/* DesignProcess */}
      <DesignProcess
        description="At The Estes Law Firm, our design process starts with understanding your specific needs and goals. We engage in thorough research and planning to set clear objectives. Our team then moves to brainstorming and creating initial prototypes. We gather feedback through user testing to refine and enhance the designs. Collaborating closely with developers ensures a seamless implementation, and we continue to make improvements to deliver an outstanding experience for our clients."
      />
      <TechnologySection data={data.techdata.jv} />
      {/* color pallet */}
      <div className={`${lawStyle['colorPalletContainer']}`}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
            Color Palette presentation for
            <br /><span className={lawStyle.mainheadingSpan}>The Estes Law Firm</span>
          </h3>
          <p>For our law firm&apos;s design, we use a refined color palette to enhance professionalism and readability. A deep orange highlights key elements, while a light cream provides a clean background. Slate gray is used for text and borders, and medium gray complements for secondary text and dividers. This combination ensures a sophisticated and user-friendly experience.</p>

          <div data-aos="flip-down" className={portfolioDetailsCommon.colorPalette} >
            <div className={`${portfolioDetailsCommon.colorPalette1} ${lawStyle.colorPalette1}`}><div className={`${portfolioDetailsCommon.imageContainer} ${lawStyle.imageContainer}`}><img src="/work/2024/law/colorPalette1.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette2} ${lawStyle.colorPalette2}`}><div className={`${portfolioDetailsCommon.imageContainer} ${lawStyle.imageContainer}`}><img src="/work/2024/law/colorPalette2.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette3} ${lawStyle.colorPalette3}`}><div className={`${portfolioDetailsCommon.imageContainer} ${lawStyle.imageContainer}`}><img src="/work/2024/law/colorPalette3.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette4} ${lawStyle.colorPalette4}`}><div className={`${portfolioDetailsCommon.imageContainer} ${lawStyle.imageContainer}`}><img src="/work/2024/law/colorPalette4.png" alt="colorPalette" /></div></div>
          </div>
        </div>
      </div>



      {/* sliderSection */}

      <section className={lawStyle['sliderSection']}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
            Innovative design solution for Website: <br /><span className={lawStyle.mainheadingSpan}>The Estes Law Firm </span>Showcase
          </h3>
        </div>
        <ShowcaseSlider slides={data.ShowCaseData.law} />
      </section>
    </div>
  );
}










