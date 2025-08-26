/* eslint-disable @next/next/no-img-element */
import TonightBandStyles from './../../styles/portfolioDetails/tonightband.module.scss';
import portfolioCommonStyles from './../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import Image from 'next/image';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import data from '../../resources/portfolioDetails.json';

const TonightBandPage = () => {
    return (
        <>
            <div className={TonightBandStyles.TonightBandPage}>
                <div className={TonightBandStyles.bannerSection}>
                    <div className="container">
                        <h2 className={portfolioCommonStyles.bannerPrimaryText}>
                            Live Music for Unforgettable Events<br />
                            <span className={TonightBandStyles.mainHeadingSpan}>Tonight Band</span>
                        </h2>
                        <div className={TonightBandStyles.LaptopContainer}>
                            <img src='/work/2024/tonight-band/laptop-mockup.svg' alt='Tonight Band Laptop ' className={TonightBandStyles.laptopMockup} />
                            <div className={TonightBandStyles.videoContainer}>
                                <div className={TonightBandStyles.shiningBorder}>
                                    <video width="100%" height="auto" autoPlay muted loop>
                                        <source src="/work/2024/tonight-band/tonight-band.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className={TonightBandStyles.bannerTextContainer}>
                            <p className={portfolioCommonStyles.bannerSecondaryText}>
                                The Tonight Band website showcases a professional music group specializing in live performances for weddings and events. They focus on delivering high-energy shows with a talented team of musicians, including singers, instrumentalists, and performers who create a luxurious, unforgettable atmosphere. Their expertise spans a wide variety of music styles, from classical and traditional to contemporary hits, ensuring a personalized and electric experience for every occasion. The band prides itself on attention to detail, originality, and high-level sound quality.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={TonightBandStyles.designSection}>
                    <div className='container'>
                        <h3 className={portfolioCommonStyles['mainheading']}>
                            Innovative design solution:
                            <br /><span className={TonightBandStyles.mainHeadingSpan}>Tonight Band </span>
                        </h3>
                        <div className={TonightBandStyles.designImageWrapper}>
                            <Image
                                src='/work/2024/tonight-band/tonightband-design.png'
                                width={862}
                                height={540}
                                alt='Tonight Band Design'
                                className={TonightBandStyles.designImage1}
                            />
                        </div>
                        <p>The Tonight Band website is designed to reflect the group’s energy, elegance, and professionalism. Rich, luxurious tones, dynamic imagery, and performance clips bring the live show atmosphere online. A clean, responsive layout highlights services, music styles, and event packages, ensuring easy navigation. Subtle animations and modern typography enhance the premium feel, perfectly mirroring the band’s attention to detail and unforgettable performances.</p>
                    </div>
                </div>
                <TechnologySection data={data.techdata.tonightBand} />
                <div className={TonightBandStyles.codeCraftSection}>
                    <div className='container'>
                        <h3 className={portfolioCommonStyles['mainheading']}>
                            Codecraft:
                            <br /><span className={TonightBandStyles.mainHeadingSpan}>Tonight Band </span> journey in Development
                        </h3>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <Image
                                    src='/work/2024/tonight-band/tonightband-codecraft.png'
                                    width={486}
                                    height={380}
                                    alt='Tonight Band Codecraft'
                                />
                            </div>
                            <div className='col-lg-7'>
                                <p>We built The Tonight Band’s website on WordPress using Elementor, combining clean, optimized code with a visually rich, performance-focused structure. Custom sections were created for showcasing music styles, event packages, and live performance galleries, each enhanced with smooth animations and interactive elements. The site is fully responsive, ensuring perfect viewing on all devices, and optimized for fast loading and SEO to reach a wider audience. Every detail, from hover effects to mobile navigation, was crafted to deliver a seamless and premium digital experience that mirrors the band’s high-energy, luxury performances.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={TonightBandStyles.featureSection}>
                    <div className='container'>
                        <h3 className={portfolioCommonStyles['mainheading']}>
                            Innovative Features in
                            <br /><span className={TonightBandStyles.mainHeadingSpan}>Tonight Band</span>
                        </h3>
                        <div className={TonightBandStyles.featureCard}>
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <p>We use WordPress, Elementor, and GoDaddy as key tools in our website development process. These platforms allow us to create visually appealing, user-friendly websites with efficient workflows and reliable hosting, ensuring seamless functionality and ease of management.</p>
                                </div>
                                <div className='col-lg-5'>
                                    <div className='d-flex justify-content-center align-items-end'>
                                        <Image
                                            src='/work/2024/tonight-band/feature1.png'
                                            width={440}
                                            height={330}
                                            alt='Tonight Band Features'
                                            className={TonightBandStyles.featureImage}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={TonightBandStyles.featureCard}>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='d-flex justify-content-center align-items-end'>
                                        <Image
                                            src='/work/2024/tonight-band/feature2.png'
                                            width={440}
                                            height={330}
                                            alt='Tonight Band Features'
                                            className={TonightBandStyles.featureImage}
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-7'>
                                    <p>We create vector images to make complex concepts easier to understand. These scalable graphics maintain clarity at any size, ensuring that information is communicated effectively and visually across all platforms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TonightBandPage;