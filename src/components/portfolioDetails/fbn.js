import React, { useEffect } from 'react'
import fbnStyles from '../../styles/portfolioDetails/fbn.module.scss';
import Image from 'next/image';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import data from '../../resources/portfolioDetails.json'
import Slider from './portfolioDetailsCommon/slider';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FBN() {

    useEffect(() => {
        AOS.init({
            duration: 2500,
            once: true, 
            offset: 0, 
        });
      }, []);

    return (
        <div className={portfolioDetailsCommon.mainSection}>
            <div className={fbnStyles.FBNMain}>
                <div className={fbnStyles.bannerSection}>
                    <div className="container">
                        <div className={`${fbnStyles.sectionContent}`}>
                            <h3 data-aos="slide-left" className={`${portfolioDetailsCommon.bannerPrimaryText}`}>
                                Achieve Mental Clarity with <span>FeelingBetterNow&reg;</span>
                            </h3>
                            <div data-aos="flip-up" className={`${fbnStyles.bannerImg}`}>
                                <div className={fbnStyles.bannerInnerImg}>
                                </div>
                            </div>
                            <p className={portfolioDetailsCommon.bannerSecondaryText}>
                                FeelingBetterNow&reg; offers a comprehensive online mental health risk assessment that is easy to use and recognized as the gold standard in mental health evaluation.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Slider slides={data.sliderdata.FBN} />
                </div>
                {/* tools and technology section  */}
                <div>
                    <div className={fbnStyles.MovingTechnologySection}>
                        <div className={fbnStyles.movingSection}>
                            <div className={fbnStyles.movingContainer}>
                                <div className={fbnStyles.content}>
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img1.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={`${fbnStyles.movingImg}`}
                                        src='/work/2024/fbn/tech-img2.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img3.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img4.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img5.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img6.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img7.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img8.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img9.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img10.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={fbnStyles.movingSection}>
                            <div className={fbnStyles.movingContainer2}>
                                <div className={fbnStyles.content}>

                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img11.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img12.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img13.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img14.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img15.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img16.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img17.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img18.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                    <Image className={fbnStyles.movingImg}
                                        src='/work/2024/fbn/tech-img19.svg'
                                        alt="Animated"
                                        height={100}
                                        width={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Additional Content */}
                <section className={fbnStyles['vaidCardsSection']}>
                    <div className="container">
                        <div>
                            <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>Codecraft: <br /><span>FellingBetterNow</span> journey in Development</h3>
                        </div>
                        <div className={fbnStyles['vaidcards']}>
                            <div data-aos="zoom-in-left" className={`${fbnStyles.cardbody}`}>
                                <div className={`${fbnStyles.mainCard}`} >
                                    <div className={`${fbnStyles.cardone}`}>
                                        <div className={`${fbnStyles.cardContent}`}>
                                            <h4>Personalized Health Tips and Medication Advice.</h4>
                                            <p>
                                                The AI-generated report provides precise health tips and medication recommendations tailored to your individual responses, addressing your specific needs and conditions&apos; requirements.
                                            </p>
                                            <img
                                                src='/work/2024/fbn/fbn-mobile1.svg'
                                                alt="Animated"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-right" className={`${fbnStyles.cardbody}`}>
                                <div className={`${fbnStyles.mainCard}`} >
                                    <div className={`${fbnStyles.cardtwo}`}>
                                        <div className={fbnStyles.cardContent}>
                                            <h4>Expert-Reviewed Recommendations.</h4>
                                            <p>
                                                The report, reviewed by over 33 healthcare professionals, provides accurate recommendations.
                                                You&apos;ll receive tailored health tips and medication advice to improve your mental well-being.
                                            </p>

                                            <img
                                                src='/work/2024/fbn/fbn-mobile2.svg'
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
                            <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>Innovative Features in <br /><span>FellingBetterNow</span></h3>
                        </div>

                        <div className={`${fbnStyles.innovativeCard}`}>
                            <div className={`${fbnStyles['reverseRow']} row`}>
                                <div className="col-md-5 d-flex">
                                    <img
                                    data-aos="slide-left"
                                        src='/work/2024/fbn/innovative-img1.png'
                                        alt="Animated"
                                        width="100%"
                                    />
                                </div>
                                <div className="col-md-7">
                                    <p>
                                        After viewing your results, you&apos;ll get a personalized self-care plan and a PDF report.
                                        The report uses<span> red for high risk, yellow for moderate risk, and green for low risk.</span>
                                        It includes actionable steps, resources, and medication guidance.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className={fbnStyles['innovativeCard']}>
                            <div className="row">
                                <div className="col-md-7">
                                    <p>
                                        After viewing your results, you&apos;ll get a personalized self-care plan and a PDF report.
                                        The report uses<span> red for high risk, yellow for moderate risk, and green for low risk.</span>
                                        It includes actionable steps, resources, and medication guidance.
                                    </p>
                                </div>
                                <div className="col-md-5 d-flex">
                                    <img
                                    data-aos="slide-right"
                                        src='/work/2024/fbn/innovative-img2.png'
                                        alt="Animated"
                                        width="100%"
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
