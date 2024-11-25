"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import directoryStyle from '../../styles/portfolioDetails/directory.module.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import data from '../../resources/portfolioDetails.json'
import TechnologySection from './portfolioDetailsCommon/technologySection';
import DesignProcess from './portfolioDetailsCommon/designProcess';
import AOS from 'aos';
import 'aos/dist/aos.css';


var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}

export default function Directory() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true, 
          offset: 200, 
        });
      }, []);

    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });

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
            const scrollContainer = document.querySelector(`.${directoryStyle.scrollMain}`);
            const paragraphSection = document.querySelector(`.${directoryStyle.content} p`);

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
        <div className={directoryStyle.mainSection}>
            {/* Banner Section */}
            <section className={directoryStyle.bannerSection}>
                <div className="container">
                    <div className={directoryStyle.content}>
                        <div>
                            <h3 data-aos="slide-left" className={portfolioDetailsCommon['bannerPrimaryText']}>
                                Effortless Contact Management with <span className={directoryStyle.mainheadingSpan}>Directory Apps</span>
                                at Your Fingertips
                            </h3>
                        </div>
                        <div className={directoryStyle.mobileBanner}>
                            <Image
                                src='/work/2024/directory/mainBanner.png'
                                alt="Animated"
                                width={700}
                                height={700}
                            />
                        </div>

                        <div className={directoryStyle.bgImg}>
                            <div className={directoryStyle.bannerImg} ref={phoneImgRef}>
                                <div className={directoryStyle.phonebg}>
                                    <Image
                                        src='/work/2024/directory/directoryPhone.svg'
                                        alt="Animated"
                                        className={directoryStyle.phoneImg}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                Manage customer contacts effortlessly with our mobile directory app. Organize, search, and categorize data with ease, featuring quick-action shortcuts for calls and messages. Enjoy cloud sync, custom fields, and secure backup, all in a streamlined, user-friendly interface.              </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Scroll Section */}
            <section className={directoryStyle.horiScrollSection}>
                <div className={directoryStyle.overflowHidden}>
                    <div className={directoryStyle.scrollMain}>
                        <div ref={el => sectionsRef.current[0] = el} className={`${directoryStyle.singleSection}`}>
                            <div className={directoryStyle.horiImgContainer}>
                                <div className={directoryStyle.imgContent}>
                                    <Image
                                        src='/work/2024/directory/phoneImg1.png'
                                        alt="Animated"
                                        className={directoryStyle.phoneImg}
                                        width={215}
                                        height={440}
                                    />
                                    <p>
                                        01 - Welcome Screen <br /> VAID streamlines access with phone and OTP login, eliminating the need to remember a password.
                                    </p>
                                </div>
                                <div className={directoryStyle.imgContent}>
                                    <Image
                                        src='/work/2024/directory/phoneImg2.png'
                                        alt="Animated"
                                        className={directoryStyle.phoneImg}
                                        width={215}
                                        height={440}
                                    />
                                    <p>
                                        02 - After WS <br />After logging in, clients can effortlessly access folders with plans, drawings, and requirements.
                                    </p>
                                </div>
                                <div className={directoryStyle.imgContent}>
                                    <Image
                                        src='/work/2024/directory/phoneImg3.png'
                                        alt="Animated"
                                        className={directoryStyle.phoneImg}
                                        width={215}
                                        height={440}
                                    />
                                    <p>
                                        03 - View plan <br />designIt shows the inner view of the folder named &quot;Execution.&quot;
                                    </p>
                                </div>
                                <div className={directoryStyle.imgContent}>
                                    <Image
                                        src='/work/2024/directory/phoneImg4.png'
                                        alt="Animated"
                                        className={directoryStyle.phoneImg}
                                        width={215}
                                        height={440}
                                    />
                                    <p>
                                        04 - Thread message <br />Additionally, it features a messenger-like interface for seamless communication between clients and architects.
                                    </p>
                                </div>
                                <div className={directoryStyle.imgContent}>
                                    <Image
                                        src='/work/2024/directory/phoneImg5.png'
                                        alt="Animated"
                                        className={directoryStyle.phoneImg}
                                        width={215}
                                        height={440}
                                    />
                                    <p>
                                        05 - Create threadThe <br /> messenger-like interface allows clients to create threads using a button at the bottom, facilitating.
                                    </p>
                                </div>
                                <div className={directoryStyle.imgContent}>
                                    <Image
                                        src='/work/2024/directory/phoneImg6.png'
                                        alt="Animated"
                                        className={directoryStyle.phoneImg}
                                        width={215}
                                        height={440}
                                    />
                                    <p>
                                        06 - groupThe <br />functionality to add members allows clients to view and access plans and designs.
                                    </p>
                                </div>
                                <div className={directoryStyle.imgContent}>
                                    <Image
                                        src='/work/2024/directory/phoneImg7.png'
                                        alt="Animated"
                                        className={directoryStyle.phoneImg}
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
            <section className={directoryStyle['phoneImg-mobileView']}>
                <div className={directoryStyle['phoneImg-part']}>
                    <div>
                        <img
                            src='/work/2024/directory/phoneImg1.png'
                            alt="Animated"
                        />
                    </div>
                    <div><img
                       src='/work/2024/directory/phoneImg2.png'
                        alt="Animated"
                    />
                    </div>
                    <div> <img
                        src='/work/2024/directory/phoneImg3.png'
                        alt="Animated"
                    />
                    </div>
                    <div><img
                        src='/work/2024/directory/phoneImg4.png'
                        alt="Animated"
                    />
                    </div>
                </div>
                <div className={directoryStyle.centerPhoneImg}><img
                    src='/work/2024/directory/phoneImg1.png'
                    alt="Animated"
                />
                </div>
                <div className={directoryStyle['phoneImg-part']}>
                    <div> <img
                        src='/work/2024/directory/phoneImg5.png'
                        alt="Animated"
                    />
                    </div>
                    <div> <img
                       src='/work/2024/directory/phoneImg6.png'
                        alt="Animated"
                    />
                    </div>
                    <div><img
                        src='/work/2024/directory/phoneImg7.png'
                        alt="Animated"
                    />
                    </div>
                    <div> <img
                        src='/work/2024/directory/phoneImg4.png'
                        alt="Animated"
                    />
                    </div>
                </div>
            </section>

            {/* tools and technology section  */}
            <TechnologySection data={data.techdata.directory} />

            {/* showcase section */}
            <section className={directoryStyle['showCaseSection']}>
                <div className="container">
                    <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
                        Innovative design solution for Mobile App:
                        <br /><span className={directoryStyle.mainheadingSpan}>Directory Application</span> Showcase
                    </h3>
                    <div className={directoryStyle.showCaseBox}>
                        <img data-aos="flip-up" src="work/2024/directory/showCasePhone.svg" alt="showcase" />
                    </div>
                </div>
            </section>

            {/* design process section */}

            <DesignProcess 
                description='For our directory app, the design process starts with in-depth research and goal setting. We move on to ideation and prototyping, rigorously testing with real users to gather feedback. Designs are refined based on insights, and we collaborate closely with developers to ensure seamless implementation and ongoing enhancements.'
            />


            {/* sliderSection */}
            <section className={directoryStyle['sliderSection']}>
                <div className="container">
                    <h3 className={portfolioDetailsCommon['mainheading']}>
                        Innovative Features <br /><span className={directoryStyle.mainheadingSpan}>in VAID</span>
                    </h3>
                </div>
                <OwlCarousel className={`${directoryStyle['owlcarousel']} ${directoryStyle['review-owlcarousel']}`} navText={["", ""]}  {...options}>
                    <div className={`${directoryStyle['slider-item']}`}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={directoryStyle['imgPart']}>
                                    <Image
                                        src='/work/2024/directory/sliderImg.png'
                                        alt="Animated"
                                        width={230}
                                        height={316}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h6>
                                    <span>Logged-in page Page</span> <br />
                                    The logged-in page provides a simple layout with easy access to profile details, contact search, and recent interactions for smooth navigation.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className={`${directoryStyle['slider-item']}`}>
                        <div className="row">
                            <div className="col-lg-6">
                                <h6>
                                    <span>Logged-in page Page</span> <br />The no permission page offers a clear message about restricted access with a prominent call-to-action, helping users quickly resolve permission issues.
                                </h6>
                            </div>
                            <div className="col-lg-6">
                                <div className={directoryStyle['imgPart']}>
                                    <Image
                                        src='/work/2024/directory/sliderImg1.png'
                                        alt="Animated"
                                        width={230}
                                        height={316}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>


            {/* color pallet */}
            <div className={`${directoryStyle['colorPalletContainer']}`}>
                <div className="container">
                    <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
                        Color Palette presentation for
                        <br /><span className={directoryStyle.mainheadingSpan}>Directory Application</span> Design
                    </h3>
                    <p>The deep, striking blue was utilized in development to enhance visual impact and maintain a professional appearance. This color choice supports a strong, cohesive brand identity and improves user engagement through its bold and distinctive presence.</p>

                    <div className={portfolioDetailsCommon.colorPalette} data-aos="flip-down">
                        <div className={`${portfolioDetailsCommon.colorPalette1} ${directoryStyle.colorPalette1}`}><div className={`${portfolioDetailsCommon.imageContainer} ${directoryStyle.imageContainer}`}><img src="/work/2024/directory/colorPalette1.png" alt="colorPalette" /></div></div>
                        <div className={`${portfolioDetailsCommon.colorPalette2} ${directoryStyle.colorPalette2}`}><div className={`${portfolioDetailsCommon.imageContainer} ${directoryStyle.imageContainer}`}><img src="/work/2024/directory/colorPalette2.png" alt="colorPalette" /></div></div>
                        <div className={`${portfolioDetailsCommon.colorPalette3} ${directoryStyle.colorPalette3}`}><div className={`${portfolioDetailsCommon.imageContainer} ${directoryStyle.imageContainer}`}><img src="/work/2024/directory/colorPalette3.png" alt="colorPalette" /></div></div>
                        <div className={`${portfolioDetailsCommon.colorPalette4} ${directoryStyle.colorPalette4}`}><div className={`${portfolioDetailsCommon.imageContainer} ${directoryStyle.imageContainer}`}><img src="/work/2024/directory/colorPalette4.png" alt="colorPalette" /></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
