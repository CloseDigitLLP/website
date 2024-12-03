import mvinTageStyle from '../../styles/portfolioDetails/mvinTage.module.scss'
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

export default function MvinTage() {

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

      <div className={mvinTageStyle.bannerSection}>
        <div className="container">
          <div className={`${mvinTageStyle.sectionContent}`}>
            <h3 data-aos="slide-left" className={portfolioDetailsCommon.bannerPrimaryText}>Discover Your Unique Style with:
             <span className={mvinTageStyle.mainheadingSpan}> MVINTAGE</span>
            </h3>
            <div data-aos="flip-up" className={mvinTageStyle.bannerImg}>
              <div className={mvinTageStyle.bannerInnerImg}>
              </div>
            </div>
            <p className={portfolioDetailsCommon.bannerSecondaryText}>We&apos;ve completely redesigned the MVINTAGE jewelry website to offer a seamless shopping experience. With a focus on simplicity, adding items to your cart is now easier than ever. Our new, unique header design ensures that products are easy to spot, making it effortless to find your perfect piece. Explore our collection with a user-friendly interface that prioritizes both elegance and functionality. </p>
          </div>
        </div>
      </div>


   

      {/* DesignProcess */}
      <DesignProcess
        description="At MVINTAGE, our design process begins with understanding your unique jewelry preferences and goals. We conduct thorough research and planning to ensure a clear direction. From there, our team moves into brainstorming and creating initial prototypes. We gather feedback through user testing to refine and perfect our designs. By collaborating closely with developers, we ensure a smooth implementation, and we continuously refine the process to provide an exceptional shopping experience for our customers."
      />
      <TechnologySection data={data.techdata.jv} />
      {/* color pallet */}
      <div className={`${mvinTageStyle['colorPalletContainer']}`}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
          Color Palette presentation for
            <br /><span className={mvinTageStyle.mainheadingSpan}>MVINTAGE</span>
          </h3>
          <p>For our law firm&apos;s design, we use a refined color palette to enhance professionalism and readability. A deep orange highlights key elements, while a light cream provides a clean background. Slate gray is used for text and borders, and medium gray complements for secondary text and dividers. This combination ensures a sophisticated and user-friendly experience.</p>

          <div data-aos="flip-down" className={portfolioDetailsCommon.colorPalette} >
            <div className={`${portfolioDetailsCommon.colorPalette1} ${mvinTageStyle.colorPalette1}`}><div className={`${portfolioDetailsCommon.imageContainer} ${mvinTageStyle.imageContainer}`}><img src="/work/2024/mvinTage/colorPalette1.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette2} ${mvinTageStyle.colorPalette2}`}><div className={`${portfolioDetailsCommon.imageContainer} ${mvinTageStyle.imageContainer}`}><img src="/work/2024/mvinTage/colorPalette2.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette3} ${mvinTageStyle.colorPalette3}`}><div className={`${portfolioDetailsCommon.imageContainer} ${mvinTageStyle.imageContainer}`}><img src="/work/2024/mvinTage/colorPalette3.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette4} ${mvinTageStyle.colorPalette4}`}><div className={`${portfolioDetailsCommon.imageContainer} ${mvinTageStyle.imageContainer}`}><img src="/work/2024/mvinTage/colorPalette4.png" alt="colorPalette" /></div></div>
          </div>
        </div>
      </div>



         {/* sliderSection */}

        <div className={mvinTageStyle.sliderSection}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
          Innovative design solution for Website: 
          <br /><span className={mvinTageStyle.mainheadingSpan}>MVINTAGE</span>Showcase
          </h3>
        </div>
        </div>
        <ShowcaseSlider slides={data.ShowCaseData.mvintage}/>
    </div>
  );
}
