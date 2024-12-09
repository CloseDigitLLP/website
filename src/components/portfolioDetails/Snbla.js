import React, { useRef, useEffect, useState } from "react"
import snblaStyles from '../../styles/portfolioDetails/snbla.module.scss';
import Image from 'next/image';
import dynamic from "next/dynamic";
import Slider from "./portfolioDetailsCommon/slider";
import data from '../../resources/portfolioDetails.json'
import TechnologySection from "./portfolioDetailsCommon/technologySection";

const ScrollMagic = dynamic(() => import('scrollmagic'), { ssr: false });

export default function Snbla() {
    const controller = useRef(null);
    const text = 'Innovative Features in Snbla';
    const [displayedText, setDisplayedText] = useState('');
    const [textLength, setTextLength] = useState(0);
    const [typingStarted, setTypingStarted] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        // Debugging: Check if videoRef is correctly set

        if (!video) {
            console.error('Video element not found!');
            return;
        }

        // Function to synchronize the video with the scroll position
        const syncVideoWithScroll = () => {
            if (!video || video.readyState < 2) {
                console.warn('Video not ready yet.');
                return;
            }

            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Calculate the scroll percentage between 0 and 1
            const scrollPercent = scrollPosition / (documentHeight - windowHeight);

            // Map the scroll percentage to the video's duration
            const videoDuration = video.duration;
            const newTime = scrollPercent * videoDuration;

            // Set the current time of the video based on scroll position
            video.currentTime = newTime;
        };

        // Event listener to pause the video when scroll ends
        const handleScrollPause = () => {
            setTimeout(() => {
                if (video) video.pause();
            }, 100);
        };

        // Attach event listeners when video metadata is loaded
        const handleLoadedMetadata = () => {
            window.addEventListener('scroll', syncVideoWithScroll);
            window.addEventListener('scroll', handleScrollPause);
        };

        // Check if video metadata is already loaded
        if (video.readyState >= 1) {
            handleLoadedMetadata();
        } else {
            video.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        // Cleanup function to remove event listeners
        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            window.removeEventListener('scroll', syncVideoWithScroll);
            window.removeEventListener('scroll', handleScrollPause);
        };
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
                <div className="container">
                    <h2 className={snblaStyles['main-heading']}>
                        Shop Now, Pay Later <br />
                        <span>No Fees, No Credit Cards!</span>
                    </h2>
                    <div className={snblaStyles['video-part']}>
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