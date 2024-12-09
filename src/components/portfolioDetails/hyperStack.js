import HyperStackStyle from '../../styles/portfolioDetails/HyperStackStyle.module.scss'
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

export default function HyperStack() {

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

      <div className={HyperStackStyle.bannerSection}>
        <div className="container">
          <div className={`${HyperStackStyle.sectionContent}`}>
            <h3 data-aos="slide-left" className={portfolioDetailsCommon.bannerPrimaryText}>Access Your Cloud Account :
             <span className={HyperStackStyle.mainheadingSpan}> Hyperstack</span>
            </h3>
            <div data-aos="flip-up" className={HyperStackStyle.bannerImg}>
            <img src="/work/2024/hyperstack/laptop-mockup.svg" alt="laptop-mockup" width="70%" />
            </div>
            <p className={portfolioDetailsCommon.bannerSecondaryText}>At Hyperstack Cloud, we&apos;ve made it easy for new users to join and get started. When you arrive at our login and signup page, you can quickly sign in or create a new account. For new users, you&apos;ll be asked to choose between two options: Personal or Professional. This allows us to tailor the experience specifically to your needs. Once you select your category, we&apos;ll provide pre-filled details and customized features that are suited to your profile, ensuring a seamless and efficient start on Hyperstack Cloud.</p>
          </div>
        </div>
      </div>


   

      {/* DesignProcess */}
      <DesignProcess
        description="At Hyperstack Cloud, our design process begins by understanding your specific needs and objectives. For features like our cloud solutions, we conduct thorough research and planning to establish clear goals. Our team brainstorms and creates initial prototypes for platform functionality and user experience. We actively gather feedback through user engagement to refine our offerings. By collaborating closely with developers and stakeholders, we ensure seamless implementation, continuously enhancing the platform to deliver an exceptional experience for all users."
      />
      <TechnologySection data={data.techdata.jv} />
      {/* color pallet */}
      <div className={`${HyperStackStyle['colorPalletContainer']}`}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
          Color Palette presentation for 
            <br /><span className={HyperStackStyle.mainheadingSpan}>Hperstack</span>
          </h3>
          <p>The design of the Hyperstack Cloud website features a thoughtfully curated color palette that enhances the user experience. A crisp white background creates a clean and modern atmosphere, while accents of vibrant purple add energy and innovation. Soft gray tones bring balance and professionalism, while deeper shades provide depth and sophistication, creating a cohesive and engaging environment. This color scheme reflects Hyperstack Cloud&apos;s commitment to cutting-edge technology and connectivity, fostering an inviting and visually appealing experience for users.</p>

          <div data-aos="flip-down" className={portfolioDetailsCommon.colorPalette} >
            <div className={`${portfolioDetailsCommon.colorPalette1} ${HyperStackStyle.colorPalette1}`}><div className={`${portfolioDetailsCommon.imageContainer} ${HyperStackStyle.imageContainer}`}><img src="/work/2024/hyperstack/colorPalette1.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette2} ${HyperStackStyle.colorPalette2}`}><div className={`${portfolioDetailsCommon.imageContainer} ${HyperStackStyle.imageContainer}`}><img src="/work/2024/hyperstack/colorPalette2.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette3} ${HyperStackStyle.colorPalette3}`}><div className={`${portfolioDetailsCommon.imageContainer} ${HyperStackStyle.imageContainer}`}><img src="/work/2024/hyperstack/colorPalette3.png" alt="colorPalette" /></div></div>
            <div className={`${portfolioDetailsCommon.colorPalette4} ${HyperStackStyle.colorPalette4}`}><div className={`${portfolioDetailsCommon.imageContainer} ${HyperStackStyle.imageContainer}`}><img src="/work/2024/hyperstack/colorPalette4.png" alt="colorPalette" /></div></div>
          </div>
        </div>
      </div>



         {/* sliderSection */}

        <div className={HyperStackStyle.sliderSection}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
          Innovative design solution for Website: 
          <br /><span className={HyperStackStyle.mainheadingSpan}>Hyperstack</span>Showcase
          </h3>
        </div>
        </div>
        <ShowcaseSlider slides={data.ShowCaseData.hyperstack}/>
    </div>
  );
}
