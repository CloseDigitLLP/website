import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import Slider from '../portfolioDetails/portfolioDetailsCommon/slider';
import ScrollWidthAnimation from '../portfolioDetails/portfolioDetailsCommon/process';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import data from '../../resources/portfolioDetails.json';
import styles from '../../styles/portfolioDetails/vaynoapp.module.scss';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const VaynoWeb = () => {

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
                    <h3 className={portfolioDetailsCommon.bannerPrimaryText}>Upload, Manage, and Sell Properties<br />
                        Seamlessly with {" "}
                        <span className={styles.mainheadingSpan}>Vayno</span>
                    </h3>
                    <Image
                        src='/work/2024/vayno/vayno-banner.png'
                        width={1146}
                        height={698}
                        alt='Vayno Banner'
                        className={styles.bannerImage}
                        layout='responsive'
                    />
                    <p className={`${portfolioDetailsCommon.bannerSecondaryText} ${styles.webBannerText}`}>Vayno is a platform designed to revolutionize property management through advanced technology. By offering seamless integration between web and mobile interfaces, it allows users to effortlessly upload, manage, and sell properties in real-time. Through automation and smart features, Vanyo streamlines property listings, tracks user interactions, and simplifies communication—empowering owners and agents to operate more efficiently and deliver better experiences in the digital real estate space.</p>

                </div>
            </div>
            <div className={styles.designSection}>
                <div className='container'>
                    <h3 className={portfolioDetailsCommon.bannerPrimaryText}>Innovative design solution:<br />
                        <span className={styles.mainheadingSpan}>Vayno</span>
                    </h3>
                    <div className={styles.designImageWrapper}>
                        <Image
                            src='/work/2024/vayno/designimg1.png'
                            width={719}
                            height={551}
                            alt='Vayno Design'
                            className={styles.designImage1}
                        />
                        <Image
                            src='/work/2024/vayno/designimg2.png'
                            width={719}
                            height={551}
                            alt='Vayno Design'
                            className={styles.designImage2}
                        />
                    </div>
                    <p>We designed the Vanyo dashboard with user-friendliness at its core, ensuring an intuitive and efficient experience for property owners and managers. From a single interface, users can manage leased properties, track upcoming services and maintenance, schedule visits, approve rental applications, and add new listings. To enhance decision-making, the dashboard also includes visual analytics that provide a clear overview of property activity and performance from the moment a property is added.</p>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className={`${styles.designImageWrapper} ${styles.small} ${styles.secondCard}`}>
                                <Image
                                    src='/work/2024/vayno/designimg3.png'
                                    width={520}
                                    height={405}
                                    alt='Vayno Design'
                                    className={styles.designImage3}
                                />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={`${styles.designImageWrapper} ${styles.small} ${styles.thirdCard}`}>
                                <Image
                                    src='/work/2024/vayno/designimg4.png'
                                    width={520}
                                    height={405}
                                    alt='Vayno Design'
                                    className={styles.designImage4}
                                />
                            </div>
                        </div>
                    </div>
                    <p>We designed a user-friendly web application that allows users to buy, sell, and rent properties from one place. The platform offers an intuitive layout for smooth navigation, making it easy for users to explore listings, chat directly with property owners, and book appointments effortlessly. Every feature is crafted to enhance the user experience and simplify the entire property journey.</p>
                </div>
            </div>
            <TechnologySection data={data.techdata.vaynoWeb} />
            <Slider slides={data.sliderdata.vayno} />
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
            {/* <ScrollWidthAnimation /> */}
        </div>
    );
}

export default VaynoWeb;