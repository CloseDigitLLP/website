import React, { useEffect } from 'react';
import CamelabStyle from '../../styles/portfolioDetails/camelab.module.scss';
import Image from 'next/image';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
// import 'owl.carousel';

export default function Camelab() {
    useEffect(() => {
        // Add a class to trigger the animation after the component mounts
        document.querySelector(`.${CamelabStyle['laptop-img']}`).classList.add(CamelabStyle['animate-laptop']);
        document.querySelector(`.${CamelabStyle['mobile-img']}`).classList.add(CamelabStyle['animate-mobile']);
    }, []);


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
                        Innovative design solution: <br/>
                         <span>Camelab</span> Showcase  
                        </h2>
                    </div>
                    </div>
                </div>

                {/* tools and technology section  */}
                <div className={CamelabStyle['technology-section']}>
                    <div className='container'>
                     <div className={CamelabStyle['technology-heading-section']}>
                        <h2 className={CamelabStyle['main-heading']}>
                        Tools & Technology
                        </h2>
                     </div>
                     <div className={CamelabStyle['technology-row']}>
                        <div className={CamelabStyle['technology']}>
                            <Image
                             src={require('../../assets/images/work/2024/tech icons/react.svg')}
                            />
                            <p className={CamelabStyle['technology-text']}>
                            React
                            </p>
                        </div>
                        <div className={CamelabStyle['technology']}>
                            <Image
                             src={require('../../assets/images/work/2024/tech icons/mysql.svg')}
                            />
                            <p className={CamelabStyle['technology-text']}>
                            MySQL
                            </p>
                        </div>
                        <div className={CamelabStyle['technology']}>
                            <Image
                             src={require('../../assets/images/work/2024/tech icons/redux.svg')}
                            />
                            <p className={CamelabStyle['technology-text']}>
                            Redux
                            </p>
                        </div>
                        <div className={CamelabStyle['technology']}>
                            <Image
                             src={require('../../assets/images/work/2024/tech icons/muitheme.svg')}
                            />
                            <p className={CamelabStyle['technology-text']}>
                            MUI Theme
                            </p>
                        </div>
                        <div className={CamelabStyle['technology']}>
                            <Image
                             src={require('../../assets/images/work/2024/tech icons/firebase.svg')}
                            />
                            <p className={CamelabStyle['technology-text']}>
                            Firebase
                            </p>
                        </div>
                        <div className={CamelabStyle['technology']}>
                            <Image
                             src={require('../../assets/images/work/2024/tech icons/react.svg')}
                            />
                            <p className={CamelabStyle['technology-text']}>
                            React Native
                            </p>
                        </div>
                     </div>
                     </div>
                </div>

                {/* feature section  */}
                <div className={CamelabStyle['feature-section']}>
                    <div className='container'>
                        <div className={CamelabStyle['feature-heading-section']}>
                            <h2 className={CamelabStyle['main-heading']}>
                                Innovative Features in <span>Camelab</span>
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

