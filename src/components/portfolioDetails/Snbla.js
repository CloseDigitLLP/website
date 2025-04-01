import React, { useRef, useEffect, useState } from "react"
import snblaStyles from '../../styles/portfolioDetails/snbla.module.scss';
import Image from 'next/image';
import dynamic from "next/dynamic";
import Slider from "./portfolioDetailsCommon/slider";
import data from '../../resources/portfolioDetails.json'
import TechnologySection from "./portfolioDetailsCommon/technologySection";
import ProperSkyStyle from './../../styles/portfolioDetails/snbla.module.scss';
import portfolioDetailsCommon from './../../styles/portfolioDetails/portfolioDetailsCommon.module.scss'

const ScrollMagic = dynamic(() => import('scrollmagic'), { ssr: false });

export default function Snbla() {
    const controller = useRef(null);
    const text = 'Innovative Features in Snbla';
    const [displayedText, setDisplayedText] = useState('');
    const [textLength, setTextLength] = useState(0);
    const [typingStarted, setTypingStarted] = useState(false);
    const videoRef = useRef(null);

    // useEffect(() => {
    //     const video = videoRef.current;
    
    //     if (!video) {
    //         console.error('Video element not found!');
    //         return;
    //     }
    
    //     // A flag to prevent multiple rAF calls
    //     let ticking = false;
    
    //     const syncVideoWithScroll = () => {
    //         if (!video || video.readyState < 2) {
    //             return;
    //         }
            
    //         // Use requestAnimationFrame for smooth updates
    //         if (!ticking) {
    //             window.requestAnimationFrame(() => {
    //                 const scrollPosition = window.scrollY;
    //                 const windowHeight = window.innerHeight;
    //                 const documentHeight = document.documentElement.scrollHeight;
    //                 const scrollPercent = scrollPosition / (documentHeight - windowHeight);
    //                 const videoDuration = video.duration;
    //                 // Increase speed by multiplying the scroll percentage (factor of 3)
    //                 const newTime = Math.min((scrollPercent * videoDuration) * 3, videoDuration);
    
    //                 video.currentTime = newTime;
    //                 ticking = false;
    //             });
    //             ticking = true;
    //         }
    //     };
    
    //     // Listen for scroll events
    //     const handleScroll = () => {
    //         syncVideoWithScroll();
    //     };
    
    //     const handleLoadedMetadata = () => {
    //         window.addEventListener('scroll', handleScroll);
    //     };
    
    //     if (video.readyState >= 1) {
    //         handleLoadedMetadata();
    //     } else {
    //         video.addEventListener('loadedmetadata', handleLoadedMetadata);
    //     }
    
    //     // Cleanup event listeners on unmount
    //     return () => {
    //         video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    
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
    
          const images = ['img1', 'img2', 'img3', 'img4', 'img5'

          ];
    
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

    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        controller.current = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
            triggerElement: '#feature-heading',
            triggerHook: 0.8,
            reverse: false
        })
            .on('enter', () => setTypingStarted(true))
            .addTo(controller.current);
    })

    useEffect(() => {
        if (typingStarted && textLength < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(textLength));
                setTextLength((prev) => prev + 1);
            }, 80);
            return () => clearTimeout(timeoutId);
        }
    }, [typingStarted, text, textLength]);

    return (
        <div className={snblaStyles['snbla-section']}>
            <div className={snblaStyles['banner-section']}>
                <div  className="container">
                  <div className="overflow-hidden">
                  <h2 data-aos="slide-left" className={snblaStyles['main-heading']}>
                        Shop Now, Pay Later <br />
                        <span>No Fees, No Credit Cards!</span>
                    </h2>
                  </div>
                     {/*<div className={snblaStyles['video-part']}>
                        <div className={snblaStyles['video-container']}>
                            <video
                                ref={videoRef}
                                src="/work/2024/snbla/snbla-banner-video(1).mp4"
                                preload="auto"
                                className={snblaStyles['banner-video']}
                                playsInline
                                muted
                                loop
                            />
                             <video
                                src="/work/2024/snbla/snbla-banner-video.mp4"
                                preload="auto"
                                className={snblaStyles['tablet-video']}
                                playsInline
                                muted
                                loop
                                autoPlay
                            />
                        </div>
                           
                    </div>
                    <div className={snblaStyles['banner-text-part']}>
                        <p>&quot;Save Now, Buy Later&quot; is an innovative payment experience that allows customers to create savings plans for purchasing products from your brand, while enjoying discounts and rewards. This unique approach offers a significant opportunity to boost revenues and achieve sustainable growth. Brands prefer to cooperate with SNBLA because we provide a comprehensive set of tools and features designed to enhance your sales. This approach helps you reach a broad customer base quickly and effectively, without any deductions from your revenues.</p>
                    </div> */}

{/* <div className={ProperSkyStyle.bannerHeadText}>
          <div className="container">
            <h3 data-aos="slide-left" className={portfolioDetailsCommon.bannerPrimaryText}>
              Empowering Your Business <br />
              <span>With Secure Data and Smooth IT Operations.</span>
            </h3>
          </div>
        </div> */}
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
          </div>
        </div>
        <div  className={ProperSkyStyle.mobileBannerImg}>
          <img src="work/2024/snbla/bannermobile.png" alt="mobile banner img" />
        </div>

        <div className={snblaStyles['banner-text-part']}>
                        <p>&quot;Save Now, Buy Later&quot; is an innovative payment experience that allows customers to create savings plans for purchasing products from your brand, while enjoying discounts and rewards. This unique approach offers a significant opportunity to boost revenues and achieve sustainable growth. Brands prefer to cooperate with SNBLA because we provide a comprehensive set of tools and features designed to enhance your sales. This approach helps you reach a broad customer base quickly and effectively, without any deductions from your revenues.</p>
                    </div>
                </div>
            </div>

            {/* show case section */}
            <div className={snblaStyles['showcase-section']}>
                <div className='container'>
                    <div className={snblaStyles['showcase-heading-section']}>
                        <h2 className={snblaStyles['main-heading']}>
                            Innovative design solution : <br />
                            <span>Snbla</span> How it work
                        </h2>
                    </div>
                </div>

                <Slider slides={data.sliderdata.snbla} />

                {/* technology scetion */}
                <div className={snblaStyles['technology-section']}>
                    <TechnologySection data={data.techdata.snbla} />
                </div>

                {/* code-craft section  */}
                <div className={snblaStyles['codecraft-section']}>
                    <div className="container">
                        <h2 className={snblaStyles['main-heading']}>
                            Codecraft:<br />
                            <span>Snbla&apos;s</span> journey in Development
                        </h2>

                        <div className={snblaStyles['codecraft-card-section']}>
                            <div className={snblaStyles['codecraft-card']}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className={snblaStyles['img-part']}>
                                            <img
                                                src="/work/2024/snbla/snbla-codecraft-img2.png"
                                                alt="snbla banner img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={snblaStyles['text-part']}>
                                            <p><span>Increase the value of your money.</span> While you save, brands contribute and provide you with rewards and discounts for purchasing products in less time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={snblaStyles['codecraft-card']}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className={snblaStyles['text-part']}>
                                            <p>
                                                <span> Control your account.</span> All your savings are safe and you can obtain them at any time and transfer them to your bank account or credit card for free
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={snblaStyles['img-part']}>
                                            <img
                                                src="/work/2024/snbla/snbla-codecraft-img1.png"
                                                alt="snbla banner img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* feature section  */}
                <div className={snblaStyles['feature-section']}>
                    <div className='container'>
                        <div className={snblaStyles['feature-heading-section']}>
                            <h2 className={snblaStyles['main-heading']} id='feature-heading'>
                                {displayedText}<span className={snblaStyles.blinkingCursor}>|</span>
                            </h2>
                        </div>
                        <div className={snblaStyles['feature-card-section']}>
                            <div className={snblaStyles['feature-card-row']}>
                                <div className={[snblaStyles['feature-card'], snblaStyles['feature-card1']].join(' ')}>
                                    <div className='row'>
                                        <div className={`${snblaStyles['image-part']} col-6`}>
                                            <img
                                                src="/work/2024/snbla/featurecard-1.png"
                                                alt='feature card image'
                                            />
                                        </div>
                                        <div className={`${snblaStyles['text-part']} col-6`}>
                                            <p className={snblaStyles['card-text']}>
                                                <span>Integrated Payment System.</span> We enable you to identify your most loyal customers and offer them rewards, incentivizing them for repeat purchases in the future with personalized rewards.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={[snblaStyles['feature-card'], snblaStyles['feature-card2']].join(' ')}>
                                    <div className='row'>
                                        <div className={`${snblaStyles['text-part']} col-6`}>
                                            <p className={snblaStyles['card-text']}>
                                                <span>Boost Sales with Rewards.</span> Expanding the customer base, increasing sales, reaching new customers who are not ready to buy now, and motivating them to save and complete the purchase later with rewards.
                                            </p>
                                        </div>
                                        <div className={`${snblaStyles['image-part']} col-6`}>
                                            <img
                                                src="/work/2024/snbla/featurecard-2.png"
                                                alt='feature card image'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={snblaStyles['feature-card-row']}>
                                <div className={[snblaStyles['feature-card'], snblaStyles['feature-card3']].join(' ')}>
                                    <div className='row'>
                                        <div className={`${snblaStyles['image-part']} col-6`}>
                                            <img
                                                src="/work/2024/snbla/featurecard-3.png"
                                                alt='feature card image'
                                            />
                                        </div>
                                        <div className={`${snblaStyles['text-part']} col-6`}>
                                            <p className={snblaStyles['card-text']}>
                                                <span>Connecting Shoppers to Partner Stores Effortlessly.</span> We are where customers are, allowing us to transfer thousands of shoppers to our partner stores and encourage them to buy
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}