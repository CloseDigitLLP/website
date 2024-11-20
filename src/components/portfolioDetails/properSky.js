import React, { useEffect, useRef } from 'react';
import ProperSkyStyle from '../../styles/portfolioDetails/properSky.module.scss';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import Image from 'next/image';
import data from '../../resources/portfolioDetails.json'
import TechnologySection from './portfolioDetailsCommon/technologySection';
import $ from 'jquery';
import DesignProcess from './portfolioDetailsCommon/designProcess';
import PreviewSlider from './portfolioDetailsCommon/previewSlider';

export default function ProperSky() {
  useEffect(() => {
    const doAnimations = () => {
      const offset = $(window).scrollTop() + $(window).height();
      const $animatables = $('.animatable');

      if ($animatables.length === 0) {
        $(window).off('scroll', doAnimations);
      }

      $animatables.each(function () {
        const $animatable = $(this);
        if (($animatable.offset().top + $animatable.height() - 500) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
        }
      });
    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

    return () => {
      $(window).off('scroll', doAnimations);
    };
  }, []);

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
      <div className={ProperSkyStyle.ProperSkyMain}>

        <div className={ProperSkyStyle.bannerHeadText}>
          <div className="container animatable bounceInRight">
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

        <div className={ProperSkyStyle.showCaseSection}>
          <div className="container">
            <h3 className={portfolioDetailsCommon.mainheading}>
              Innovative design solution <br />
              <span>JV Construct</span> Showcase
            </h3>
          </div>
          <div className={ProperSkyStyle.showCaseImgSection}>
            <div className={`${ProperSkyStyle.showCaseImg} ${ProperSkyStyle.Img1}`}>
            </div>
            <div className={`${ProperSkyStyle.showCaseImg} ${ProperSkyStyle.Img2}`}>
            </div>
            <div className={`${ProperSkyStyle.showCaseImg} ${ProperSkyStyle.Img3}`}>
            </div>
            <div className={`${ProperSkyStyle.showCaseImg} ${ProperSkyStyle.Img4}`}>
            </div>
            <div className={`${ProperSkyStyle.showCaseImg} ${ProperSkyStyle.Img5}`}>
            </div>
          </div>
        </div>
        <DesignProcess />

        <div className={ProperSkyStyle.landingPageSection}>
          <div className="container animatable bounceInRight">
            <h3 className={portfolioDetailsCommon.mainheading}>Full Page Preview <br />
              <span> JV Construction</span> Website Design
            </h3>
          </div>
          <div className={ProperSkyStyle.landingPage}>
            <PreviewSlider images={data.previewSliderData.jv} />
          </div>
        </div>

        <TechnologySection data={data.techdata.jv} />
        <div className={ProperSkyStyle.circleSection}>
          <div className="container animatable bounceInRight">
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
    </div>
  );
}









