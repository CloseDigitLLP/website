import Slider from "./portfolioDetailsCommon/slider";
import data from '../../resources/portfolioDetails.json'
import TechnologySection from "./portfolioDetailsCommon/technologySection";
import { useRef, useState, useEffect } from "react";
import hontrelStyles from '../../styles/portfolioDetails/hontrel.module.scss';
import portfolioCommonStyles from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';

export default function Hontrel() {

    const controller = useRef(null);
    const text = 'Innovative Features in Camelab';
    const [displayedText, setDisplayedText] = useState('');
    const [textLength, setTextLength] = useState(0);
    const [typingStarted, setTypingStarted] = useState(false);

    // useEffect(() => {
    //     document.querySelector(`.${hontrelStyles['laptop-img']}`).classList.add(hontrelStyles['animate-laptop']);
    //     document.querySelector(`.${hontrelStyles['mobile-img']}`).classList.add(hontrelStyles['animate-mobile']);
    // }, []);

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



    return (
        <>
        <div className={hontrelStyles['hontrel-page']}>
            <Slider slides={data.sliderdata.hontrel} />
            <TechnologySection data={data.techdata.hontrel} />
            {/* code craft section */}
           <div className={hontrelStyles["codecraft-section"]}>
                    <div className="container">
                        <div
                            className={["codecraft-heading-section"]}
                            id="craftHeading"
                        >
                            <h2 className={`${portfolioCommonStyles.bannerPrimaryText} ps-0`}>
                                Codecraft: <br />
                                <span className={hontrelStyles.mainHeadingSpan}>Hontrel&#39;s</span> journey in Development
                            </h2>
                        </div>

                        <div className={hontrelStyles["codecraft-content"]}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={hontrelStyles["text-part"]}>
                                        <div id="codecraftText1">
                                            <p className={hontrelStyles['codecraft-text']}>
                                            We incorporate root-themed imagery in our design sections to enhance understanding and create a visually engaging experience. These images symbolize growth and connection, making complex concepts easier to grasp while fostering intuitive interactions with the content.
                                            </p>
                                        </div>
                                        <div id="codecraftText2">
                                            <p className={hontrelStyles['codecraft-text']}>
                                            The &quot;About Us&quot; section features a drop-down menu design for easy navigation and enhanced visibility of our content. This layout allows users to quickly access information about our mission, values, and team, promoting a seamless exploration of our story.
                                            </p>
                                        </div>
                                        <div id="codecraftText3">
                                            <p className={hontrelStyles['codecraft-text']}>
                                            The design uses a cloud image surrounding all information, creating a visually cohesive and easy-to-understand layout. This approach adds clarity to the content, helping users quickly grasp the information while providing a soft, engaging visual element.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={hontrelStyles["image-part"]}>
                                        <div className={hontrelStyles["sticky-laptop"]}>
                                            <img
                                                src="/work/2024/camelab/blankLaptop.png"
                                                alt="code craft image"
                                                className={hontrelStyles["laptop-screen"]}
                                                id="blankLaptop"
                                            />
                                            <div className={hontrelStyles["laptop-screens"]}>
                                            <img
                                                src="/work/2024/hontrel/codecraft1.png"
                                                alt='code Craft Img1'
                                                id="craftImg1"
                                                className={hontrelStyles['code-craft-image']}
                                            />
                                            <img
                                                src="/work/2024/hontrel/codecraft2.png"
                                                alt='code Craft Img2'
                                                id="craftImg2"
                                                className={hontrelStyles['code-craft-image']}
                                            />
                                             <img
                                                src="/work/2024/hontrel/codecraft3.png"
                                                alt='code Craft Img3'
                                                id="craftImg3"
                                                className={hontrelStyles['code-craft-image']}
                                            />
                                            </div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={hontrelStyles["codecraft-mobile-section"]}>
                            <div className={hontrelStyles["code-craft-section"]}>
                                <div className={hontrelStyles["codecraft-img-part"]}>
                                    <div className={hontrelStyles["codecraft-mobile-img"]}>
                                        <img
                                            src="/work/2024/hontrel/codecraft-mobile1.png"
                                            alt="code-craft image"
                                        />
                                    </div>
                                </div>
                                <div className={hontrelStyles["codecraft-text-part"]}>
                                    <p className={hontrelStyles["codecraft-text"]}>
                                    We incorporate root-themed imagery in our design sections to enhance understanding and create a visually engaging experience. These images symbolize growth and connection, making complex concepts easier to grasp while fostering intuitive interactions with the content.
                                    </p>
                                </div>
                            </div>
                            <div className={hontrelStyles["code-craft-section"]}>
                                <div className={hontrelStyles["codecraft-text-part"]}>
                                    <p className={hontrelStyles["codecraft-text"]}>
                                    The &quot;About Us&quot; section features a drop-down menu design for easy navigation and enhanced visibility of our content. This layout allows users to quickly access information about our mission, values, and team, promoting a seamless exploration of our story.
                                    </p>
                                </div>
                                <div className={hontrelStyles["codecraft-img-part"]}>
                                    <div className={hontrelStyles["codecraft-mobile-img"]}>
                                        <img
                                            src="/work/2024/hontrel/codecraft-mobile2.png"
                                            alt="code-craft image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={hontrelStyles["code-craft-section"]}>
                                <div className={hontrelStyles["codecraft-img-part"]}>
                                    <div className={hontrelStyles["codecraft-mobile-img"]}>
                                        <img
                                            src="/work/2024/hontrel/codecraft-mobile3.png"
                                            alt="code-craft image"
                                        />
                                    </div>
                                </div>
                                <div className={hontrelStyles["codecraft-text-part"]}>
                                    <p className={hontrelStyles["codecraft-text"]}>
                                    The design uses a cloud image surrounding all information, creating a visually cohesive and easy-to-understand layout. This approach adds clarity to the content, helping users quickly grasp the information while providing a soft, engaging visual element.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}