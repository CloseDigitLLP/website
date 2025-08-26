/* eslint-disable @next/next/no-img-element */
import Slider from "./portfolioDetailsCommon/slider";
import data from '../../resources/portfolioDetails.json'
import TechnologySection from "./portfolioDetailsCommon/technologySection";
import { useRef, useState, useEffect } from "react";
import GuptaGroupStyles from '../../styles/portfolioDetails/guptaGroup.module.scss';
import portfolioCommonStyles from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';

export default function GuptaGroup() {

    const text = 'Innovative Features in Gupta Group';
    const [displayedText, setDisplayedText] = useState('');
    const [textLength, setTextLength] = useState(0);
    const [typingStarted, setTypingStarted] = useState(false);
    const [scrollOffset, setScrollOffset] = useState(0);

    const websiteImageRef = useRef(null);
    const tabletScreenRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (websiteImageRef.current && tabletScreenRef.current) {
                const bannerContainer = document.getElementById('bannerContainer');

                if (bannerContainer) {
                    const scrollPosition = window.scrollY - bannerContainer.offsetTop;
                    const maxScrollHeight =
                        websiteImageRef.current.offsetHeight - tabletScreenRef.current.offsetHeight;

                    const scrollRatio = scrollPosition / (bannerContainer.offsetHeight - window.innerHeight);

                    const offsetY = Math.max(0, Math.min(scrollRatio * maxScrollHeight, maxScrollHeight));
                    setScrollOffset(offsetY);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const ScrollMagic = require("scrollmagic");
        const localController = new ScrollMagic.Controller();

        const scenes = [];

        const scene1 = new ScrollMagic.Scene({
            triggerElement: '#codecraftText2',
            triggerHook: 0.5,
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
            triggerHook: 0.5,
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
                if (craftHeading) craftHeading.style.position = 'relative';
            })
            .addTo(localController);

        scenes.push(scene5);

        const scene8 = new ScrollMagic.Scene({
            triggerElement: '#feature-heading',
            triggerHook: 0.8,
            reverse: true,
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
            <div className={GuptaGroupStyles['hontrel-page']}>
                <section className={`${GuptaGroupStyles['banner-section']} ${portfolioCommonStyles.mainSection}`}>
                    <div className="container">
                        <h2 className={portfolioCommonStyles.bannerPrimaryText}>
                            Excellence in Indian Human Hair <br />
                            <span className={GuptaGroupStyles.mainHeadingSpan}>Gupta Group</span>
                        </h2>
                        <div className={GuptaGroupStyles.bannerContainer} id="bannerContainer">
                            <div style={{ position: 'sticky', top: '20%' }}>
                                <div className={GuptaGroupStyles.tabletContainer}>
                                    <div className={GuptaGroupStyles.tabletScreen} ref={tabletScreenRef}>
                                        <img
                                            src="/work/2024/gupta-group/guptagroup-banner.png"
                                            alt="Website Screenshot"
                                            className={GuptaGroupStyles.websiteImage}
                                            ref={websiteImageRef}
                                            style={{ transform: `translateY(-${scrollOffset}px)` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className={portfolioCommonStyles.bannerSecondaryText}>
                                With 25 years of expertise, we specialize in manufacturing, exporting, and supplying premium Indian Human Hair, including Blonde, Black, Natural, and Silky varieties, while also being one of India&#39;s largest Sandalwood product exporters, led by our Managing Partner, Mr. Gupta, the Secretary of the South India Sandalwood Products Dealers and Exporters Association.                            </p>
                        </div>
                    </div>
                </section>

                <div className={GuptaGroupStyles.showcaseSection}>
                    <div className='container'>
                        <h3 data-aos="slide-left" className={portfolioCommonStyles.mainheading}>Innovative design solution: <br />
                            <span className={GuptaGroupStyles.mainHeadingSpan}>  Gupta Group </span>
                        </h3>
                    </div>
                    <Slider slides={data.sliderdata.guptaGroup} />
                </div>

                <TechnologySection data={data.techdata.guptaGroup} />
                {/* code craft section */}
                <div className={GuptaGroupStyles["codecraft-section"]}>
                    <div className="container">
                        <div
                            className={["codecraft-heading-section"]}
                            id="craftHeading"
                        >
                            <h2 className={`${portfolioCommonStyles.bannerPrimaryText} ps-0`}>
                                Codecraft: <br />
                                <span className={GuptaGroupStyles.mainHeadingSpan}>Gupta Group&#39;s</span> journey in Development
                            </h2>
                        </div>

                        <div className={GuptaGroupStyles["codecraft-content"]}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={GuptaGroupStyles["text-part"]}>
                                        <div id="codecraftText1">
                                            <p className={GuptaGroupStyles['codecraft-text']}>
                                                In our &quot;About Us&quot; section, we highlight our commitment to quality and community impact, ensuring our products meet your needs while supporting charitable initiatives. We blend tradition with innovation to make a positive difference in people&#39;s lives.
                                            </p>
                                        </div>
                                        <div id="codecraftText2">
                                            <p className={GuptaGroupStyles['codecraft-text']}>
                                                The Gupta Foundation is designed to embody our commitment to social responsibility and community support. Our user-friendly layout emphasizes our mission, showcases our charitable initiatives, and highlights how individuals can get involved and make a meaningful impact.                                            </p>
                                        </div>
                                        <div id="codecraftText3">
                                            <p className={GuptaGroupStyles['codecraft-text']}>
                                                Our contact page is designed for ease of use, allowing customers to reach out effortlessly. With clear contact information, a simple form, and quick access to support, we ensure that inquiries and feedback can be submitted with just a few clicks.                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={GuptaGroupStyles["image-part"]}>
                                        <div className={GuptaGroupStyles["sticky-laptop"]} id="stickyLaptop">
                                            <img
                                                src="/work/2024/camelab/blankLaptop.png"
                                                alt="code craft image"
                                                className={GuptaGroupStyles["laptop-screen"]}
                                                id="blankLaptop"
                                            />
                                            <div className={GuptaGroupStyles["laptop-screens"]}>
                                                <img
                                                    src="/work/2024/gupta-group/codecraft1.png"
                                                    alt='code Craft Img1'
                                                    id="craftImg1"
                                                    className={GuptaGroupStyles['code-craft-image']}
                                                />
                                                <img
                                                    src="/work/2024/gupta-group/codecraft2.png"
                                                    alt='code Craft Img2'
                                                    id="craftImg2"
                                                    className={GuptaGroupStyles['code-craft-image']}
                                                />
                                                <img
                                                    src="/work/2024/gupta-group/codecraft3.png"
                                                    alt='code Craft Img3'
                                                    id="craftImg3"
                                                    className={GuptaGroupStyles['code-craft-image']}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={GuptaGroupStyles["codecraft-mobile-section"]}>
                            <div className={GuptaGroupStyles["code-craft-section"]}>
                                <div className={GuptaGroupStyles["codecraft-img-part"]}>
                                    <div className={GuptaGroupStyles["codecraft-mobile-img"]}>
                                        <img
                                            src="/work/2024/gupta-group/codecraft-mobile1.png"
                                            alt="code-craft image"
                                        />
                                    </div>
                                </div>
                                <div className={GuptaGroupStyles["codecraft-text-part"]}>
                                    <p className={GuptaGroupStyles["codecraft-text"]}>
                                        In our &quot;About Us&quot; section, we highlight our commitment to quality and community impact, ensuring our products meet your needs while supporting charitable initiatives. We blend tradition with innovation to make a positive difference in people&#39;s lives.
                                    </p>
                                </div>
                            </div>
                            <div className={GuptaGroupStyles["code-craft-section"]}>
                                <div className={GuptaGroupStyles["codecraft-text-part"]}>
                                    <p className={GuptaGroupStyles["codecraft-text"]}>
                                        The Gupta Foundation is designed to embody our commitment to social responsibility and community support. Our user-friendly layout emphasizes our mission, showcases our charitable initiatives, and highlights how individuals can get involved and make a meaningful impact.
                                    </p>
                                </div>
                                <div className={GuptaGroupStyles["codecraft-img-part"]}>
                                    <div className={GuptaGroupStyles["codecraft-mobile-img"]}>
                                        <img
                                            src="/work/2024/gupta-group/codecraft-mobile2.png"
                                            alt="code-craft image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={GuptaGroupStyles["code-craft-section"]}>
                                <div className={GuptaGroupStyles["codecraft-img-part"]}>
                                    <div className={GuptaGroupStyles["codecraft-mobile-img"]}>
                                        <img
                                            src="/work/2024/gupta-group/codecraft-mobile3.png"
                                            alt="code-craft image"
                                        />
                                    </div>
                                </div>
                                <div className={GuptaGroupStyles["codecraft-text-part"]}>
                                    <p className={GuptaGroupStyles["codecraft-text"]}>
                                        Our contact page is designed for ease of use, allowing customers to reach out effortlessly. With clear contact information, a simple form, and quick access to support, we ensure that inquiries and feedback can be submitted with just a few clicks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* feature section  */}
                <div className={GuptaGroupStyles["feature-section"]}>
                    <div className="container">
                        <h2 className={portfolioCommonStyles.mainheading} id="feature-heading">
                            {displayedText}
                            <span className={GuptaGroupStyles.blinkingCursor}>|</span>
                        </h2>
                        <div className={GuptaGroupStyles["feature-content"]}>
                            <div className={GuptaGroupStyles["feature-card"]}>
                                <img src="/work/2024/gupta-group/featureImage.png" alt="Feature 1" className="mt-sm-4" />
                                <p>The Gupta Group Foundation page features an innovative layout that consolidates all our initiatives in one place, making it easy to view and add information. This streamlined design ensures effortless navigation and encourages engagement with our charitable programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}