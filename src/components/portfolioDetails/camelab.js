import React, { useEffect, useRef, useState } from 'react';
import CamelabStyle from '../../styles/portfolioDetails/camelab.module.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import data from '../../resources/portfolioDetails.json'
import Slider from './portfolioDetailsCommon/slider';

const ScrollMagic = dynamic(() => import('scrollmagic'), { ssr: false });
const ScrollMagicController = dynamic(() => import('scrollmagic').then(mod => mod.Controller), { ssr: false });

export default function Camelab() {

    const controller = useRef(null);
    const text = 'Innovative Features in Camelab';
    const [displayedText, setDisplayedText] = useState('');
    const [textLength, setTextLength] = useState(0);
    const [typingStarted, setTypingStarted] = useState(false);

    useEffect(() => {
        document.querySelector(`.${CamelabStyle['laptop-img']}`).classList.add(CamelabStyle['animate-laptop']);
        document.querySelector(`.${CamelabStyle['mobile-img']}`).classList.add(CamelabStyle['animate-mobile']);
    }, []);

    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        controller.current = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
            triggerElement: '#codecraft-text-part-1',
            triggerHook: 0.5,
            duration: '50%'
        })
            .on('enter', () => {
                document.getElementById('craft-img1').style.display = 'block';
                document.getElementById('craft-img2').style.display = 'none';
                document.getElementById('craft-img3').style.display = 'none';

            })
            .addTo(controller.current);

        new ScrollMagic.Scene({
            triggerElement: '#codecraft-text-part-1',
            triggerHook: 0.3,
            duration: '70%',
        })
            .on('enter', () => {
                document.getElementById('codecraft-text-part-1').style.opacity = 0;
            })
            .on('leave', () => {
                document.getElementById('codecraft-text-part-1').style.opacity = 1; // Reset opacity when leaving
            })
            .addTo(controller.current);


        new ScrollMagic.Scene({
            triggerElement: '#codecraft-text-part-2',
            triggerHook: 0.5,
            duration: '50%'
        })
            .on('enter', () => {
                document.getElementById('craft-img1').style.display = 'none';
                document.getElementById('craft-img2').style.display = 'block';
                document.getElementById('craft-img3').style.display = 'none';
            })
            .addTo(controller.current);

        new ScrollMagic.Scene({
            triggerElement: '#codecraft-text-part-2',
            triggerHook: 0.3,
            duration: '70%',
        })
            .on('enter', () => {
                document.getElementById('codecraft-text-part-2').style.opacity = 0;
            })
            .on('leave', () => {
                document.getElementById('codecraft-text-part-2').style.opacity = 1;
            })
            .addTo(controller.current);

        new ScrollMagic.Scene({
            triggerElement: '#codecraft-text-part-3',
            triggerHook: 0.5,
            duration: '50%'
        })
            .on('enter', () => {
                document.getElementById('craft-img1').style.display = 'none';
                document.getElementById('craft-img2').style.display = 'none';
                document.getElementById('craft-img3').style.display = 'block';
            })
            .addTo(controller.current);

        new ScrollMagic.Scene({
            triggerElement: '#codecraft-text-part-3',
            triggerHook: 0.4,
            duration: '100%',
        })
            .on('enter', () => {
                //   document.getElementById('codecraft-text-part-3').style.opacity = 0;
                document.getElementById('craft-heading').style.position = 'relative'
            })
            .on('leave', () => {
                //   document.getElementById('codecraft-text-part-3').style.opacity = 1; 
                document.getElementById('craft-heading').style.position = 'sticky'
            })
            .addTo(controller.current);

        document.getElementById('craft-img1').style.display = 'block';
        document.getElementById('craft-img2').style.display = 'none';
        document.getElementById('craft-img3').style.display = 'none';

        new ScrollMagic.Scene({
            triggerElement: '#feature-heading',
            triggerHook: 0.8,
            reverse: false
        })
            .on('enter', () => setTypingStarted(true))
            .addTo(controller.current);
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
            <div className={CamelabStyle['camelab-section']}>
                {/* banner section  */}
                <div className={CamelabStyle['banner-section']}>
                    <div className='container'>
                        <div className={CamelabStyle['banner-heading-section']}>
                            <h2 className={CamelabStyle['main-heading']}>
                                Development of Content Creator
                                Marketplace for <span>Camelab </span>
                            </h2>
                        </div>
                    </div>
                    <div className={CamelabStyle['banner-img-part']}>
                        <div>
                            <Image
                                src={require('../../assets/images/work/2024/camelab/camelabLaptopScreen.png')}
                                alt="camelab laptop screen"
                                className={`${CamelabStyle['laptop-img']} ${CamelabStyle['initial-laptop']}`}
                            />
                        </div>
                        <div className={CamelabStyle['mobile-img-section']}>
                            <Image
                                src={require('../../assets/images/work/2024/camelab/camelabMobileScreen.png')}
                                alt=" camelab mobile screen"
                                className={`${CamelabStyle['mobile-img']} ${CamelabStyle['initial-mobile']}`}
                            />
                        </div>
                    </div>
                    <div className='container'>
                        <div className={CamelabStyle['banner-text-part']}>
                            <p className={CamelabStyle['banner-text']}>
                                Camelab bridges the gap between creators and brand video opportunities, where creators submit their User-Generated Content (UGC). Uploaded videos are showcased on the platform for brands seeking engaging content. When a brand chooses a video, creators not only gain exposure but also receive payment. Join Camelab today to explore a world where creativity meets earning potential seamlessly.                            </p>
                        </div>
                    </div>
                </div>

                {/* show case section  */}
                <div className={CamelabStyle['showcase-section']}>
                    <div className='container'>
                        <div className={CamelabStyle['showcase-heading-section']}>
                            <h2 className={CamelabStyle['main-heading']}>
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
                <div className={CamelabStyle['codecraft-section']}>
                    <div className='container'>
                        <div className={CamelabStyle['codecraft-heading-section']} id='craft-heading'>
                            <h2 className={CamelabStyle['main-heading']}>
                                Codecraft: <br />
                                <span>Camelab's</span> journey in Development
                            </h2>
                        </div>
                        <div className={CamelabStyle['codecraft-grid-section']}>
                            <div className='row'>
                                <div className={`col-lg-6 ${CamelabStyle['codecraft-text-part']}`}>
                                    <div id="codecraft-text-part-1">
                                        <p className={CamelabStyle['codecraft-text']}>
                                            The brand detail page offers comprehensive insights into selected Content videos. Brands can review video details, creator profiles, engagement metrics, and payment statuses, facilitating informed decisions and seamless collaboration with creators for impactful brand video opportunities.
                                        </p>
                                    </div>
                                    <div className={CamelabStyle['spacing']}></div>
                                    <div id="codecraft-text-part-2">
                                        <p className={CamelabStyle['codecraft-text']}>
                                            the admin interface displays a list of submitted Content videos for review. Admins can efficiently select or reject submissions based on quality, relevance to brand requirements, and alignment with campaign objectives, ensuring curated content that enhances brand engagement and creator satisfaction.                                        </p>
                                    </div>
                                    <div className={CamelabStyle['spacing']}></div>
                                    <div id="codecraft-text-part-3">
                                        <p className={CamelabStyle['codecraft-text']}>
                                            In the Camelab, brands can seamlessly browse and select compelling User-Generated Content (UGC) uploaded by creators through the mobile application. This feature facilitates easy identification and acquisition of engaging videos that align with brand objectives, ensuring a straightforward process for integrating impactful content into brand campaigns.                                        </p>
                                    </div>
                                    <div className={`${CamelabStyle['spacing']} ${CamelabStyle['spacing-last']}`}></div>
                                </div>
                                <div className={`col-lg-6 ${CamelabStyle['codecraft-img-part']}`}>
                                    <div className={CamelabStyle['sticky-part']}>
                                        <Image
                                            src={require('../../assets/images/work/2024/camelab/blankLaptop.png')}
                                            alt='code craft image'
                                            className={CamelabStyle['laptop-screen']}
                                            id='blank-laptop'
                                        />

                                        <div id="craft-img1" className={`${CamelabStyle['overlay-image-screen-part']} ${CamelabStyle['image1-div']} code-craft-image`}>
                                            <Image
                                                src={require('../../assets/images/work/2024/camelab/codeCraftImg2.png')}
                                                alt='code Craft Img1'
                                                className={CamelabStyle['code-craft-image']}
                                            />
                                        </div>
                                        <div id="craft-img2" className={`${CamelabStyle['overlay-image-screen-part']} ${CamelabStyle['image2-div']} code-craft-image`}>
                                            <Image
                                                src={require('../../assets/images/work/2024/camelab/codeCraftImg1.png')}
                                                alt='code Craft Img2'
                                                className={CamelabStyle['code-craft-image']}
                                            />
                                        </div>
                                        <div id="craft-img3" className={`${CamelabStyle['overlay-image-screen-part']} ${CamelabStyle['image3-div']} code-craft-image`}>
                                            <Image
                                                src={require('../../assets/images/work/2024/camelab/codeCraftImg3.png')}
                                                alt='code Craft Img3'
                                                className={CamelabStyle['code-craft-image']}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={CamelabStyle['codecraft-mobile-section']}>
                            <div className={CamelabStyle['code-craft-section']}>
                                <div className={CamelabStyle['codecraft-img-part']}>
                                    <div className='codecraft-mobile-img'>
                                        <Image
                                            src={require('../../assets/images/work/2024/camelab/codecraft-mobile-img1.png')}
                                            alt='code-craft image'
                                        />
                                    </div>
                                </div>
                                <div className={CamelabStyle['codecraft-text-part']}>
                                    <p className={CamelabStyle['codecraft-text']}>
                                        The brand detail page offers comprehensive insights into selected Content videos. Brands can review video details, creator profiles, engagement metrics, and payment statuses, facilitating informed decisions and seamless collaboration with creators for impactful brand video opportunities.
                                    </p>
                                </div>
                            </div>
                            <div className={CamelabStyle['code-craft-section']}>

                                <div className={CamelabStyle['codecraft-text-part']}>
                                    <p className={CamelabStyle['codecraft-text']}>
                                        the admin interface displays a list of submitted Content videos for review. Admins can efficiently select or reject submissions based on quality, relevance to brand requirements, and alignment with campaign objectives, ensuring curated content that enhances brand engagement and creator satisfaction.
                                    </p>
                                </div>
                                <div className={CamelabStyle['codecraft-img-part']}>
                                    <div className='codecraft-mobile-img'>
                                        <Image
                                            src={require('../../assets/images/work/2024/camelab/codecraft-mobile-img2.png')}
                                            alt='code-craft image'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={CamelabStyle['code-craft-section']}>
                                <div className={CamelabStyle['codecraft-img-part']}>
                                    <div className='codecraft-mobile-img'>
                                        <Image
                                            src={require('../../assets/images/work/2024/camelab/codecraft-mobile-img3.png')}
                                            alt='code-craft image'
                                        />
                                    </div>
                                </div>
                                <div className={CamelabStyle['codecraft-text-part']}>
                                    <p className={CamelabStyle['codecraft-text']}>
                                        In the Camelab, brands can seamlessly browse and select compelling User-Generated Content (UGC) uploaded by creators through the mobile application. This feature facilitates easy identification and acquisition of engaging videos that align with brand objectives, ensuring a straightforward process for integrating impactful content into brand campaigns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* feature section  */}
                <div className={CamelabStyle['feature-section']}>
                    <div className='container'>
                        <div className={CamelabStyle['feature-heading-section']}>
                            <h2 className={CamelabStyle['main-heading']} id='feature-heading'>
                                {displayedText}<span className={CamelabStyle.blinkingCursor}>|</span>
                            </h2>
                        </div>
                        <div className={CamelabStyle['feature-card-section']}>
                            <div className={CamelabStyle['feature-card-row']}>
                                <div className={[CamelabStyle['feature-card'], CamelabStyle['feature-card1']].join(' ')}>
                                    <div className='row'>
                                        <div className={`${CamelabStyle['image-part']} col-6`}>
                                            <Image
                                                src={require('../../assets/images/work/2024/camelab/featurecard1.png')}
                                                alt='feature card image'
                                            />
                                        </div>
                                        <div className={`${CamelabStyle['text-part']} col-6`}>
                                            <p className={CamelabStyle['card-text']}>
                                                Integrated Payment System when win any campaign. < span>For creators shows details only when a creator wins a campaign, including information about the reward and selection status.          </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={[CamelabStyle['feature-card'], CamelabStyle['feature-card2']].join(' ')}>
                                    <div className='row'>
                                        <div className={`${CamelabStyle['text-part']} col-6`}>
                                            <p className={CamelabStyle['card-text']}>
                                                Dashboard for brand.<span>Displays video submissions and campaign progress in detailed graphs, allowing brands to review, select content, and collaborate efficiently with creators. </span>                                            </p>
                                        </div>
                                        <div className={`${CamelabStyle['image-part']} col-6`}>
                                            <Image
                                                src={require('../../assets/images/work/2024/camelab/featurecard2.png')}
                                                alt='feature card image'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={CamelabStyle['feature-card-row']}>
                                <div className={[CamelabStyle['feature-card'], CamelabStyle['feature-card3']].join(' ')}>
                                    <div className='row'>
                                        <div className={`${CamelabStyle['image-part']} col-6`}>
                                            <Image
                                                src={require('../../assets/images/work/2024/camelab/featurecard3.png')}
                                                alt='feature card image'
                                            />
                                        </div>
                                        <div className={`${CamelabStyle['text-part']} col-6`}>
                                            <p className={CamelabStyle['card-text']}>
                                                Real-Time Collaboration Tools. <span>we use all to connect client and creator with all need video for client and video to create for creator by need video to create through mobile phone and we use easy tools to connect with each other.</span>
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

