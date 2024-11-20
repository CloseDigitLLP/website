import React, { useEffect, useRef } from 'react';
import JVStyle from '../../styles/portfolioDetails/jvConstruction.module.scss';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import Image from 'next/image';
import data from '../../resources/portfolioDetails.json'
import TechnologySection from './portfolioDetailsCommon/technologySection';
import DesignProcess from './portfolioDetailsCommon/designProcess';
import PreviewSlider from './portfolioDetailsCommon/previewSlider';

export default function JVConstruction() {

  useEffect(() => {
    const doAnimations = () => {
      const offset = window.scrollY + window.innerHeight;
      const animatables = document.querySelectorAll('.animatable');

      if (animatables.length === 0) {
        window.removeEventListener('scroll', doAnimations);
      }

      animatables.forEach((animatable) => {
        if ((animatable.getBoundingClientRect().top + animatable.offsetHeight - 500) < offset) {
          animatable.classList.remove('animatable');
          animatable.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', doAnimations);
    doAnimations();

    return () => {
      window.removeEventListener('scroll', doAnimations);
    };
  }, []);


  return (
    <div className={portfolioDetailsCommon.mainSection}>
      <div className={JVStyle.ContentSection}>
        <div className={JVStyle.bannerMainSection}>
          <div className={JVStyle.bannerSection}>
            <div className="container">
              <div className={`${JVStyle.sectionContent}`}>
                <h3 className={portfolioDetailsCommon.bannerPrimaryText}>Comprehensive Home Renovations <span>Transforming spaces with expert.</span>
                </h3>
                <div className={JVStyle.bannerImg}>
                  <div className={JVStyle.bannerInnerImg}>
                  </div>
                </div>
                <p className={portfolioDetailsCommon.bannerSecondaryText}>Transforming Spaces with Expert Craftsmanship and Innovative Designs: Your one-stop solution for home renovations, including whole house makeovers, bathroom and kitchen remodels, extensions, carpentry, fencing, land leveling (civils), and carpentry repairs.</p>
              </div>
            </div>
          </div>

          <div className={JVStyle.showCaseSection}>


            <div className="container">
              <h3 className={portfolioDetailsCommon.mainheading}>
                Innovative design solution <br />
                <span>JV Construct</span> Showcase
              </h3>
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

    <DesignProcess/>

        <div className={JVStyle.landingPageSection}>
          <div className="container">
            <h3 className={portfolioDetailsCommon.mainheading}>Full Page Preview <br />
              <span> JV Construction</span> Website Design
            </h3>
          </div>
          <div className={JVStyle.landingPage}>
            {/* React Slick Carousel */}
            <PreviewSlider images={data.previewSliderData.jv}/>
          </div>
        </div>

        <TechnologySection data={data.techdata.jv} />
        <div className={JVStyle.circleSection}>
          <div className="container">
            <h3 className={portfolioDetailsCommon.mainheading}>Color Palette presentation for <br />
              <span> JV Construction</span> Website Design
            </h3>
            <p>The color scheme features a strong primary Gold with background light cream accents for a cohesive look, deep dark tones for strong contrast, creating a modern and professional aesthetic.</p>
          </div>


          <div className={JVStyle.circlePart}>
            <div className="container">
              <div className={JVStyle.circleOne}>
                Gold Primary Color
              </div>
              <div className={JVStyle.circleTwo}>
                Background
              </div>
              <div className={JVStyle.circleThree}>
                Dark Text
              </div>
              <div className={JVStyle.circleFour}>
                Light Text
              </div>
            </div>
          </div>

        </div>

        <div className={JVStyle.innerPageSection}>
          <div className="container">
            <h3 className={portfolioDetailsCommon.mainheading}>Inner Page Design Of<br />
              <span> JV Construction</span> Website
            </h3>

            <div>
              <img
                src="/work/2024/JV-construction/innerBg.svg"
                alt="Animated"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
