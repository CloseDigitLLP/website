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
        <div data-aos="slide-up" className="container">
          <OwlCarousel className={`${lawStyle['owlcarousel']} ${lawStyle['review-owlcarousel']}`} navText={["", ""]}  {...options}>
            <div className={`${lawStyle['slider-item']}`}>
              <div className={lawStyle['imgPart']}>
                <img
                  src='/work/2024/law/sliderImg1.svg'
                  alt="Animated"
                />
              </div>
              <div>
                <h6>
                Our circular design showcases our services with clarity and ease. Personal Injury Claims address car accidents and brain trauma, Wrongful Death focuses on compensation for loss due to negligence, and Labor and Employment covers workplace injuries and wage disputes. Navigate through our services effortlessly with this visually engaging layout.
                </h6>
              </div>
            </div>
            <div className={`${lawStyle['slider-item']}`}>
              <div className={lawStyle['imgPart']}>
                <img
                  src='/work/2024/law/sliderImg2.svg'
                  alt="Animated"
                />
              </div>
              <div>
                <h6>
                Our design for this screen features a clean, user-friendly layout that emphasizes our commitment to superior personal service. The section highlights our decades of experience, our flexibility to work around your needs, and our dedication to pursuing the full compensation you deserve. Each point is presented clearly, ensuring users can easily understand how we can help their claim succeed.
                </h6>
              </div>
            </div>
            <div className={`${lawStyle['slider-item']}`}>
              <div className={lawStyle['imgPart']}>
                <img
                  src='/work/2024/law/sliderImg3.svg'
                  alt="Animated"
                />
              </div>
              <div>
                <h6>
                Our Contact Us page is designed for your convenience, offering a straightforward way to get in touch. Fill out the fields below to reach out to us, and view our available timings and address information to plan your visit or call. Whether you have questions or need to schedule a consultation, we&apos;re here to assist you efficiently and effectively.
                </h6>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}










