import React, { useEffect, useRef } from 'react';
import ProperSkyStyle from '../../styles/portfolioDetails/properSky.module.scss';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import Image from 'next/image';
import data from '../../resources/portfolioDetails.json'
import TechnologySection from './portfolioDetailsCommon/technologySection';


export default function ProperSky() {

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
          .setClassToggle(ref.current, ProperSkyStyle['scaleUp'])
          .addIndicators()
          .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement,
          duration: 500,
          triggerHook: 0.3,
        })
          .setClassToggle(ref.current, ProperSkyStyle['removeScale'])
          .addIndicators()
          .addTo(controller);
      });

      return () => {
        controller.destroy(true);
      };
    };

    initializeScrollMagic();
  }, []);


  const controllerRef = useRef(null);

  useEffect(() => {
    const initializeScrollMagic = async () => {
      const { default: ScrollMagic } = await import('scrollmagic/scrollmagic/uncompressed/ScrollMagic');

      const controller = new ScrollMagic.Controller();
      controllerRef.current = controller;

      const images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];
      
      const checkImagesLoaded = setInterval(() => {
        const bannerImage = document.getElementById('img1');
        if (bannerImage) {
          const bannerHeight = bannerImage.offsetHeight;

          images.forEach((imageId, index) => {
            const offsetValue = bannerHeight * index;
            const scene = new ScrollMagic.Scene({
              triggerElement: "#bannerSection",
              triggerHook: 0,
              offset: offsetValue,
              duration: 600,
            })
              .on("enter", () => {
                images.forEach((id, idx) => {
                  const imageElement = document.getElementById(id);
                  if (imageElement) { 
                    imageElement.style.opacity = idx === index ? 1 : 0;
                  }
                });
              })
              .on("leave", () => {
                const imageElement = document.getElementById(imageId);
                if (imageElement) {
                  imageElement.style.opacity = 0;
                }
              })
              .addTo(controller);
          });
          
          clearInterval(checkImagesLoaded); 
        }
      }, 100); 

      return () => {
        controller.destroy(true);
      };
    };

    initializeScrollMagic();
  }, []);
  return (
    <div className={portfolioDetailsCommon.mainSection}>

      <div className={ProperSkyStyle.bannerHeadText}>
        <div className="container">
          <h3 className={portfolioDetailsCommon.bannerPrimaryText}>
            Empowering Your Business <br />
            <span>With Secure Data and Smooth IT Operations.</span>
          </h3>
        </div>
      </div>

      <div id="bannerSection" className={ProperSkyStyle.bannerSection}>
        <div className={ProperSkyStyle.bannerImg}>
          <div id="img1" className={ProperSkyStyle.image1} style={{ opacity: 1 }}>
          </div>
          <div id="img2" className={ProperSkyStyle.image2}>
          </div>
          <div id="img3" className={ProperSkyStyle.image3}>
          </div>
          <div id="img4" className={ProperSkyStyle.image4}>
          </div>
          <div id="img5" className={ProperSkyStyle.image5}>
          </div>
          <div id="img6" className={ProperSkyStyle.image6}>
          </div>
          <div id="img7" className={ProperSkyStyle.image7}>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <p className={portfolioDetailsCommon.bannerSecondaryText}>
            Empowering Your Business with Secure Data and Smooth IT Operations. Our expert solutions ensure your data remains protected while optimizing your IT infrastructure for seamless, efficient performance. Trust us to keep your business running smoothly and securely.
          </p>
        </div>
      </div>

      <div className={ProperSkyStyle.processSection}>
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap">
            <h3 className={portfolioDetailsCommon.mainheading}>
              Design Process
            </h3>
            <p>
              Extensive research, in-depth competitive analysis, and continuous improvement provided crucial insights for developing a new application that meets the highest industry standards.
            </p>
          </div>
          <div className={ProperSkyStyle.processScrollSection}>

            <div className={ProperSkyStyle.subProcessPart}>
              <h3>01.</h3>
              <div ref={processImgRef1} className={ProperSkyStyle.subProcessImg}>
                <Image
                  width={100} height={100}
                  src='/work/2024/propersky/processImg1.svg'
                  alt="Animated"
                />
              </div>
              <h3>Research</h3>
              <h6>Focus on users, analyze competitors, and apply best practices to exceed expectations.</h6>
            </div>

            <div className={ProperSkyStyle.subProcessPart}>
              <h3>02.</h3>
              <div ref={processImgRef2} className={ProperSkyStyle.subProcessImg}>
                <Image
                  width={100} height={100}
                  src='/work/2024/propersky/processImg2.svg'
                  alt="Animated"
                />
              </div>
              <h3>Wireframe</h3>
              <h6>We designed the layout for optimal structure, intuitive navigation, and seamless interaction to ensure a user-friendly website.</h6>
            </div>

            <div className={ProperSkyStyle.subProcessPart}>
              <h3>03.</h3>
              <div ref={processImgRef3} className={ProperSkyStyle.subProcessImg}>
                <Image
                  width={100} height={100}
                  src='/work/2024/propersky/processImg3.svg'
                  alt="Animated"
                />
              </div>
              <h3>UI Design</h3>
              <h6>Designers and marketers collaborate on brand research to create appealing visual elements.</h6>
            </div>

            <div className={ProperSkyStyle.subProcessPart}>
              <h3>04.</h3>
              <div ref={processImgRef4} className={ProperSkyStyle.subProcessImg}>
                <Image
                  width={100} height={100}
                  src='/work/2024/propersky/processImg4.svg'
                  alt="Animated"
                />
              </div>
              <h3>Analysis</h3>
              <h6>Once the app was completed, we thoroughly tested and optimized it to resolve major user issues.</h6>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={ProperSkyStyle.landingPageSection}>
        <div className="container">
          <h3 className={portfolioDetailsCommon.mainheading}>Full Page Preview <br />
            <span> JV Construction</span> Website Design
          </h3>
        </div>
        <div className={ProperSkyStyle.landingPage}>
          <div className={ProperSkyStyle.mockupImg}>
            <div className={ProperSkyStyle.mockupInnerImg}>

            </div>
          </div>
        </div>
      </div> */}

      <TechnologySection data={data.techdata.jv} />
      <div className={ProperSkyStyle.circleSection}>
        <div className="container">
          <h3 className={portfolioDetailsCommon.mainheading}>Color Palette presentation for <br />
            <span> JV Construction</span> Website Design
          </h3>
          <p>The color scheme features a strong primary Gold with background light cream accents for a cohesive look, deep dark tones for strong contrast, creating a modern and professional aesthetic.</p>
        </div>


        <div className={ProperSkyStyle.circlePart}>
          <div className="container">
            <div className={ProperSkyStyle.circleOne}>
              Gold Primary Color
            </div>
            <div className={ProperSkyStyle.circleTwo}>
              Background
            </div>
            <div className={ProperSkyStyle.circleThree}>
              Dark Text
            </div>
            <div className={ProperSkyStyle.circleFour}>
              Light Text
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}








