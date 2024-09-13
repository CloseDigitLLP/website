import React, { useEffect, useState } from 'react'
import fbnStyles from '../../styles/portfolioDetails/fbn.module.scss';
import Image from 'next/image';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import data from '../../resources/portfolioDetails.json'
import Slider from './portfolioDetailsCommon/slider';
import $ from 'jquery';


export default function FBN() {
    const [displayedText, setDisplayedText] = useState('');
    const [textLength, setTextLength] = useState(0);
    const typeText = 'Improve Mental Health Outcomes for your organization with FeelingBetterNow®';

    useEffect(() => {
        const doAnimations = () => {
            const offset = $(window).scrollTop() + $(window).height();
            const $animatables = $('.animatable');

            if ($animatables.length === 0) {
                $(window).off('scroll', doAnimations);
            }

            $animatables.each(function () {
                const $animatable = $(this);
                if (($animatable.offset().top + $animatable.height() - 150) < offset) {
                    $animatable.removeClass('animatable').addClass('animated');
                }
            });
        };

        $(window).on('scroll', doAnimations);
        $(window).trigger('scroll');
        return () => {
            $(window).off('scroll', doAnimations);
        };
    }, []);


    useEffect(() => {
        if (textLength < typeText.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + typeText.charAt(textLength));
                setTextLength((prev) => prev + 1);
            }, 80);
            return () => clearTimeout(timeoutId);
        } else if (textLength === typeText.length) {
            const resetTimeoutId = setTimeout(() => {
                setDisplayedText('');
                setTextLength(0);
            }, 1000);
            return () => clearTimeout(resetTimeoutId);
        }
    }, [textLength]);

    return (
        <div className={portfolioDetailsCommon.mainSection}>
            <div className={fbnStyles.FBNMain}>
                <div className={fbnStyles.bannerSection}>
                    <div className="container">
                        <div className={`${fbnStyles.sectionContent}`}>
                            <h3 className={portfolioDetailsCommon.bannerPrimaryText}>Achieve Mental Clarity with
                                <span> FeelingBetterNow®</span>
                            </h3>
                            <div className={fbnStyles.bannerImg}>
                                {/* <Image
                                src={require('../../assets/images/work/2024/fbn/gif5.gif')}
                                alt="Animated"
                                /> */}
                                <h2>
                                    {displayedText}
                                </h2>
                            </div>
                            <p className={portfolioDetailsCommon.bannerSecondaryText}>FeelingBetterNow® offers a comprehensive online mental health risk assessment that is easy to use and recognized as the gold standard in mental health evaluation. Instantly view your results while being assured of your privacy, confidentiality, and anonymity. Take proactive steps with personalized self-care plans and access a wealth of mental health resources. You can return as often as you wish to track your progress and stay on top of your mental well-being.</p>
                        </div>
                    </div>
                </div>
                <div className='animatable fadeInDown'>
                    <Slider slides={data.sliderdata.FBN} />
                </div>
                {/* tools and technology section  */}
                <div className='animatable fadeInDown'>
                    <div className={fbnStyles.MovingTechnologySection}>
                        <div className={fbnStyles.movingSection}>
                            <div className={fbnStyles.movingContainer}>
                                <div className={fbnStyles.content}>
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img1.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={`${fbnStyles.movingImg}`}
                                        src={require('../../assets/images/work/2024/fbn/tech-img2.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img3.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img4.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img5.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img6.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img7.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img8.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img9.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img10.svg')}
                                        alt="Animated"
                                    />

                                </div>
                            </div>
                        </div>
                        <div className={fbnStyles.movingSection}>
                            <div className={fbnStyles.movingContainer2}>
                                <div className={fbnStyles.content}>

                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img11.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img12.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img13.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img14.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img15.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img16.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img17.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img18.svg')}
                                        alt="Animated"
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src={require('../../assets/images/work/2024/fbn/tech-img19.svg')}
                                        alt="Animated"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Additional Content */}
                <section className={fbnStyles['vaidCardsSection']}>
                    <div className="container">
                        <div className='animatable bounceInRight'>
                            <h3 className={portfolioDetailsCommon['mainheading']}>Codecraft: <br /><span>FellingBetterNow</span> journey in Development</h3>
                        </div>
                        <div className={fbnStyles['vaidcards']}>
                            <div className={fbnStyles['cardbody']}>
                                <div className={`${fbnStyles.mainCard}animatable bounceInLeft`} >
                                    <div className={`${fbnStyles.cardone}`}>
                                        <div className={fbnStyles.cardContent}>
                                            <h4>Personalized Health Tips and Medication Advice.</h4>
                                            <p>
                                                The AI-generated report provides precise health tips and medication recommendations tailored to your individual responses, addressing your specific needs and conditions.
                                            </p>
                                            <Image className={fbnStyles.movingImg}
                                                src={require('../../assets/images/work/2024/fbn/fbn-mobile1.svg')}
                                                alt="Animated"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={fbnStyles['cardbody']}>
                                <div className={`${fbnStyles.mainCard}animatable bounceInLeft`} >
                                    <div className={`${fbnStyles.cardtwo}`}>
                                        <div className={fbnStyles.cardContent}>
                                            <h4>Expert-Reviewed Recommendations.</h4>
                                            <p>
                                                The report, reviewed by over 33 healthcare professionals, provides accurate recommendations. You'll receive tailored health tips and medication advice to improve your mental well-being.
                                            </p>
                                            <Image className={fbnStyles.movingImg}
                                                src={require('../../assets/images/work/2024/fbn/fbn-mobile2.svg')}
                                                alt="Animated"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={fbnStyles['innovativeSection']}>
                    <div className="container">
                        <div>
                            <h3 className={portfolioDetailsCommon['mainheading']}>Innovative Features in <br /><span>FellingBetterNow</span></h3>
                        </div>

                        <div className={fbnStyles['innovativeCard']}>
                            <div className={`${fbnStyles['reverseRow']} row`}>
                                <div className="col-md-5 d-flex">
                                    <Image
                                        src={require('../../assets/images/work/2024/fbn/innovative-img1.png')}
                                        alt="Animated"
                                    />
                                </div>
                                <div className="col-md-7">
                                    <p>After viewing your results, you'll get a personalized self-care plan and a PDF report. The report uses<span> red for high risk, yellow for moderate risk, and green for low risk.</span> It includes actionable steps, resources, and medication guidance.</p>
                                </div>
                            </div>
                        </div>
                        <div className={fbnStyles['innovativeCard']}>
                            <div className="row">
                                <div className="col-md-7">
                                    <p>After viewing your results, you'll get a personalized self-care plan and a PDF report. The report uses<span> red for high risk, yellow for moderate risk, and green for low risk.</span> It includes actionable steps, resources, and medication guidance.</p>
                                </div>
                                <div className="col-md-5 d-flex">
                                    <Image
                                        src={require('../../assets/images/work/2024/fbn/innovative-img2.png')}
                                        alt="Animated"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
