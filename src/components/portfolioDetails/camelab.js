/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import CamelabStyle from "../../styles/portfolioDetails/camelab.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
import TechnologySection from "./portfolioDetailsCommon/technologySection";
import data from "../../resources/portfolioDetails.json";
import Slider from "./portfolioDetailsCommon/slider";

const ScrollMagic = dynamic(() => import("scrollmagic"), { ssr: false });
const ScrollMagicController = dynamic(
    () => import("scrollmagic").then((mod) => mod.Controller),
    { ssr: false }
);

export default function CamelabPage() {
    const controller = useRef(null);
    const text = "Innovative Features in Camelab";
    const [displayedText, setDisplayedText] = useState("");
    const [textLength, setTextLength] = useState(0);
    const [typingStarted, setTypingStarted] = useState(false);

    useEffect(() => {
        document
            .querySelector(`.${CamelabStyle["laptop-img"]}`)
            .classList.add(CamelabStyle["animate-laptop"]);
        document
            .querySelector(`.${CamelabStyle["mobile-img"]}`)
            .classList.add(CamelabStyle["animate-mobile"]);
    }, []);

    useEffect(() => {
        const ScrollMagic = require("scrollmagic");
        const localController = new ScrollMagic.Controller();
    
        const scenes = [];
    
        const scene1 = new ScrollMagic.Scene({
            triggerElement: '#codecraftText2',
            triggerHook: 0.4,
            duration: '70%',
        })
            .on('enter', () => {
                const craftImg1 = document.getElementById('craftImg1');
                const craftImg2 = document.getElementById('craftImg2');
                if (craftImg1 && craftImg2) {
                    craftImg1.style.opacity = 0;
                    craftImg2.style.opacity = 1;
                }
            })
            .on('leave', () => {
                const craftImg1 = document.getElementById('craftImg1');
                const craftImg2 = document.getElementById('craftImg2');
                if (craftImg1 && craftImg2) {
                    craftImg1.style.opacity = 1;
                    craftImg2.style.opacity = 0;
                }
            })
            .addTo(localController);
        
        scenes.push(scene1);
    
        const scene2 = new ScrollMagic.Scene({
            triggerElement: '#codecraftText3',
            triggerHook: 0.4,
            duration: '70%',
        })
            .on('enter', () => {
                const craftImg2 = document.getElementById('craftImg2');
                const craftImg3 = document.getElementById('craftImg3');
                if (craftImg2 && craftImg3) {
                    craftImg2.style.opacity = 0;
                    craftImg3.style.opacity = 1;
                }
            })
            .on('leave', () => {
                const craftImg2 = document.getElementById('craftImg2');
                const craftImg3 = document.getElementById('craftImg3');
                if (craftImg2 && craftImg3) {
                    craftImg2.style.opacity = 1;
                    craftImg3.style.opacity = 0;
                }
            })
            .addTo(localController);
        
        scenes.push(scene2);
    
        const scene3 = new ScrollMagic.Scene({
            triggerElement: '#codecraftText1',
            triggerHook: 0.2,
            duration: '50%',
        })
            .on('enter', () => {
                const text1 = document.getElementById('codecraftText1');
                if (text1) text1.style.opacity = 0;
            })
            .on('leave', () => {
                const text1 = document.getElementById('codecraftText1');
                if (text1) text1.style.opacity = 1;
            })
            .addTo(localController);
    
        scenes.push(scene3);
    
        const scene4 = new ScrollMagic.Scene({
            triggerElement: '#codecraftText2',
            triggerHook: 0.2,
            duration: '50%',
        })
            .on('enter', () => {
                const text2 = document.getElementById('codecraftText2');
                if (text2) text2.style.opacity = 0;
            })
            .on('leave', () => {
                const text2 = document.getElementById('codecraftText2');
                if (text2) text2.style.opacity = 1;
            })
            .addTo(localController);
        
        scenes.push(scene4);
    
        const scene5 = new ScrollMagic.Scene({
            triggerElement: '#codecraftText3',
            triggerHook: 0.3,
            duration: '50%',
        })
            .on('enter', () => {
                const craftHeading = document.getElementById('craftHeading');
                if (craftHeading) craftHeading.style.position = 'unset';
            })
            .addTo(localController);
        
        scenes.push(scene5);
    
        const scene8 = new ScrollMagic.Scene({
            triggerElement: '#feature-heading',
            triggerHook: 0.8,
            reverse: false,
        })
            .on('enter', () => setTypingStarted(true))
            .addTo(localController);
        
        scenes.push(scene8);
    
        return () => {
            scenes.forEach(scene => scene.destroy(true));
            localController.destroy(true);
        };
    }, []);
    

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
        <>
            <div className={CamelabStyle["camelab-section"]}>
                {/* banner section  */}
                <div className={CamelabStyle["banner-section"]}>
                    <div className="container">
                        <div className={CamelabStyle["banner-heading-section"]}>
                            <h2 className={CamelabStyle["main-heading"]}>
                                Development of Content Creator Marketplace for{" "}
                                <span>Camelab </span>
                            </h2>
                        </div>
                    </div>
                    <div className={CamelabStyle["banner-img-part"]}>
                        <div>
                            <img
                                src="/work/2024/camelab/camelabLaptopScreen.png"
                                alt="camelab laptop screen"
                                className={`${CamelabStyle["laptop-img"]} ${CamelabStyle["initial-laptop"]}`}
                                width="100%"
                            />
                        </div>
                        <div className={CamelabStyle["mobile-img-section"]}>
                            <img
                                src="/work/2024/camelab/camelabMobileScreen.png"
                                alt=" camelab mobile screen"
                                className={`${CamelabStyle["mobile-img"]} ${CamelabStyle["initial-mobile"]}`}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className={CamelabStyle["banner-text-part"]}>
                            <p className={CamelabStyle["banner-text"]}>
                                Camelab bridges the gap between creators and brand video
                                opportunities, where creators submit their User-Generated
                                Content (UGC). Uploaded videos are showcased on the platform for
                                brands seeking engaging content. When a brand chooses a video,
                                creators not only gain exposure but also receive payment. Join
                                Camelab today to explore a world where creativity meets earning
                                potential seamlessly.{" "}
                            </p>
                        </div>
                    </div>
                </div>

                {/* show case section  */}
                <div className={CamelabStyle["showcase-section"]}>
                    <div className="container">
                        <div className={CamelabStyle["showcase-heading-section"]}>
                            <h2 className={CamelabStyle["main-heading"]}>
                                Innovative design solution: <br />
                                <span>Camelab</span> Showcase
                            </h2>
                        </div>
                    </div>

                    <Slider slides={data.sliderdata.camelab} />
                </div>

                {/* tools and technology section  */}

                <TechnologySection data={data.techdata.camelab} />

                {/* code craft section */}
                <div className={CamelabStyle["codecraft-section"]}>
                    <div className="container">
                        <div
                            className={CamelabStyle["codecraft-heading-section"]}
                            id="craftHeading"
                        >
                            <h2 className={CamelabStyle["main-heading"]}>
                                Codecraft: <br />
                                <span>Camelab&#39;s</span> journey in Development
                            </h2>
                        </div>

                        <div className={CamelabStyle["codecraft-content"]}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={CamelabStyle["text-part"]}>
                                        <div id="codecraftText1">
                                            <p className={CamelabStyle['codecraft-text']}>
                                                The brand detail page offers comprehensive insights into selected Content videos. Brands can review video details, creator profiles, engagement metrics, and payment statuses, facilitating informed decisions and seamless collaboration with creators for impactful brand video opportunities.
                                            </p>
                                        </div>
                                        <div id="codecraftText2">
                                            <p className={CamelabStyle['codecraft-text']}>
                                                the admin interface displays a list of submitted Content videos for review. Admins can efficiently select or reject submissions based on quality, relevance to brand requirements, and alignment with campaign objectives, ensuring curated content that enhances brand engagement and creator satisfaction.                                        </p>
                                        </div>
                                        <div id="codecraftText3">
                                            <p className={CamelabStyle['codecraft-text']}>
                                                In the Camelab, brands can seamlessly browse and select compelling User-Generated Content (UGC) uploaded by creators through the mobile application. This feature facilitates easy identification and acquisition of engaging videos that align with brand objectives, ensuring a straightforward process for integrating impactful content into brand campaigns.                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={CamelabStyle["image-part"]}>
                                        <div className={CamelabStyle["sticky-laptop"]}>
                                            <img
                                                src="/work/2024/camelab/blankLaptop.png"
                                                alt="code craft image"
                                                className={CamelabStyle["laptop-screen"]}
                                                id="blankLaptop"
                                            />
                                            <div className={CamelabStyle["laptop-screens"]}>
                                            <img
                                                src="/work/2024/camelab/codeCraftImg2.png"
                                                alt='code Craft Img1'
                                                id="craftImg1"
                                                className={CamelabStyle['code-craft-image']}
                                            />
                                            <img
                                                src="/work/2024/camelab/codeCraftImg1.png"
                                                alt='code Craft Img2'
                                                id="craftImg2"
                                                className={CamelabStyle['code-craft-image']}
                                            />
                                             <img
                                                src="/work/2024/camelab/codeCraftImg3.png"
                                                alt='code Craft Img3'
                                                id="craftImg3"
                                                className={CamelabStyle['code-craft-image']}
                                            />
                                            </div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={CamelabStyle["codecraft-mobile-section"]}>
                            <div className={CamelabStyle["code-craft-section"]}>
                                <div className={CamelabStyle["codecraft-img-part"]}>
                                    <div className={CamelabStyle["codecraft-mobile-img"]}>
                                        <img
                                            src="/work/2024/camelab/codecraft-mobile-img1.png"
                                            alt="code-craft image"
                                        />
                                    </div>
                                </div>
                                <div className={CamelabStyle["codecraft-text-part"]}>
                                    <p className={CamelabStyle["codecraft-text"]}>
                                        The brand detail page offers comprehensive insights into
                                        selected Content videos. Brands can review video details,
                                        creator profiles, engagement metrics, and payment statuses,
                                        facilitating informed decisions and seamless collaboration
                                        with creators for impactful brand video opportunities.
                                    </p>
                                </div>
                            </div>
                            <div className={CamelabStyle["code-craft-section"]}>
                                <div className={CamelabStyle["codecraft-text-part"]}>
                                    <p className={CamelabStyle["codecraft-text"]}>
                                        the admin interface displays a list of submitted Content
                                        videos for review. Admins can efficiently select or reject
                                        submissions based on quality, relevance to brand
                                        requirements, and alignment with campaign objectives,
                                        ensuring curated content that enhances brand engagement and
                                        creator satisfaction.
                                    </p>
                                </div>
                                <div className={CamelabStyle["codecraft-img-part"]}>
                                    <div className={CamelabStyle["codecraft-mobile-img"]}>
                                        <img
                                            src="/work/2024/camelab/codecraft-mobile-img2.png"
                                            alt="code-craft image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={CamelabStyle["code-craft-section"]}>
                                <div className={CamelabStyle["codecraft-img-part"]}>
                                    <div className={CamelabStyle["codecraft-mobile-img"]}>
                                        <img
                                            src="/work/2024/camelab/codecraft-mobile-img3.png"
                                            alt="code-craft image"
                                        />
                                    </div>
                                </div>
                                <div className={CamelabStyle["codecraft-text-part"]}>
                                    <p className={CamelabStyle["codecraft-text"]}>
                                        In the Camelab, brands can seamlessly browse and select
                                        compelling User-Generated Content (UGC) uploaded by creators
                                        through the mobile application. This feature facilitates
                                        easy identification and acquisition of engaging videos that
                                        align with brand objectives, ensuring a straightforward
                                        process for integrating impactful content into brand
                                        campaigns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* feature section  */}
                <div className={CamelabStyle["feature-section"]}>
                    <div className="container">
                        <div className={CamelabStyle["feature-heading-section"]}>
                            <h2 className={CamelabStyle["main-heading"]} id="feature-heading">
                                {displayedText}
                                <span className={CamelabStyle.blinkingCursor}>|</span>
                            </h2>
                        </div>
                        <div className={CamelabStyle["feature-card-section"]}>
                            <div className={CamelabStyle["feature-card-row"]}>
                                <div
                                    className={[
                                        CamelabStyle["feature-card"],
                                        CamelabStyle["feature-card1"]
                                    ].join(" ")}
                                >
                                    <div className="row">
                                        <div className={`${CamelabStyle["image-part"]} col-6`}>
                                            <img
                                                src="/work/2024/camelab/featurecard1.png"
                                                alt="feature card image"
                                            />
                                        </div>
                                        <div className={`${CamelabStyle["text-part"]} col-6`}>
                                            <p className={CamelabStyle["card-text"]}>
                                                Integrated Payment System when win any campaign.{" "}
                                                <span>
                                                    For creators shows details only when a creator wins a
                                                    campaign, including information about the reward and
                                                    selection status.{" "}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={[
                                        CamelabStyle["feature-card"],
                                        CamelabStyle["feature-card2"]
                                    ].join(" ")}
                                >
                                    <div className="row">
                                        <div className={`${CamelabStyle["text-part"]} col-6`}>
                                            <p className={CamelabStyle["card-text"]}>
                                                Dashboard for brand.
                                                <span>
                                                    Displays video submissions and campaign progress in
                                                    detailed graphs, allowing brands to review, select
                                                    content, and collaborate efficiently with creators.{" "}
                                                </span>{" "}
                                            </p>
                                        </div>
                                        <div className={`${CamelabStyle["image-part"]} col-6`}>
                                            <img
                                                src="/work/2024/camelab/featurecard2.png"
                                                alt="feature card image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={CamelabStyle["feature-card-row"]}>
                                <div
                                    className={[
                                        CamelabStyle["feature-card"],
                                        CamelabStyle["feature-card3"]
                                    ].join(" ")}
                                >
                                    <div className="row">
                                        <div className={`${CamelabStyle["image-part"]} col-6`}>
                                            <img
                                                src="/work/2024/camelab/featurecard3.png"
                                                alt="feature card image"
                                            />
                                        </div>
                                        <div className={`${CamelabStyle["text-part"]} col-6`}>
                                            <p className={CamelabStyle["card-text"]}>
                                                Real-Time Collaboration Tools.{" "}
                                                <span>
                                                    we use all to connect client and creator with all need
                                                    video for client and video to create for creator by
                                                    need video to create through mobile phone and we use
                                                    easy tools to connect with each other.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
