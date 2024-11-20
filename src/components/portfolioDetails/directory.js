"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import directoryStyle from '../../styles/portfolioDetails/directory.module.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import data from '../../resources/portfolioDetails.json'
import TechnologySection from './portfolioDetailsCommon/technologySection';
import DesignProcess from './portfolioDetailsCommon/designProcess';

var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}

export default function Directory() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
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
                            <h3>
                                Effortless Contact Management with <span>Directory Apps</span>
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
                                        src='/work/2024/vaid/vaid-img1.png'
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
                                        src='/work/2024/vaid/vaid-img2.png'
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
                                        src='/work/2024/vaid/vaid-img3.png'
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
                                        src='/work/2024/vaid/vaid-img4.png'
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
                                        src='/work/2024/vaid/vaid-img5.png'
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
                                        src='/work/2024/vaid/vaid-img6.png'
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
                                        src='/work/2024/vaid/vaid-img7.png'
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
                <div className={directoryStyle.centerPhoneImg}><img
                    src='/work/2024/vaid/vaid-img1.png'
                    alt="Animated"
                />
                </div>
                <div className={directoryStyle['phoneImg-part']}>
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
            <TechnologySection data={data.techdata.directory} />

            {/* showcase section */}
            <section className={directoryStyle['showCaseSection']}>
                <div className="container">
                    <h3 className={directoryStyle['mainheading']}>
                        Innovative design solution for Mobile App:
                        <br /><span>Directory Application</span> Showcase
                    </h3>
                    <div>
                        <img src="work/2024/directory/showCaseImg.svg" alt="showcase" width="100%" />
                    </div>
                </div>
            </section>

            {/* design process section */}

            <DesignProcess />


            {/* sliderSection */}
            <section className={directoryStyle['sliderSection']}>
                <div className="container">
                    <h3 className={directoryStyle['mainheading']}>
                        Innovative Features <br /><span>in VAID</span>
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
            <div class={`${directoryStyle['colorPalletContainer']}`}>
                <div className="conatiner">
                <h3 className={directoryStyle['mainheading']}>
                Color Palette presentation for 
                        <br /><span>Directory Application</span> Design
                    </h3>
                    <div class={`${directoryStyle['box']} ${directoryStyle['box1']}`}>
                        <div class={`${directoryStyle['info']}`}>
                        Cyan Blue
                        </div>
                    </div>

                    <div class={`${directoryStyle['box']} ${directoryStyle['box2']}`}>
                        <div class={`${directoryStyle['info']}`}>
                        Celestial Blue
                        </div>
                    </div>

                    <div class={`${directoryStyle['box']} ${directoryStyle['box3']}`}>
                        <div class={`${directoryStyle['info']}`}>
                        Superiority Blue
                        </div>
                    </div>

                    <div class={`${directoryStyle['box']} ${directoryStyle['box4']}`}>
                        <div class={`${directoryStyle['info']}`}>
                        Slate Gray
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
