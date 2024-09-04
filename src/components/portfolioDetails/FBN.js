import React from 'react'
import fbnStyles from '../../styles/portfolioDetails/fbn.module.scss';
import Image from 'next/image';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import data from '../../resources/portfolioDetails.json'



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
                                src={require('../../assets/images/work/2024/fbn/fbn-banner.png')}
                                alt="Animated"
                            />
                        </div>
                        <p>FeelingBetterNow® offers a comprehensive online mental health risk assessment that is easy to use and recognized as the gold standard in mental health evaluation. Instantly view your results while being assured of your privacy, confidentiality, and anonymity. Take proactive steps with personalized self-care plans and access a wealth of mental health resources. You can return as often as you wish to track your progress and stay on top of your mental well-being.</p>
                    </div>
                </div>
            </div>


            {/* tools and technology section  */}
            <TechnologySection data={data.techdata.FBN}/>

            {/* <div className={fbnStyles['technology-section']}>
                <div className='container'>
                    <div className={fbnStyles['technology-heading-section']}>
                        <h2 className={fbnStyles['main-heading']}>
                            Tools & Technology
                        </h2>
                    </div>
                    <div className={fbnStyles['technology-row']}>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/NextJS.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Next JS
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/Firebase.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Firebase
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/Redux.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Redux
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/AWS.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                AWS
                            </p>
                        </div>

                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/ExpressJS.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Express JS
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/MaterialUI.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Material UI
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/ReactNative.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                React Native
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/React.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                React
                            </p>
                        </div>

                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/MongoDB.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                MongoDB
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/Azure.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Azure
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/Pdfmake.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Pdfmake
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/Node.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Node
                            </p>
                        </div>

                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/StyledComponents.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Styled Components
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/Redis.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Redis
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/ChartJS.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Chart JS
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/MySQL.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                MySQL
                            </p>
                        </div>

                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/Kubernetes.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Kubernetes
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/Sequelize.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Sequelize
                            </p>
                        </div>
                        <div className={fbnStyles['technology']}>
                            <Image
                                src={require('../../assets/images/work/technology-icons/tech/Git.svg')}
                            />
                            <p className={fbnStyles['technology-text']}>
                                Git
                            </p>
                        </div>

                    </div>
                </div>
            </div> */}


            {/* Additional Content */}
            <section className={fbnStyles['vaidCardsSection']}>
                <div className="container">
                    <div>
                        <h3 className={fbnStyles['mainheading']}>Codecraft: <br /> <span>VAID’s</span> journey in Development</h3>
                    </div>
                    <div className={fbnStyles['vaidcards']}>
                        <div className={fbnStyles['cardbody']}>
                            <div className="row">
                                <div className="col-6">
                                    <Image
                                        src={require('../../assets/images/work/2024/vaid/vaidCardImg1.png')}
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
                                        src={require('../../assets/images/work/2024/vaid/vaidCardImg1.png')}
                                        alt="Animated"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
