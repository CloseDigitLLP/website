import IntegraStyle from '../../styles/portfolioDetails/integra.module.scss';
import { useEffect } from 'react';
import DesignProcess from './portfolioDetailsCommon/designProcess';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import data from '../../resources/portfolioDetails.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function IntegraPage() {
    useEffect(() => {
        document.querySelector(`.${IntegraStyle['laptop-img']}`).classList.add(IntegraStyle['animate-laptop']);
        document.querySelector(`.${IntegraStyle['mobile-img']}`).classList.add(IntegraStyle['animate-mobile']);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className={IntegraStyle['integra-section']}>
            <div className={IntegraStyle['banner-section']}>
                <div className='container'>
                    <div className={IntegraStyle['banner-heading-section']}>
                        <h2 className={IntegraStyle['main-heading']}>
                            AI Tools and Technologies Integration at{' '}
                            <span>Integra PDF Verification</span>
                        </h2>
                    </div>
                </div>
                <div className={IntegraStyle['banner-img-part']}>
                    <div>
                        <img
                            src="/work/2024/integra/integra-laptop-screen.png"
                            alt="camelab laptop screen"
                            className={`${IntegraStyle['laptop-img']} ${IntegraStyle['initial-laptop']}`}
                            width="100%"
                        />
                    </div>
                    <div className={IntegraStyle['mobile-img-section']}>
                        <img
                            src="/work/2024/integra/integra-mobile-screen.png"
                            alt="camelab mobile screen"
                            className={`${IntegraStyle['mobile-img']} ${IntegraStyle['initial-mobile']}`}
                        />
                    </div>
                </div>
                <div className='container'>
                    <div className={IntegraStyle['banner-text-part']}>
                        <p className={IntegraStyle['banner-text']}>
                            At Integra, our design approach for PDF verification tools is rooted in precision and user
                            experience. We meticulously craft interfaces that simplify the verification process,
                            ensuring that users can easily upload, verify, and manage their documents. Our designs
                            prioritize clarity and efficiency, combining robust functionality with an intuitive layout
                            that guides users through each step of the verification process.
                        </p>
                    </div>
                </div>
            </div>

            <section className={IntegraStyle['showcase-section']}>
                <div className="container">
                    <h3 className={IntegraStyle['main-heading']} data-aos="fade-">
                        Innovative design solution for website:
                        <br />
                        <span>Integra</span> Showcase
                    </h3>
                    <div className={IntegraStyle['step-section']}>
                        <div data-aos="fade-right" className={IntegraStyle['step-img-part']}>
                            <img src="/work/2024/integra/step1.png" alt="step img" />
                        </div>
                        <div className={IntegraStyle['step-content']} data-aos="fade-left">
                            <h4>Step 1</h4>
                            <p>
                                We design this feature so that when you click the &apos;Upload&apos; button, a file
                                selection dialog opens, allowing you to browse your device, select the PDF you wish to
                                upload, and confirm your choice.
                            </p>
                        </div>
                    </div>
                    <div className={IntegraStyle['step-section']}>
                        <div className={IntegraStyle['step-content']} data-aos="fade-right">
                            <h4>Step 2</h4>
                            <p>
                                We design this feature so that you start the upload by clicking &apos;Start&apos;. The
                                system will process your document and display a progress indicator. Once the upload is
                                complete, the verification results will appear on the screen.
                            </p>
                        </div>
                        <div data-aos="fade-left" className={IntegraStyle['step-img-part']}>
                            <img src="/work/2024/integra/step2.png" alt="step img" />
                        </div>
                    </div>
                    <div className={IntegraStyle['step-section']}>
                        <div data-aos="fade-right" className={IntegraStyle['step-img-part']}>
                            <img src="/work/2024/integra/step3.png" alt="step img" />
                        </div>
                        <div className={IntegraStyle['step-content']} data-aos="fade-left">
                            <h4>Step 3</h4>
                            <p>
                                The system will process your document and display a progress indicator. Once the upload
                                is complete and processing is finished, the results will be shown with color codes:
                                Green for correct data and Red for incorrect data or issues.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <DesignProcess description="At Integra, our design process involves deep research and clear goal setting, followed by ideation and prototyping. We rigorously test designs with real users, refine based on feedback, and work closely with developers to ensure successful implementation and continuous improvement." />
            </section>
            <section className={IntegraStyle['technology-section']}>
                <TechnologySection data={data.techdata.integra} />
            </section>

            <div className={`${IntegraStyle['colorPalletContainer']}`}>
                <div className="container">
                    <h3 data-aos="slide-left" className={IntegraStyle['main-heading']}>
                        Color Palette presentation for
                        <br />
                        <span>Integra</span> website design
                    </h3>
                    <p>
                        The deep, striking blue was utilized in development to enhance visual impact and maintain a
                        professional appearance. This color choice supports a strong, cohesive brand identity and
                        improves user engagement through its bold and distinctive presence.
                    </p>

                    <div className={portfolioDetailsCommon.colorPalette} data-aos="flip-down">
                        <div className={`${portfolioDetailsCommon.colorPalette1} ${IntegraStyle.colorPalette1}`}>
                            <div className={`${portfolioDetailsCommon.imageContainer} ${IntegraStyle.imageContainer}`}>
                                <img src="/work/2024/integra/colorPalette1.png" alt="colorPalette" />
                            </div>
                        </div>
                        <div className={`${portfolioDetailsCommon.colorPalette2} ${IntegraStyle.colorPalette2}`}>
                            <div className={`${portfolioDetailsCommon.imageContainer} ${IntegraStyle.imageContainer}`}>
                                <img src="/work/2024/integra/colorPalette2.png" alt="colorPalette" />
                            </div>
                        </div>
                        <div className={`${portfolioDetailsCommon.colorPalette3} ${IntegraStyle.colorPalette3}`}>
                            <div className={`${portfolioDetailsCommon.imageContainer} ${IntegraStyle.imageContainer}`}>
                                <img src="/work/2024/integra/colorPalette3.png" alt="colorPalette" />
                            </div>
                        </div>
                        <div className={`${portfolioDetailsCommon.colorPalette4} ${IntegraStyle.colorPalette4}`}>
                            <div className={`${portfolioDetailsCommon.imageContainer} ${IntegraStyle.imageContainer}`}>
                                <img src="/work/2024/integra/colorPalette4.png" alt="colorPalette" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
