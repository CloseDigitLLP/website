import React, { useEffect, useRef } from 'react';
import JVStyle from '../../styles/portfolioDetails/jvConstruction.module.scss';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import Image from 'next/image';
import data from '../../resources/portfolioDetails.json'
import TechnologySection from './portfolioDetailsCommon/technologySection';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function JVConstruction() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

  const processImgRef1 = useRef(null);
  const processImgRef2 = useRef(null);
  const processImgRef3 = useRef(null);
  const processImgRef4 = useRef(null);

  useEffect(() => {
    const initializeScrollMagic = async () => {
      const { default: ScrollMagic } = await import('scrollmagic/scrollmagic/uncompressed/ScrollMagic');

      const controller = new ScrollMagic.Controller();

      const scenes = [
        {
          triggerElement: processImgRef1.current,
          ref: processImgRef1,
        },
        {
          triggerElement: processImgRef2.current,
          ref: processImgRef2,
        },
        {
          triggerElement: processImgRef3.current,
          ref: processImgRef3,
        },
        {
          triggerElement: processImgRef4.current,
          ref: processImgRef4,
        },
      ];

      scenes.forEach(({ triggerElement, ref }) => {
        new ScrollMagic.Scene({
          triggerElement,
          duration: 500,
          triggerHook: 0.7,
        })
          .setClassToggle(ref.current, JVStyle['scaleUp'])
          .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement,
          duration: 500,
          triggerHook: 0.3,
        })
          .setClassToggle(ref.current, JVStyle['removeScale'])
          .addTo(controller);
      });

      return () => {
        controller.destroy(true);
      };
    };

    initializeScrollMagic();
  }, []);


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

        <div className={JVStyle.processSection}>
          <div className="container">
            <div className="d-flex justify-content-between flex-wrap">
              <h3 className={portfolioDetailsCommon.mainheading}>
                Design Process
              </h3>
              <p>
                Extensive research, in-depth competitive analysis, and continuous improvement provided crucial insights for developing a new application that meets the highest industry standards.
              </p>
            </div>
            <div className={JVStyle.processScrollSection}>

              <div className={JVStyle.subProcessPart}>
                <h3>01.</h3>
                <div ref={processImgRef1} className={JVStyle.subProcessImg}>
                  <Image width={100} height={100}
                    src="/work/2024/JV-construction/processImg1.svg"
                    alt="Animated"
                  />
                </div>
                <h3>Research</h3>
                <h6>Focus on users, analyze competitors, and apply best practices to exceed expectations.</h6>
              </div>

              <div className={JVStyle.subProcessPart}>
                <h3>02.</h3>
                <div ref={processImgRef2} className={JVStyle.subProcessImg}>
                  <Image width={100} height={100}
                    src="/work/2024/JV-construction/processImg2.svg"
                    alt="Animated"
                  />
                </div>
                <h3>Wireframe</h3>
                <h6>We designed the layout for optimal structure, intuitive navigation, and seamless interaction to ensure a user-friendly website.</h6>
              </div>

              <div className={JVStyle.subProcessPart}>
                <h3>03.</h3>
                <div ref={processImgRef3} className={JVStyle.subProcessImg}>
                  <Image width={100} height={100}
                    src="/work/2024/JV-construction/processImg3.svg"
                    alt="Animated"
                  />
                </div>
                <h3>UI Design</h3>
                <h6>Designers and marketers collaborate on brand research to create appealing visual elements.</h6>
              </div>

              <div className={JVStyle.subProcessPart}>
                <h3>04.</h3>
                <div ref={processImgRef4} className={JVStyle.subProcessImg}>
                  <Image width={100} height={100}
                    src="/work/2024/JV-construction/processImg4.svg"
                    alt="Animated"
                  />
                </div>
                <h3>Analysis</h3>
                <h6>Once the app was completed, we thoroughly tested and optimized it to resolve major user issues.</h6>
              </div>
            </div>

          </div>
        </div>

        <div className={JVStyle.landingPageSection}>
          <div className="container">
            <h3 className={portfolioDetailsCommon.mainheading}>Full Page Preview <br />
              <span> JV Construction</span> Website Design
            </h3>
          </div>
          <div className={JVStyle.landingPage}>
            {/* React Slick Carousel */}
            <Slider {...settings}>
              <div className={JVStyle.landingPageImg}>
                <Image
                  width={500}
                  height={500}
                  src="/work/2024/JV-construction/landingPageImg.png"
                  alt="JV Construction Landing Page Image 1"
                />
              </div>
              <div className={JVStyle.landingPageImg}>
                <Image
                  width={500}
                  height={500}
                  src="/work/2024/JV-construction/landingPageImg2.svg"
                  alt="JV Construction Landing Page Image 2"
                />
              </div>
              <div className={JVStyle.landingPageImg}>
                <Image
                  width={500}
                  height={500}
                  src="/work/2024/JV-construction/landingPageImg3.svg"
                  alt="JV Construction Landing Page Image 3"
                />
              </div>
              <div className={JVStyle.landingPageImg}>
                <Image
                  width={500}
                  height={500}
                  src="/work/2024/JV-construction/landingPageImg4.svg"
                  alt="JV Construction Landing Page Image 4"
                />
              </div>
              <div className={JVStyle.landingPageImg}>
                <Image
                  width={500}
                  height={500}
                  src="/work/2024/JV-construction/landingPageImg5.svg"
                  alt="JV Construction Landing Page Image 5"
                />
              </div>
            </Slider>
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
