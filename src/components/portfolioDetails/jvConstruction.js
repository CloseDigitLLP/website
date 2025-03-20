import React, { useEffect, useRef } from 'react';
import JVStyle from '../../styles/portfolioDetails/jvConstruction.module.scss';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import Image from 'next/image';
import data from '../../resources/portfolioDetails.json'
import TechnologySection from './portfolioDetailsCommon/technologySection';
import DesignProcess from './portfolioDetailsCommon/designProcess';
import PreviewSlider from './portfolioDetailsCommon/previewSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function JVConstruction() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, 
      offset: 0, 
    });
  }, []);
  return (
    <div className={portfolioDetailsCommon.mainSection}>
      <div className={JVStyle.ContentSection}>
        <div className={JVStyle.bannerMainSection}>
          <div className={JVStyle.bannerSection}>
            <div className="container">
              <div className={`${JVStyle.sectionContent}`}>
                <h3 data-aos="slide-left" className={portfolioDetailsCommon.bannerPrimaryText}>Comprehensive Home Renovations <br /><span className={JVStyle.mainheadingSpan}>Transforming spaces with expert.</span>
                </h3>
                <div data-aos="flip-up" className={JVStyle.bannerImg}>
                  <div className={JVStyle.bannerInnerImg}>
                  </div>
                </div>
                <p className={portfolioDetailsCommon.bannerSecondaryText}>Transforming Spaces with Expert Craftsmanship and Innovative Designs: Your one-stop solution for home renovations, including whole house makeovers, bathroom and kitchen remodels, extensions, carpentry, fencing, land leveling (civils), and carpentry repairs.</p>
              </div>
            </div>
          </div>

          <div className={JVStyle.showCaseSection}>

            <div className={JVStyle.showCaseHeading}>
              <div className="container">
                <h3 data-aos="slide-left" className={portfolioDetailsCommon.mainheading}>
                  Innovative design solution <br />
                  <span className={JVStyle.mainheadingSpan}>JV Construct</span> Showcase
                </h3>
              </div>
            </div>

            <div className={JVStyle.showCaseImgSection}>
              <div className={`${JVStyle.showCaseImg} ${JVStyle.Img1}`}>
              </div>
              <div className={`${JVStyle.showCaseImg} ${JVStyle.Img2}`}>
              </div>
              <div className={`${JVStyle.showCaseImg} ${JVStyle.Img3}`}>
              </div>
              <div className={`${JVStyle.showCaseImg} ${JVStyle.Img4}`}>
              </div>
              <div className={`${JVStyle.showCaseImg} ${JVStyle.Img5}`}>
              </div>
            </div>
          </div>
        </div>

        <DesignProcess 
          description='Extensive research, in-depth competitive analysis, and continuous improvement provided crucial insights for developing a new application that meets the highest industry standards.'
        />

        <div className={JVStyle.landingPageSection}>
          <div className="container">
            <h3 data-aos="slide-left" className={portfolioDetailsCommon.mainheading}>Full Page Preview <br />
              <span className={JVStyle.mainheadingSpan}> JV Construction</span> Website Design
            </h3>
          </div>
          <div className={JVStyle.landingPage}>
            {/* React Slick Carousel */}
            <PreviewSlider images={data.previewSliderData.jv} />
          </div>
        </div>

        <TechnologySection data={data.techdata.jv} />
        <div className={JVStyle.circleSection}>
          <div className="container">
            <h3 data-aos="slide-left" className={portfolioDetailsCommon.mainheading}>Color Palette presentation for <br />
              <span className={JVStyle.mainheadingSpan}> JV Construction</span> Website Design
            </h3>
            <p>The color scheme features a strong primary Gold with background light cream accents for a cohesive look, deep dark tones for strong contrast, creating a modern and professional aesthetic.</p>
          </div>


          <div className={JVStyle.circlePart}>
            <div className="container">
              <div data-aos="zoom-in" className={JVStyle.circleOne}>
                Gold Primary Color
              </div>
              <div data-aos="flip-up" className={JVStyle.circleTwo}>
                Background
              </div>
              <div data-aos="zoom-in" className={JVStyle.circleThree}>
                Dark Text
              </div>
              <div data-aos="flip-up" className={JVStyle.circleFour}>
                Light Text
              </div>
            </div>
          </div>

        </div>

        <div className={JVStyle.innerPageSection}>
          <div className="container">
            <h3 data-aos="slide-left" className={portfolioDetailsCommon.mainheading}>Inner Page Design Of<br />
              <span className={JVStyle.mainheadingSpan}> JV Construction</span> Website
            </h3>
            <div>
              <img
                src="/work/2024/JV-construction/innerBg.svg"
                alt="Animated"
                data-aos="zoom-in-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
