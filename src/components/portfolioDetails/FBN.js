import React from 'react'
import fbnStyles from '../../styles/portfolioDetails/fbn.module.scss';
import Image from 'next/image';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import data from '../../resources/portfolioDetails.json'
import Slider from './portfolioDetailsCommon/slider';



export default function FBN() {
    return (
        <div className={fbnStyles.mainSection}>
            <div className={fbnStyles.bannerSection}>
                <div className="container">
                    <div className={fbnStyles.sectionContent}>
                        <h3>Achieve Mental Clarity
                            <span> with FeelingBetterNow®</span>
                        </h3>
                        <div>
                            <Image
                                src={require('../../assets/images/work/2024/fbn/gif5.gif')}
                                alt="Animated"
                            />
                        </div>

                        <p>FeelingBetterNow® offers a comprehensive online mental health risk assessment that is easy to use and recognized as the gold standard in mental health evaluation. Instantly view your results while being assured of your privacy, confidentiality, and anonymity. Take proactive steps with personalized self-care plans and access a wealth of mental health resources. You can return as often as you wish to track your progress and stay on top of your mental well-being.</p>
                    </div>
                </div>
            </div>

            <Slider slides={data.sliderdata.FBN} />


            {/* tools and technology section  */}


            {/* <div className={fbnStyles.blobBG}>
                <div className={fbnStyles.blobContainer}>
                </div>

                <div className={fbnStyles.techSection}>
                    <TechnologySection data={data.techdata.FBN} />
                </div>
            </div> */}

            <TechnologySection data={data.techdata.FBN} />

            {/* Additional Content */}
            <section className={fbnStyles['vaidCardsSection']}>
                <div className="container">
                    <div>
                        <h3 className={fbnStyles['mainheading']}>Codecraft: <br /><span>FellingBetterNow</span> journey in Development</h3>
                    </div>
                    <div className={fbnStyles['vaidcards']}>
                        <div className={fbnStyles['cardbody']}>
                            <div className="row">
                                <div className="col-6">
                                    <Image
                                        src={require('../../assets/images/work/2024/fbn/fbn-card1.png')}
                                        alt="Animated"
                                    />
                                </div>

                                <div className={`col-6 ${fbnStyles.leftTextPart}`}>
                                    <div>
                                        <h6>Message data management System with Smart Contracts. <span>We specialize in integrating secure data and privacy of messages, ensuring smooth conversations between two people.</span> </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={fbnStyles['cardbody']}>
                            <div className="row">
                                <div className={`col-6 ${fbnStyles.rightTextPart}`}>
                                    <div>
                                        <h6>Message data management System with Smart Contracts. <span>We specialize in integrating secure data and privacy of messages, ensuring smooth conversations between two people.</span> </h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <Image
                                        src={require('../../assets/images/work/2024/fbn/fbn-card2.png')}
                                        alt="Animated"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={fbnStyles['innovativeSection']}>
                <div className="container">
                    <div>
                        <h3 className={fbnStyles['mainheading']}>Innovative Features in <br /><span>FellingBetterNow</span></h3>
                    </div>

                    <div className={fbnStyles['innovativeCard']}>
                        <div className="row">
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
    )
}
