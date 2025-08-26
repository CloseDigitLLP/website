/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Lottie from 'lottie-react';
import animation1 from "../../../public/work/lottie-files/Map.json";
import animation2 from "../../../public/work/lottie-files/Owner-Track-View.json";
import animation3 from "../../../public/work/lottie-files/Schedule_Visit_All.json";
import animation4 from "../../../public/work/lottie-files/Search.json";
import styles from '../../styles/portfolioDetails/vaynoapp.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import DesignProcess from './portfolioDetailsCommon/designProcess';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import data from '../../resources/portfolioDetails.json'
import ProcessSteps from './portfolioDetailsCommon/process';


const VaynoApp = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        beforeChange: (_, next) => setActiveSlide(next),
        pauseOnHover: false,   
        pauseOnFocus: false,
          responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480, 
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    };

    const slides = [
        { id: 0, animation: animation1, title: "Find Your Perfect Property with Ease", description: "Explore real estate listings directly on the map, compare property prices instantly, and filter by your preferences like budget, location, and amenities. View nearby schools, transport, and lifestyle spots everything you need in one seamless app experience to make smarter home-buying decisions." },
        { id: 1, animation: animation2, title: "Manage Rent & Services with Ease", description: "We designed an all-in-one solution that allows users to lease properties, manage service requests, and pay rent — all from a single application. With built-in service support for plumbing, cleaning, electrical work, and more, tenants and property owners enjoy a smooth and transparent experience." },
        { id: 2, animation: animation3, title: "All-in-One Home Service App", description: "An intuitive and modern mobile app designed for seamless booking of essential home services — from cleaning and plumbing to electrical work, AC maintenance, painting, and more. The design focuses on simplicity, trust, and fast service access." },
        { id: 3, animation: animation4, title: "Track Your Homeownership Journey", description: "Get a personalized path to homeownership by calculating your credit score and estimating your loan amount. Based on your inputs, the app provides a clear view of your property price, ownership score, and savings plan helping you set a purchase goal and achieve your dream home." }
    ];

    const banners = [
        { src: "/work/2024/vayno/vayno-banner1.svg", width: 180, height: 428 },
        { src: "/work/2024/vayno/vayno-banner2.svg", width: 194, height: 462 },
        { src: "/work/2024/vayno/vayno-banner3.svg", width: 240, height: 496 },
        { src: "/work/2024/vayno/vayno-banner4.svg", width: 194, height: 462 },
        { src: "/work/2024/vayno/vayno-banner5.svg", width: 180, height: 428 },
    ];

    const toolsItem = [
        {
            title: "Smart Rent & Local Service Intelligence",
            content: "Vanyo provides smart rent reminders with auto-debit and suggests local service providers for fast, easy support — making renting simple and hassle-free.",
            img: "/work/2024/vayno/tool1.png"
        },
        {
            title: "Simplifying Rental Management and Services",
            content: "Vanyo integrates lease management, rent payments, and local home service bookings into one seamless platform making rental living easy, efficient, and stress-free.",
            img: "/work/2024/vayno/tool2.png"
        },
        {
            title: "Location-Based Service Suggestions",
            content: "The app suggests local service providers based on the property location, ensuring fast and relevant support.",
            img: "/work/2024/vayno/tool3.png"
        },
        {
            title: "Smart Rent Reminders & Auto-Pay",
            content: "Timely rent reminders with optional auto-debit setup to avoid late payments and build rental credibility.",
            img: "/work/2024/vayno/tool4.png"
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 0,
        });
    }, [])

    return (
        <div className={portfolioDetailsCommon.mainSection}>
            <div className={styles.bannerSection}>
                <div className='container'>
                    <h3 className={portfolioDetailsCommon.bannerPrimaryText}>The Better Way to Rent Your Home  <br />
                        <span className={styles.mainheadingSpan}>Vayno</span>
                    </h3>
                    <div className={styles.bannerImageWrapper}>
                        {banners.map((banner, index) => (
                            <div
                                key={index}
                                className={`${styles.bannerItem} ${styles[`delay${index + 1}`]}`}
                            >
                                <Image
                                    key={index}
                                    src={banner.src}
                                    width={banner.width}
                                    height={banner.height}
                                    alt={`Banner ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <p className={portfolioDetailsCommon.bannerSecondaryText}>Vayno is a smart, user-friendly mobile application designed to make renting a home simple, fast, and transparent. With its powerful map-based search, users can easily explore available properties, view nearby options, and secure lease agreements all from their phone. Whether you&apos;re looking for a house, apartment, or shared space, Vayno guides you through the process with clear listings, verified landlords, and easy lease management. Beyond rentals, Vayno also connects users with trusted home services such as cleaning, painting, maintenance, and repairs, making it a complete solution for comfortable and hassle-free living.</p>

                </div>
            </div>
            <div className={styles.sliderSection}>
                <div className='container'>
                    <h3 data-aos="slide-left" className={portfolioDetailsCommon.mainheading}>Innovative design solution for Mobile App: <br />
                        <span className={styles.mainheadingSpan}>Vayno</span>{" "}Showcase
                    </h3>
                    <div className={styles['slider-part']}>
                        <Slider {...settings}>
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`${styles['slider-card']} ${index === activeSlide ? styles['active'] : ''
                                        }`}
                                >
                                    <div className={styles['slider-img-part']}>
                                        <div className={`${styles['lottie-animation-container']} ${index === activeSlide ? styles['active'] : ''
                                            }`}>
                                            <div style={{ position: 'absolute', top: 11, left: 12, width: '100%', height: '100%' }}>
                                                <div style={{ width: '92%', height: 'auto', borderRadius: '40px' }}>
                                                    <Lottie animationData={slide.animation} autoplay={index === activeSlide} loop={index === activeSlide} />
                                                </div>
                                            </div>
                                            <Image
                                                src='/work/2024/tonight-band/mobile-mockup.png'
                                                alt="Animated"
                                                width={300}
                                                height={620}
                                            />
                                        </div>
                                        <div className={styles['back-image']}>
                                            <Image src="/work/2024/vayno/slider-img-1.png" alt='slider image' width={312} height={440} />
                                        </div>
                                    </div>
                                    <div className={styles['slider-text-part']}>
                                        <h6 className={styles['slider-title']}>{slide.title}</h6>
                                        <p className={styles['slider-text']}>{slide.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <DesignProcess description="For the Vayno Rent Application, our design process began with deep user research and goal alignment focused on simplifying property leasing and service management. We moved into ideation and prototyping, creating intuitive user flows for rent payments, maintenance requests, and service bookings. Real-user testing provided valuable insights, helping us refine the design for maximum usability. Throughout the process, we worked closely with developers to ensure smooth integration and continuous improvements for a seamless rental experience." />
            <div className={styles.toolSection}>
                <div className='container'>
                    <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
                        Modern Tools for Easy Rent & Property Management {" "}
                        <span className={styles.mainheadingSpan}>Vayno Application</span>
                    </h3>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <div className={styles.accordion}>
                                {toolsItem.map((item, index) => (
                                    <div key={index} className={styles.accordionItem}>
                                        <button
                                            className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ""}`}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            {item.title}
                                        </button>
                                        {activeIndex === index && (
                                            <div className={styles.accordionContent}>
                                                <p>{item.content}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={toolsItem[activeIndex].img}
                                    alt={toolsItem[activeIndex].title}
                                    width={500}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <TechnologySection data={data.techdata.vaynoApp} />
            <div className={`${styles['colorPalletContainer']}`}>
                <div className="container">
                    <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
                        Color Palette presentation for
                        <br /><span className={styles.mainheadingSpan}>Vayno Application Design</span>
                    </h3>
                    <p>This bold and vibrant shade of purple was used to enhance the app’s visual appeal and convey a sense of creativity and trust. Its strong presence supports a cohesive brand identity, adds modern flair, and improves user engagement through clear visual hierarchy and consistent UI elements.</p>

                    <div data-aos="flip-down" className={portfolioDetailsCommon.colorPalette} >
                        <div className={`${portfolioDetailsCommon.colorPalette1} ${styles.colorPalette1}`}><div className={`${portfolioDetailsCommon.imageContainer} ${styles.imageContainer}`}><img src="/work/2024/vayno/colorPalette1.png" alt="colorPalette" /></div></div>
                        <div className={`${portfolioDetailsCommon.colorPalette2} ${styles.colorPalette2}`}><div className={`${portfolioDetailsCommon.imageContainer} ${styles.imageContainer}`}><img src="/work/2024/vayno/colorPalette2.png" alt="colorPalette" /></div></div>
                        <div className={`${portfolioDetailsCommon.colorPalette3} ${styles.colorPalette3}`}><div className={`${portfolioDetailsCommon.imageContainer} ${styles.imageContainer}`}><img src="/work/2024/vayno/colorPalette3.png" alt="colorPalette" /></div></div>
                        <div className={`${portfolioDetailsCommon.colorPalette4} ${styles.colorPalette4}`}><div className={`${portfolioDetailsCommon.imageContainer} ${styles.imageContainer}`}><img src="/work/2024/vayno/colorPalette4.png" alt="colorPalette" /></div></div>
                    </div>
                </div>
            </div>
             <ProcessSteps />


        </div>
    );
};

export default VaynoApp;

