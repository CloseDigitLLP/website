/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import portfolioDetailsCommon from '../../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BannerSection({ laptopImg_Src = '/work/2024/camelab/camelabLaptopScreen.png', mobileImg_Src = '/work/2024/camelab/camelabMobileScreen.png' }) {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            offset: 0,
        });
    }, []);

    useEffect(() => {
        document.querySelector(`.${portfolioDetailsCommon['laptop-img']}`).classList.add(portfolioDetailsCommon['animate-laptop']);
        document.querySelector(`.${portfolioDetailsCommon['mobile-img']}`).classList.add(portfolioDetailsCommon['animate-mobile']);
    }, []);

    useEffect(() => {
        import("gsap").then((gsap) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.default.registerPlugin(ScrollTrigger);
                
                let mm = gsap.default.matchMedia();

                mm.add("(min-width: 1550px)", () => {
                    gsap.default.fromTo(
                        ".left",
                        { x: '70%' },
                        {
                            x: "-100%",
                            scrollTrigger: {
                                trigger: ".scrollSection",
                                start: "top 60%",
                                end: "bottom top",
                                scrub: true,
                            },
                        }
                    );

                    gsap.default.fromTo(
                        ".right",
                        { x: '-180%' },
                        {
                            x: "100%",
                            scrollTrigger: {
                                trigger: ".scrollSection",
                                start: "top 60%",
                                end: "bottom top",
                                scrub: true,
                            },
                        }
                    );
                });

                mm.add("(max-width: 1549px)", () => {
                    gsap.default.fromTo(
                        ".left",
                        { x: '60%' },
                        {
                            x: "-100%",
                            scrollTrigger: {
                                trigger: ".scrollSection",
                                start: "top 70%",
                                end: "bottom top",
                                scrub: true,
                            },
                        }
                    );

                    gsap.default.fromTo(
                        ".right",
                        { x: '-150%' },
                        {
                            x: "100%",
                            scrollTrigger: {
                                trigger: ".scrollSection",
                                start: "top 70%",
                                end: "bottom top",
                                scrub: true,
                            },
                        }
                    );
                });

                return () => mm.revert();
            });
        });
    }, []);

    return (
        <div data-aos="fade">
            <div className={portfolioDetailsCommon['banner-img-part']}>
                <div>
                    <img
                        src={laptopImg_Src}
                        alt="camelab laptop screen"
                        className={`${portfolioDetailsCommon['laptop-img']} ${portfolioDetailsCommon['initial-laptop']}`}
                        width="100%"
                    />
                </div>
                <div className={portfolioDetailsCommon['mobile-img-section']}>
                    <img
                        src={mobileImg_Src}
                        alt=" camelab mobile screen"
                        className={`${portfolioDetailsCommon['mobile-img']} ${portfolioDetailsCommon['initial-mobile']}`}
                    />
                </div>
            </div>

            <div className={`${portfolioDetailsCommon.scrollSection} scrollSection`}>
                <img
                    className={`${portfolioDetailsCommon.bannerLaptopImg} left`}
                    src={laptopImg_Src}
                    alt="LaptopImg"
                />
                <img
                    className={`${portfolioDetailsCommon.bannerPhoneImg} right`}
                    src={mobileImg_Src}
                    alt="PhoneImg"
                />
            </div>
        </div>
    );
}

