import React, { useEffect, useRef } from 'react';
import CamelabStyle from '../../styles/portfolioDetails/camelab.module.scss';
import Image from 'next/image';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const options = {
    margin: 20,
    loop: true,
    rtl: true,
    responsiveClass: true,
    nav: true,
    navClass: [`${CamelabStyle['circle-btn']} ${CamelabStyle['left-btn']}`, `${CamelabStyle['circle-btn']} ${CamelabStyle['right-btn']}`],
    dots: false,
    autoplay: false,
    stagePadding: 0,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2,
        },
        1800: {
            items: 3
        }
    },
};

export default function Camelab() {

    useEffect(() => {
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
                    <div className={CamelabStyle['slider-part']}>

                        <OwlCarousel className={`${CamelabStyle['owlcarousel']} ${CamelabStyle['review-owlcarousel']}`} rtl={true} navText={["", ""]}  {...options}>
                            <div className={CamelabStyle['slider-card']}>
                                <div className={CamelabStyle['slider-img-part']}>
                                    <Image
                                        src={require('../../assets/images/work/2024/camelab/camelabSliderImg1.png')}
                                        alt="camelab slider image"
                                    />
                                </div>
                                <div className={CamelabStyle['slider-text-part']}>
                                    <p className={CamelabStyle['slider-text']}>
                                        Camelab admin dashboard provides comprehensive insights into creator submissions and brand selections of User-Generated Content (UGC). It tracks video uploads, categorization, brand engagements, and creator payments seamlessly.
                                    </p>
                                </div>
                            </div>
                            <div className={CamelabStyle['slider-card']}>
                                <div className={CamelabStyle['slider-img-part']}>
                                    <Image
                                        src={require('../../assets/images/work/2024/camelab/camelabSliderImg2.png')}
                                        alt="camelab slider image"
                                    />
                                </div>
                                <div className={CamelabStyle['slider-text-part']}>
                                    <p className={CamelabStyle['slider-text']}>
                                        The Camelab mobile app's detail page offers brands a comprehensive view of uploaded Content. It showcases video details, creator information, and engagement metrics, facilitating seamless selection and collaboration with creators for impactful brand campaigns.
                                    </p>
                                </div>
                            </div>
                            <div className={CamelabStyle['slider-card']}>
                                <div className={CamelabStyle['slider-img-part']}>
                                    <Image
                                        src={require('../../assets/images/work/2024/camelab/camelabSliderImg3.png')}
                                        alt="camelab slider image"
                                    />
                                </div>
                                <div className={CamelabStyle['slider-text-part']}>
                                    <p className={CamelabStyle['slider-text']}>
                                        Creating a new campaign on Camelab involves brands outlining their campaign goals and target audience demographics. They then specify criteria for desired Content and set a budget.
                                    </p>
                                </div>
                            </div>
                            <div className={CamelabStyle['slider-card']}>
                                <div className={CamelabStyle['slider-img-part']}>
                                    <Image
                                        src={require('../../assets/images/work/2024/camelab/camelabSliderImg4.png')}
                                        alt="camelab slider image"
                                    />
                                </div>
                                <div className={CamelabStyle['slider-text-part']}>
                                    <p className={CamelabStyle['slider-text']}>
                                        The Camelab mobile dashboard empowers creators with filters to manage submissions, track uploads and earnings, view brand selections, and handle rejections, ensuring streamlined and transparent engagement.
                                    </p>
                                </div>
                            </div>
                        </OwlCarousel>

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

                {/* code craft section  */}
                <div className={CamelabStyle['codecraft-section']}>
                    <div className='container'>
                        <div className={CamelabStyle['codecraft-heading-section']}>
                            <h2 className={CamelabStyle['main-heading']}>
                                Codecraft: <br />
                                <span>Camelab's</span> journey in Development
                            </h2>
                        </div>
                        <div className={CamelabStyle['codecraft-grid-section']}>
                            <div className='row'>
                                <div className={`col-lg-6 col-sm-12 ${CamelabStyle['codecraft-text-part']}`}>
                                    <p className={CamelabStyle['codecraft-text']}>
                                        the brand detail page offers comprehensive insights into selected Content  videos. Brands can review video details, creator profiles, engagement metrics, and payment statuses, facilitating informed decisions and seamless collaboration with creators for impactful brand video opportunities.
                                    </p>
                                </div>
                                <div className={`col-lg-6 col-sm-12 ${CamelabStyle['codecraft-img-part']}`}>
                                    <Image
                                        src={require('../../assets/images/work/2024/camelab/blankLaptop.png')}
                                        alt='code craft image'
                                    />
                                </div>
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
