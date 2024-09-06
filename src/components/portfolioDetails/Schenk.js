import React, { useEffect, useState, useRef } from 'react';
import schenkStyles from '../../styles/portfolioDetails/schenk.module.scss';
import Image from 'next/image';
import Slider from './portfolioDetailsCommon/slider';
import data from '../../resources/portfolioDetails.json';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import dynamic from 'next/dynamic';

const ScrollMagic = dynamic(() => import('scrollmagic'), { ssr: false });
const ScrollMagicController = dynamic(() => import('scrollmagic').then(mod => mod.Controller), { ssr: false });

export default function Schenk() {
    const controller = useRef(null);
    const text = 'Innovative Features in schenk';
    const [displayedText, setDisplayedText] = useState('');
    const [textLength, setTextLength] = useState(0);
    const [typingStarted, setTypingStarted] = useState(false);

    useEffect(() => {
        document.querySelector(`.${schenkStyles['laptop-img']}`).classList.add(schenkStyles['animate-laptop']);
        document.querySelector(`.${schenkStyles['mobile-img']}`).classList.add(schenkStyles['animate-mobile']);
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
        <div className={schenkStyles['schenk-section']}>
            {/* banner section  */}
            <div className={schenkStyles['banner-section']}>
                <div className='container'>
                    <div className={schenkStyles['banner-heading-section']}>
                        <h2 className={schenkStyles['main-heading']}>
                            Building Excellence with Experience
                            <span> Schenk Construction Group</span>
                        </h2>
                    </div>
                </div>
                <div className={schenkStyles['banner-img-part']}>
                    <div>
                        <Image
                            src={require('../../assets/images/work/2024/schenk/banner-laptop.png')}
                            alt="camelab laptop screen"
                            className={`${schenkStyles['laptop-img']} ${schenkStyles['initial-laptop']}`}
                        />
                    </div>
                    <div className={schenkStyles['mobile-img-section']}>
                        <Image
                            src={require('../../assets/images/work/2024/schenk/banner-mobile.png')}
                            alt=" camelab mobile screen"
                            className={`${schenkStyles['mobile-img']} ${schenkStyles['initial-mobile']}`}
                        />
                    </div>
                </div>
                <div className='container'>
                    <div className={schenkStyles['banner-text-part']}>
                        <p className={schenkStyles['banner-text']}>
                            Schenk Construction Group, established in 2014 by Jack Meridjanian, delivers exceptional building services with a focus on quality and expertise. We handle residential and commercial projects, from new builds to refurbishments, alterations, and commercial fit-outs. Our team is dedicated to providing tailored solutions and a seamless, stress-free experience. Contact us to see how we can bring your vision to life.                            </p>
                    </div>
                </div>
            </div>

            {/* slider section  */}
            <div className={schenkStyles['showcase-section']}>
                <div className='container'>
                    <div className={schenkStyles['showcase-heading-section']}>
                        <h2 className={schenkStyles['main-heading']}>
                            Innovative design solution for website: <br />
                            <span>Schenk</span> Showcase
                        </h2>
                    </div>
                </div>

                <Slider slides={data.sliderdata.schenk} />

            </div>

            {/* technology section  */}
            <TechnologySection data={data.techdata.schenk} />

            {/* feature section  */}
            <div className={schenkStyles['feature-section']}>
                <div className='container'>
                    <div className={schenkStyles['feature-heading-section']}>
                        <h2 className={schenkStyles['main-heading']} id='feature-heading'>
                            {displayedText}<span className={schenkStyles.blinkingCursor}>|</span>
                        </h2>
                    </div>
                    <div className={schenkStyles['feature-content-section']}>
                        <div className='row'>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <div className={schenkStyles['feature-text-part']}>
                                    <p>
                                        Explore Shenk Construction Group’s standout projects. Our designs showcase highrise apartments, commercial spaces, and residential villas, all crafted with a focus on quality, innovation, and functionality. See how our work brings excellence to every detail.
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className={schenkStyles['feature-image-part']}>
                                    <Image
                                        src={require('../../assets/images/work/2024/schenk/schenk-feature.png')}
                                        alt=" camelab mobile screen"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}