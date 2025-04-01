import React, { useEffect } from 'react'
import commbitzeStryle from '../../styles/portfolioDetails/commbitze.module.scss';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import data from '../../resources/portfolioDetails.json'
import Slider from './portfolioDetailsCommon/slider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TechnologySection from './portfolioDetailsCommon/technologySection';


export default function Commbitze() {

    useEffect(() => {
        AOS.init({
            duration: 2500,
            once: true, 
            offset: 0, 
        });
      }, []);

    return (
        <div className={portfolioDetailsCommon.mainSection}>
            <div className={commbitzeStryle.FBNMain}>
                <div className={commbitzeStryle.bannerSection}>
                    <div className="container">
                        <div className={`${commbitzeStryle.sectionContent}`}>
                            <h3 data-aos="slide-left" className={`${portfolioDetailsCommon.bannerPrimaryText}`}>
                                Achieve Mental Clarity with <span>FeelingBetterNow&reg;</span>
                            </h3>
                            <div data-aos="flip-up" className={`${commbitzeStryle.bannerImg}`}>
                                <div className={commbitzeStryle.bannerInnerImg}>
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
                <TechnologySection data={data.techdata.FBN} />
                </div>
                {/* Additional Content */}
                <section className={commbitzeStryle['vaidCardsSection']}>
                    <div className="container">
                        <div>
                            <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>Codecraft: <br /><span>FellingBetterNow</span> journey in Development</h3>
                        </div>
                        <div className={commbitzeStryle['vaidcards']}>
                            <div data-aos="zoom-in-left" className={`${commbitzeStryle.cardbody}`}>
                                <div className={`${commbitzeStryle.mainCard}`} >
                                    <div className={`${commbitzeStryle.cardone}`}>
                                        <div className={`${commbitzeStryle.cardContent}`}>
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
                            <div data-aos="zoom-in-right" className={`${commbitzeStryle.cardbody}`}>
                                <div className={`${commbitzeStryle.mainCard}`} >
                                    <div className={`${commbitzeStryle.cardtwo}`}>
                                        <div className={commbitzeStryle.cardContent}>
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
                <section className={commbitzeStryle['innovativeSection']}>
                    <div className="container">
                        <div>
                            <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>Innovative Features in <br /><span>FellingBetterNow</span></h3>
                        </div>

                        <div className={`${commbitzeStryle.innovativeCard}`}>
                            <div className={`${commbitzeStryle['reverseRow']} row`}>
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
                        <div className={commbitzeStryle['innovativeCard']}>
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
