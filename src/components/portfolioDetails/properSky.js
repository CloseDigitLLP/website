import React, { useEffect, useRef } from 'react';
import ProperSkyStyle from '../../styles/portfolioDetails/properSky.module.scss';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import Image from 'next/image';

export default function properSky() {

  const controllerRef = useRef(null);

  useEffect(() => {
    const initializeScrollMagic = async () => {
      const { default: ScrollMagic } = await import('scrollmagic');
      await import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

      const controller = new ScrollMagic.Controller();
      controllerRef.current = controller;

      const bannerHeight = document.getElementById('img1').offsetHeight;

      const scenes = [
        { id: 'img1', duration: 600, offset: 0 },
        { id: 'img2', duration: 600, offset: bannerHeight / 3 },
        { id: 'img3', duration: 600, offset: bannerHeight / 1.5 },
        { id: 'img4', duration: 600, offset: bannerHeight * 2 },
        { id: 'img5', duration: 600, offset: bannerHeight * 2.5 },
        { id: 'img6', duration: 600, offset: bannerHeight * 3 },
        { id: 'img7', duration: 600, offset: bannerHeight * 3.5 },
        { id: 'img8', duration: 600, offset: bannerHeight * 4 },
      ];

      // Create scroll scenes for each image
      scenes.forEach((scene) => {
        const scrollScene = new ScrollMagic.Scene({
          triggerElement: "#bannerSection",
          triggerHook: 0,
          offset: scene.offset,
          duration: scene.duration,
        })
          .on("enter", () => {
            document.getElementById(scene.id).style.opacity = 1;
          })
          .on("leave", () => {
            document.getElementById(scene.id).style.opacity = 0;
          })
          .addTo(controller);
      });

      return () => {
        scenes.forEach((scene) => {
          controllerRef.current.destroy(true);
        });
      };
    };

    initializeScrollMagic();
  }, []);

  // const controllerRef = useRef(null);

  // useEffect(() => {
  //   const initializeScrollMagic = async () => {
  //     const { default: ScrollMagic } = await import('scrollmagic');
  //     await import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

  //     const controller = new ScrollMagic.Controller();
  //     controllerRef.current = controller;
  //     const bannerHeight = document.getElementById('img1').offsetHeight;
  //     const scene1 = new ScrollMagic.Scene({
  //       triggerElement: "#bannerSection",
  //       triggerHook: 0,
  //       duration: 600,
  //     })
  //       .on("enter", () => {
  //         document.getElementById('img1').style.opacity = 1;
  //         document.getElementById('img2').style.opacity = 0;
  //         document.getElementById('img3').style.opacity = 0;
  //         document.getElementById('img4').style.opacity = 0;
  //         document.getElementById('img5').style.opacity = 0;
  //         document.getElementById('img6').style.opacity = 0;
  //         document.getElementById('img7').style.opacity = 0;
  //         document.getElementById('img8').style.opacity = 0;
  //       })
  //       .on("leave", () => {
  //         document.getElementById('img1').style.opacity = 0;
  //       })
  //       .addTo(controller);

  //     const scene2 = new ScrollMagic.Scene({
  //       triggerElement: "#bannerSection",
  //       triggerHook: 1,
  //       offset: bannerHeight / 3,
  //       duration: 600,
  //     })
  //       .on("enter", () => {
  //         document.getElementById('img2').style.opacity = 1;
  //       })
  //       .on("leave", () => {

  //         document.getElementById('img2').style.opacity = 0;
  //       })
  //       .addTo(controller);

  //     const scene3 = new ScrollMagic.Scene({
  //       triggerElement: "#bannerSection",
  //       triggerHook: 2,
  //       offset: bannerHeight / 1.5,
  //       duration: 600,
  //     })
  //       .on("enter", () => {
  //         document.getElementById('img3').style.opacity = 1;
  //       })
  //       .on("leave", () => {
  //         document.getElementById('img3').style.opacity = 0;
  //       })
  //       .addTo(controller);

  //       const scene4 = new ScrollMagic.Scene({
  //         triggerElement: "#bannerSection",
  //         triggerHook: 2,
  //         offset: bannerHeight *2,
  //         duration: 600,
  //       })
  //         .on("enter", () => {
  //           document.getElementById('img3').style.opacity = 1;
  //         })
  //         .on("leave", () => {
  //           document.getElementById('img3').style.opacity = 0;
  //         })
  //         .addTo(controller);


  //         const scene3 = new ScrollMagic.Scene({
  //           triggerElement: "#bannerSection",
  //           triggerHook: 2,
  //           offset: bannerHeight / 1.5,
  //           duration: 600,
  //         })
  //           .on("enter", () => {
  //             document.getElementById('img3').style.opacity = 1;
  //           })
  //           .on("leave", () => {
  //             document.getElementById('img3').style.opacity = 0;
  //           })
  //           .addTo(controller);

  //           const scene3 = new ScrollMagic.Scene({
  //             triggerElement: "#bannerSection",
  //             triggerHook: 2,
  //             offset: bannerHeight / 1.5,
  //             duration: 600,
  //           })
  //             .on("enter", () => {
  //               document.getElementById('img3').style.opacity = 1;
  //             })
  //             .on("leave", () => {
  //               document.getElementById('img3').style.opacity = 0;
  //             })
  //             .addTo(controller);

  //             const scene3 = new ScrollMagic.Scene({
  //               triggerElement: "#bannerSection",
  //               triggerHook: 2,
  //               offset: bannerHeight / 1.5,
  //               duration: 600,
  //             })
  //               .on("enter", () => {
  //                 document.getElementById('img3').style.opacity = 1;
  //               })
  //               .on("leave", () => {
  //                 document.getElementById('img3').style.opacity = 0;
  //               })
  //               .addTo(controller);

  //               const scene3 = new ScrollMagic.Scene({
  //                 triggerElement: "#bannerSection",
  //                 triggerHook: 2,
  //                 offset: bannerHeight / 1.5,
  //                 duration: 600,
  //               })
  //                 .on("enter", () => {
  //                   document.getElementById('img3').style.opacity = 1;
  //                 })
  //                 .on("leave", () => {
  //                   document.getElementById('img3').style.opacity = 0;
  //                 })
  //                 .addTo(controller);


  //     return () => {
  //       scene1.destroy(true);
  //       scene2.destroy(true);
  //       scene3.destroy(true);
  //       scene4.destroy(true);
  //       scene5.destroy(true);
  //       scene6.destroy(true);
  //       scene7.destroy(true);
  //       scene8.destroy(true);
  //       controller.destroy(true);
  //     };
  //   };

  //   initializeScrollMagic();
  // }, []);
  return (
    <div className={portfolioDetailsCommon.mainSection}>
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
          <div id="img8" className={ProperSkyStyle.image8}>
          </div>
        </div>
      </div>
    </div>
  );
}








{/* <div className={ProperSkyStyle.bannerHeadText}>
<div className="conatiner">
  <h3 className={portfolioDetailsCommon.bannerPrimaryText}>
    Empowering Your Business <br />
    <span>With Secure Data and Smooth IT Operations.</span>
  </h3>
</div>
</div>


   <div>
        <div className="container">
          <p className={portfolioDetailsCommon.bannerSecondaryText}>
            Empowering Your Business with Secure Data and Smooth IT Operations. Our expert solutions ensure your data remains protected while optimizing your IT infrastructure for seamless, efficient performance. Trust us to keep your business running smoothly and securely.
          </p>
        </div>
      </div> */}