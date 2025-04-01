import allureStyle from '../../styles/portfolioDetails/allure.module.scss'
import React, { useEffect } from 'react';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import data from '../../resources/portfolioDetails.json';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function DataSync() {

    useEffect(() => {
        AOS.init({
            duration: 1600,
            once: true,
            offset: 0,
        });
    }, [])

    return (
        <div className={portfolioDetailsCommon.mainSection}>
            <div className={allureStyle.bannerSection}>
                <div className="container">
                    <div className={`${allureStyle.sectionContent}`}>
                        <h3 data-aos="slide-left" className={portfolioDetailsCommon.bannerPrimaryText}>Brilliant Designs, Brands that Shine
                            <br />
                            <span className={allureStyle.mainheadingSpan}>Allure Studio</span>
                        </h3>
                        <div data-aos="flip-up" className={allureStyle.bannerImg}>
                            <div className={allureStyle.bannerInnerImg}>
                            </div>
                        </div>
                        <p className={portfolioDetailsCommon.bannerSecondaryText}>At Allure Studio, we specialize in transforming brands with creative, high-impact design solutions. As a boutique design studio, we are dedicated to crafting visually stunning logos, compelling marketing materials, and bespoke signage that resonate with your target audience. Our goal is to elevate your brand’s identity and presence, making it unforgettable. With a personalized approach to every project, we ensure that each design not only captivates but also empowers your brand to thrive in today’s competitive market.</p>
                    </div>
                </div>
            </div>


            {/* innovative Design Section */}
            <div className={allureStyle.innovativeDesignSection}>
                <div className="container">
                    <h3 data-aos="slide-left" className={portfolioDetailsCommon.mainheading}>Innovative design solution: <br />
                        <span className={allureStyle.mainheadingSpan}>Allure</span>
                    </h3>
                    <div className={allureStyle.innovativeContent}>
                        <Image src="/work/2024/allure/laptop-img.svg" width={400} height={400} layout='responsive' alt="img" />
                    </div>
                    <p className={portfolioDetailsCommon.bannerSecondaryText}>At Allure Studio, we craft stunning designs that captivate and elevate your brand. Our work is organized into clear, distinct sections, making it easy for users to explore and find exactly what they’re looking for. Whether it’s captivating logos, impactful marketing materials, or bespoke signage, we ensure a seamless experience that allows your brand to shine in every aspect. With a focus on clarity and user-friendly design, we make sure your vision comes to life in a way that resonates with your audience.</p>
                </div>
            </div>


            {/* window Section */}
            <div className={allureStyle.windowSection}>
                <div className='container'>
                    <div className={allureStyle.windowPart}>
                        <div className={allureStyle.leftWindow}>
                            <img src="/work/2024/allure/windowImg1.svg" alt="img" />
                        </div>
                        <div className={allureStyle.rightWindow}>
                            <img src="/work/2024/allure/windowImg2.svg" alt="img" />
                        </div>
                    </div>
                    <p className={portfolioDetailsCommon.bannerSecondaryText}>At Allure Studio, we design intuitive sections that display your product details in a clear and organized manner. Our approach ensures that every product is showcased with full details, allowing users to easily explore and understand what your brand offers. From captivating logos to bespoke signage, we elevate your brand while providing a seamless experience that highlights your products effectively. With user-friendly designs, we make it simple for customers to access all the information they need.</p>
                </div>
            </div>
            <TechnologySection data={data.techdata.datasync} />

            {/* Codecraft section*/}
            <div className={allureStyle.codecraftSection}>
                <div className='container'>
                    <h3 className={portfolioDetailsCommon.bannerPrimaryText}>
                        Codecraft: <br /><span className={allureStyle.mainheadingSpan}>Allure</span> journey in Development
                    </h3>
                    <div className={allureStyle.contentPart}>
                        <div className='row g-4'>
                            <div className="col-lg-6">
                                <img src="/work/2024/allure/code-craft.svg" alt="img" width='100%' />
                            </div>
                            <div className="col-lg-6">
                                <div className='d-flex align-items-center h-100'>
                                    <p className={portfolioDetailsCommon.bannerSecondaryText}>At Allure Studio, we blend innovative UI/UX design with cutting-edge technologies like HTML, CSS, Bootstrap, and GitHub to create websites that not only look stunning but are also fully functional and responsive. Our designs are crafted to provide seamless user experiences, making it easy for visitors to navigate and engage with your content. By focusing on clarity and detail, we ensure that your website is not only visually appealing but also optimized for performance and accessibility across all devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider Section */}
            <section className={allureStyle['inovative-img-section']}>
                <div className="container">
                    <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
                        Innovative Features in <br /><span className={allureStyle.mainheadingSpan}>Allure</span>
                    </h3>
                    <div className={allureStyle['inovative-img-content']}>
                        <div className={allureStyle['card-part']}>
                            <div><img src="/work/2024/allure/innovative-img.svg" /></div>
                            <h6><span>Integrated Payment System.</span> We enable you to identify your most loyal customers and offer them rewards, incentivizing them for repeat purchases in the future with personalized rewards.</h6>
                        </div>
                        <div className={allureStyle['card-part']}>
                            <h6><span>Integrated Payment System.</span> We enable you to identify your most loyal customers and offer them rewards, incentivizing them for repeat purchases in the future with personalized rewards.</h6>
                            <div className='mt-auto ms-auto'><img src="/work/2024/allure/innovative-img2.svg" /></div>
                        </div>
                    </div>
                    <div className={allureStyle['inovative-large-card']}>
                    <div className='mt-auto'><img src="/work/2024/allure/innovative-img3.svg" /></div>
                    <h6><span>Connecting Shoppers to Partner Stores Effortlessly.</span>We are where customers are, allowing us to transfer thousands of shoppers to our partner stores and encourage them to buy</h6>

                    </div>
                </div>
            </section>

        </div>
    );
}

