import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import vaidStyle from '../../styles/portfolioDetails/vaid.module.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

export default function Vaid() {

  const $ = require("jquery");
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  const options = {
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 20,
    loop: true,
    rtl: true,
    responsiveClass: true,
    autoWidth: false,
    nav: true,
    // navClass: [`${vaidStyle['circle-btn']} ${vaidStyle['left-btn']}`, `${vaidStyle['circle-btn']} ${vaidStyle['right-btn']}`],
    dots: false,
    stagePadding: 0,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2.2,
      },
      1000: {
        items: 2.2,
      },
      1800: {
        items: 3
      }
    },
  };


  const sectionsRef = useRef([]);
  const phoneImgRef = useRef(null);

  useEffect(() => {
    let gsapContext;

    const initializeGsap = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const screenWidth = window.innerWidth;
      const endValue = screenWidth > 1900 ? "bottom center" : "center center";
      const xPercentValue = screenWidth > 1920 ? -300 : -40;

      const sections = sectionsRef.current;
      const phoneSection = phoneImgRef.current;
      const scrollContainer = document.querySelector(`.${vaidStyle.scrollMain}`);
      const paragraphSection = document.querySelector(`.${vaidStyle.content} p`);

      if (phoneSection && scrollContainer && paragraphSection) {
        gsapContext = gsap.context(() => {
          gsap.to(phoneSection, {
            xPercent: xPercentValue,
            scale: 0.8,
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
      if (gsapContext) {
        gsapContext.revert();
      }
    };
  }, []);
  return (
    <div className={vaidStyle.mainSection}>
      {/* Banner Section */}
      <section className={vaidStyle.bannerSection}>
        <div className="container">
          <div className={vaidStyle.content}>
            <div>
              <h3>
                Crafting Timeless Spaces: Unveiling the <span>Interior Design</span>
              </h3>
            </div>
            <div className={vaidStyle.mobileBanner}>
              <Image
                src={require('../../assets/images/work/2024/vaid/vaid-banner.png')}
                alt="Animated"
              />
            </div>
            <div className={vaidStyle.bgImg}>
              <div className={vaidStyle.bannerImg} ref={phoneImgRef}>
                <div>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/phone.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                </div>
              </div>
            </div>
            <div>
              <p>
                VAID is a specialized messaging app designed to facilitate seamless communication between clients and interior architects. Whether you're planning a renovation, decorating a new space, or need regular updates on your project, VAID keeps you informed and connected. It includes a feature for daily evidence updates, allowing architects to share progress photos with clients, and provides access to view plans and designs directly through the app.
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
                    src={require('../../assets/images/work/2024/vaid/vaid-img1.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    01 - Welcome Screen <br /> VAID streamlines access with phone and OTP login, eliminating the need to remember a password.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img2.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    02 - After WS <br />After logging in, clients can effortlessly access folders with plans, drawings, and requirements, ensuring convenient access to all project details.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img3.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    03 - View plan <br />designIt shows the inner view of the folder named "Execution."
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img4.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    04 - Thread message <br />Additionally, it features a messenger-like interface for seamless communication between clients and architects, allowing for regular updates and easy inquiries.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img5.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    05 - Create threadThe <br /> messenger-like interface allows clients to create threads using a button at the bottom, facilitating easy communication with the architect team for quick responses and updates.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img6.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    06 - groupThe <br />functionality to add members allows clients to view and access plans and designs.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img7.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
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


      <section className={vaidStyle['phoneImg-mobileView']}>
      <div> <Image
          src={require('../../assets/images/work/2024/vaid/vaid-img1.png')}
          alt="Animated"
          className={vaidStyle.phoneImg}
        />
      </div>
      <div> <Image
          src={require('../../assets/images/work/2024/vaid/vaid-img2.png')}
          alt="Animated"
          className={vaidStyle.phoneImg}
        />
      </div>
      <div> <Image
          src={require('../../assets/images/work/2024/vaid/vaid-img3.png')}
          alt="Animated"
          className={vaidStyle.phoneImg}
        />
      </div>
      <div> <Image
          src={require('../../assets/images/work/2024/vaid/vaid-img4.png')}
          alt="Animated"
          className={vaidStyle.phoneImg}
        />
      </div>
      <div> <Image
          src={require('../../assets/images/work/2024/vaid/vaid-img5.png')}
          alt="Animated"
          className={vaidStyle.phoneImg}
        />
      </div>
      <div> <Image
          src={require('../../assets/images/work/2024/vaid/vaid-img6.png')}
          alt="Animated"
          className={vaidStyle.phoneImg}
        />
      </div>
      <div> <Image
          src={require('../../assets/images/work/2024/vaid/vaid-img7.png')}
          alt="Animated"
          className={vaidStyle.phoneImg}
        />
      </div>
       
        
      </section>



      {/* tools and technology section  */}

      <div className={vaidStyle['technology-section']}>
        <div className='container'>
          <div className={vaidStyle['technology-heading-section']}>
            <h2 className={vaidStyle['main-heading']}>
              Tools & Technology
            </h2>
          </div>
          <div className={vaidStyle['technology-row']}>
            <div className={vaidStyle['technology']}>
              <Image
                src={require('../../assets/images/work/2024/vaid/tool-uiux.svg')}
              />
              <p className={vaidStyle['technology-text']}>
                UI/UX
              </p>
            </div>
            <div className={vaidStyle['technology']}>
              <Image
                src={require('../../assets/images/work/2024/vaid/tool-reactnative.svg')}
              />
              <p className={vaidStyle['technology-text']}>
                React Native
              </p>
            </div>
            <div className={vaidStyle['technology']}>
              <Image
                src={require('../../assets/images/work/2024/vaid/tool-firebase.svg')}
              />
              <p className={vaidStyle['technology-text']}>
                Firebase
              </p>
            </div>
            <div className={vaidStyle['technology']}>
              <Image
                src={require('../../assets/images/work/2024/vaid/tool-mysql.svg')}
              />
              <p className={vaidStyle['technology-text']}>
                MySQL
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <section className={vaidStyle['vaidCardsSection']}>
        <div className="container">
          <div>
            <h3 className={vaidStyle['mainheading']}>Codecraft: <br /> <span>VAID’s</span> journey in Development</h3>
          </div>
          <div className={vaidStyle['vaidcards']}>
            <div className={vaidStyle['cardbody']}>
              <div className="row">
                <div className="col-md-6">
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaidCardImg1.png')}
                    alt="Animated"
                  />
                </div>

                <div className={`col-md-6 ${vaidStyle.leftTextPart}`}>
                  <div>
                    <h6>Message data management System with Smart Contracts. <span>We specialize in integrating secure data and privacy of messages, ensuring smooth conversations between two people.</span> </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={vaidStyle['cardbody']}>
              <div className="row">
                <div className="col-md-6">
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaidCardImg1.png')}
                    alt="Animated"
                  />
                </div>

                <div className={`col-md-6 ${vaidStyle.rightTextPart}`}>
                  <div>
                    <h6>Message data management System with Smart Contracts. <span>We specialize in integrating secure data and privacy of messages, ensuring smooth conversations between two people.</span> </h6>
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
          <h3 className={vaidStyle['mainheading']}>
            Innovative Features <br /> <span>in VAID</span>
          </h3>
          {/* OwlCarousel */}
        </div>
        <OwlCarousel className={`${vaidStyle['owlcarousel']} ${vaidStyle['review-owlcarousel']}`} navText={["", ""]}  {...options}>
          <div className={`${vaidStyle['slider-item']}`}>
            <div className="row">
              <div className="col-sm-6">
                <div className={vaidStyle['imgPart']}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/sliderImg1.svg')}
                    alt="Animated"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <h6>
                  <span>Client Detail Page</span> <br />
                  it shows the client's location and project details for efficient management. It also features to create threads and submit evidence for streamlined communication and updates.
                </h6>
              </div>
            </div>
          </div>
          <div className={`${vaidStyle['slider-item']}`}>
            <div className="row">
              <div className="col-sm-6">
                <h6>
                  <span>Submit Evidencewhere</span> <br /> where you can click to add photos, show location on the photos, and include descriptions so client can easily know about the work.
                </h6>
              </div>
              <div className="col-sm-6">
                <div className={vaidStyle['imgPart']}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/sliderImg1.svg')}
                    alt="Animated"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${vaidStyle['slider-item']}`}>
            <div className="row">
              <div className="col-sm-6">
                <div className={vaidStyle['imgPart']}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/sliderImg1.svg')}
                    alt="Animated"
                  />
                </div>
              </div>
              <div className="col-sm-6">
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


