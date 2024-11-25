"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import vaidStyle from '../../styles/portfolioDetails/vaid.module.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import data from '../../resources/portfolioDetails.json'
import TechnologySection from './portfolioDetailsCommon/technologySection';
import AOS from 'aos';
import 'aos/dist/aos.css';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

export default function Vaid() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
      offset: 0, 
    });
  }, []);

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
      0: { items: 1.2 },
      700: { items: 2 },
      1200: { items: 2.2 },
      1800: { items: 3 }
    },
  };

  const sectionsRef = useRef([]);
  const phoneImgRef = useRef(null);
  const gsapContextRef = useRef(null);

  useEffect(() => {
    if (!isClient) return;

    const initializeGsap = async () => {
      // Import GSAP modules once
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const screenWidth = window.innerWidth;
      let endValue;
      if (screenWidth > 1200 && screenWidth < 1600) {
        endValue = "center center";
        // console.log(endValue + "-------------- 1200>")
      } else if (screenWidth > 1920) {
        endValue = "bottom center";
        // console.log(endValue + "-------------- 1900>")
      } else {
        endValue = "center center";
      }
      const xPercentValue = screenWidth > 1800 ? -40 : -40;
      const yPercentValue = screenWidth > 1800 ? 150 : 80;

      const sections = sectionsRef.current;
      const phoneSection = phoneImgRef.current;
      const scrollContainer = document.querySelector(`.${vaidStyle.scrollMain}`);
      const paragraphSection = document.querySelector(`.${vaidStyle.content} p`);

      if (gsapContextRef.current) {
        gsapContextRef.current.revert();
      }

      if (phoneSection && scrollContainer && paragraphSection) {
        gsapContextRef.current = gsap.context(() => {
          gsap.to(phoneSection, {
            y: yPercentValue,
            xPercent: xPercentValue,
            scale: 0.9,
            ease: 'none',
            scrollTrigger: {
              trigger: phoneSection,
              start: "top top",
              endTrigger: paragraphSection,
              end: endValue,
              pin: true,
              pinSpacing: false,
              scrub: true,
            },
          });

          gsap.to(sections, {
            xPercent: -100,
            ease: 'none',
            scrollTrigger: {
              trigger: scrollContainer,
              pin: true,
              scrub: true,
              end: () => `+=${scrollContainer.offsetWidth}`,
            },
          });
        });
      }
    };

    initializeGsap();

    return () => {
      if (gsapContextRef.current) {
        gsapContextRef.current.revert();
        gsapContextRef.current = null;
      }
    };
  }, [isClient]);

  if (!isClient) return null;
  return (
    <div className={vaidStyle.mainSection}>
      {/* Banner Section */}
      <section className={vaidStyle.bannerSection}>
        <div className="container">
          <div className={vaidStyle.content}>
            <div>
              <h3 data-aos="slide-left" className={portfolioDetailsCommon['bannerPrimaryText']}>
                Crafting Timeless Spaces: Unveiling the <span className={vaidStyle.mainheadingSpan}>Interior Design</span>
              </h3>
            </div>
            <div data-aos="slide-up" className={vaidStyle.mobileBanner}>
              <Image
                src='/work/2024/vaid/vaid-banner.png'
                alt="Animated"
                width={700}
                height={700}
              />
            </div>

            <div className={vaidStyle.bgImg}>
              <div className={vaidStyle.bannerImg} ref={phoneImgRef}>
                <div className={vaidStyle.phonebg}>
                  <Image
                    src='/work/2024/vaid/phone.svg'
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
            <div>
              <p>
                VAID is a specialized messaging app designed to facilitate seamless communication between clients and interior architects. Whether you&apos;re planning a renovation, decorating a new space, or need regular updates on your project, VAID keeps you informed and connected. It includes a feature for daily evidence updates, allowing architects to share progress photos with clients, and provides access to view plans and designs directly through the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section className={vaidStyle.horiScrollSection}>
        <div className={vaidStyle.overflowHidden}>
          <div className={vaidStyle.scrollMain}>
            <div ref={el => sectionsRef.current[0] = el} className={`${vaidStyle.singleSection}`}>
              <div className={vaidStyle.horiImgContainer}>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src='/work/2024/vaid/vaid-img1.png'
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                    width={215}
                    height={440}
                  />
                  <p>
                    01 - Welcome Screen <br /> VAID streamlines access with phone and OTP login, eliminating the need to remember a password.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src='/work/2024/vaid/vaid-img2.png'
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                    width={215}
                    height={440}
                  />
                  <p>
                    02 - After WS <br />After logging in, clients can effortlessly access folders with plans, drawings, and requirements.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src='/work/2024/vaid/vaid-img3.png'
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                    width={215}
                    height={440}
                  />
                  <p>
                    03 - View plan <br />designIt shows the inner view of the folder named &quot;Execution.&quot;
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src='/work/2024/vaid/vaid-img4.png'
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                    width={215}
                    height={440}
                  />
                  <p>
                    04 - Thread message <br />Additionally, it features a messenger-like interface for seamless communication between clients and architects.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src='/work/2024/vaid/vaid-img5.png'
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                    width={215}
                    height={440}
                  />
                  <p>
                    05 - Create threadThe <br /> messenger-like interface allows clients to create threads using a button at the bottom, facilitating.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src='/work/2024/vaid/vaid-img6.png'
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                    width={215}
                    height={440}
                  />
                  <p>
                    06 - groupThe <br />functionality to add members allows clients to view and access plans and designs.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src='/work/2024/vaid/vaid-img7.png'
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                    width={215}
                    height={440}
                  />
                  <p>
                    07 - inbox <br />The inbox displays holiday messages, festival posts, new updates, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* horizontal mobile  section*/}
      <section className={vaidStyle['phoneImg-mobileView']}>
        <div className={vaidStyle['phoneImg-part']}>
          <div>
            <img
              src='/work/2024/vaid/vaid-img1.png'
              alt="Animated"

            />
          </div>
          <div><img
            src='/work/2024/vaid/vaid-img2.png'
            alt="Animated"

          />
          </div>
          <div> <img
            src='/work/2024/vaid/vaid-img6.png'
            alt="Animated"

          />
          </div>
          <div><img
            src='/work/2024/vaid/vaid-img3.png'
            alt="Animated"

          />
          </div>
        </div>
        <div className={vaidStyle.centerPhoneImg}><img
          src='/work/2024/vaid/vaid-img1.png'
          alt="Animated"
        />
        </div>
        <div className={vaidStyle['phoneImg-part']}>
          <div> <img
            src='/work/2024/vaid/vaid-img5.png'
            alt="Animated"

          />
          </div>
          <div> <img
            src='/work/2024/vaid/vaid-img6.png'
            alt="Animated"

          />
          </div>
          <div><img
            src='/work/2024/vaid/vaid-img2.png'
            alt="Animated"

          />
          </div>
          <div> <img
            src='/work/2024/vaid/vaid-img7.png'
            alt="Animated"

          />
          </div>
        </div>
      </section>

      {/* tools and technology section  */}
      <TechnologySection data={data.techdata.vaid} />

      {/* Additional Content */}
      <section className={vaidStyle['vaidCardsSection']}>
        <div className="container">
          <div>
            <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>Codecraft: <br /> <span  className={vaidStyle.mainheadingSpan}>VAID&rsquo;s</span> journey in Development</h3>
          </div>
          <div className={vaidStyle['vaidcards']}>
            <div className={vaidStyle['cardbody']}>
              <div className="row">
                <div className="col-6">
                <div className={vaidStyle.cardImg}>
                  <Image
                    src='/work/2024/vaid/vaidCardImg1.png'
                    alt="Animated"
                    width={230}
                    height={450}
                    data-aos="zoom-in"
                  />
                  </div>
                </div>

                <div className={`col-6 ${vaidStyle.leftTextPart}`}>
                  <div>
                    <h6>Message data management System with Smart Contracts. <span>We specialize in integrating secure data and privacy of messages, ensuring smooth conversations between two people.</span> </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={vaidStyle['cardbody']}>
              <div className="row">
                <div className={`col-6 ${vaidStyle.rightTextPart}`}>
                  <div>
                    <h6>Message data management System with Smart Contracts. <span>We specialize in integrating secure data and privacy of messages, ensuring smooth conversations between two people.</span> </h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className={`${vaidStyle.cardImg} d-flex justify-content-end`}>
                    <Image
                      src='/work/2024/vaid/vaidCardImg1.png'
                      alt="Animated"
                      width={230}
                      height={450}
                      data-aos="zoom-in"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sliderSection */}

      <section className={vaidStyle['sliderSection']}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
            Innovative Features <br /><span className={vaidStyle.mainheadingSpan}>in VAID</span>
          </h3>
        </div>
        <OwlCarousel data-aos="slide-up" className={`${vaidStyle['owlcarousel']} ${vaidStyle['review-owlcarousel']}`} navText={["", ""]}  {...options}>
          <div className={`${vaidStyle['slider-item']}`}>
            <div className="row">
              <div className="col-lg-6">
                <div className={vaidStyle['imgPart']}>
                  <Image
                    src='/work/2024/vaid/sliderImg1.png'
                    alt="Animated"
                    width={230}
                    height={316}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h6>
                  <span>Client Detail Page</span> <br />
                  it shows the client&apos;s location and project details for efficient management. It also features to create threads and submit evidence for streamlined communication and updates.
                </h6>
              </div>
            </div>
          </div>
          <div className={`${vaidStyle['slider-item']}`}>
            <div className="row">
              <div className="col-lg-6">
                <h6>
                  <span>Submit Evidencewhere</span> <br /> where you can click to add photos, show location on the photos, and include descriptions so client can easily know about the work.
                </h6>
              </div>
              <div className="col-lg-6">
                <div className={vaidStyle['imgPart']}>
                  <Image
                    src='/work/2024/vaid/sliderImg2.png'
                    alt="Animated"
                    width={230}
                    height={316}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${vaidStyle['slider-item']}`}>
            <div className="row">
              <div className="col-lg-6">
                <div className={vaidStyle['imgPart']}>
                  <Image
                    src='/work/2024/vaid/sliderImg1.png'
                    alt="Animated"
                    width={230}
                    height={316}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h6>
                  <span>Timer</span> <br />
                  function for employees allows them to select a client and start a timer. It tracks all in and out times according to the timer, providing a detailed log of work hours.
                </h6>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>

    </div>
  );
}


