import React, { useEffect, useRef } from 'react';
import portfolioDetailsCommon from '../../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import Image from 'next/image';



export default function DesignProcess() {
    const processImgRef1 = useRef(null);
    const processImgRef2 = useRef(null);
    const processImgRef3 = useRef(null);
    const processImgRef4 = useRef(null);

    useEffect(() => {
        const initializeScrollMagic = async () => {
            const { default: ScrollMagic } = await import('scrollmagic/scrollmagic/uncompressed/ScrollMagic');

            const controller = new ScrollMagic.Controller();

            const scenes = [
                {
                    triggerElement: processImgRef1.current,
                    ref: processImgRef1,
                },
                {
                    triggerElement: processImgRef2.current,
                    ref: processImgRef2,
                },
                {
                    triggerElement: processImgRef3.current,
                    ref: processImgRef3,
                },
                {
                    triggerElement: processImgRef4.current,
                    ref: processImgRef4,
                },
            ];

            scenes.forEach(({ triggerElement, ref }) => {
                new ScrollMagic.Scene({
                    triggerElement,
                    duration: 500,
                    triggerHook: 0.7,
                })
                    .setClassToggle(ref.current, portfolioDetailsCommon['scaleUp'])
                    .addIndicators()
                    .addTo(controller);

                new ScrollMagic.Scene({
                    triggerElement,
                    duration: 500,
                    triggerHook: 0.3,
                })
                    .setClassToggle(ref.current, portfolioDetailsCommon['removeScale'])
                    .addIndicators()
                    .addTo(controller);
            });

            return () => {
                controller.destroy(true);
            };
        };

        initializeScrollMagic();
    }, []);
    return (
        <div>
            <div className={portfolioDetailsCommon.processSection}>
                <div className="container">
                    <div className="d-flex justify-content-between flex-wrap">
                        <h3 className={portfolioDetailsCommon.mainheading}>
                            Design Process
                        </h3>
                        <p>
                            Extensive research, in-depth competitive analysis, and continuous improvement provided crucial insights for developing a new application that meets the highest industry standards.
                        </p>
                    </div>
                    <div className={portfolioDetailsCommon.processScrollSection}>

                        <div className={portfolioDetailsCommon.subProcessPart}>
                            <h3>01.</h3>
                            <div ref={processImgRef1} className={portfolioDetailsCommon.subProcessImg}>
                                <Image
                                    width={100} height={100}
                                    src='/work/2024/propersky/processImg1.svg'
                                    alt="Animated"
                                />
                            </div>
                            <h3>Research</h3>
                            <h6>Focus on users, analyze competitors, and apply best practices to exceed expectations.</h6>
                        </div>

                        <div className={portfolioDetailsCommon.subProcessPart}>
                            <h3>02.</h3>
                            <div ref={processImgRef2} className={portfolioDetailsCommon.subProcessImg}>
                                <Image
                                    width={100} height={100}
                                    src='/work/2024/propersky/processImg2.svg'
                                    alt="Animated"
                                />
                            </div>
                            <h3>Wireframe</h3>
                            <h6>We designed the layout for optimal structure, intuitive navigation, and seamless interaction to ensure a user-friendly website.</h6>
                        </div>

                        <div className={portfolioDetailsCommon.subProcessPart}>
                            <h3>03.</h3>
                            <div ref={processImgRef3} className={portfolioDetailsCommon.subProcessImg}>
                                <Image
                                    width={100} height={100}
                                    src='/work/2024/propersky/processImg3.svg'
                                    alt="Animated"
                                />
                            </div>
                            <h3>UI Design</h3>
                            <h6>Designers and marketers collaborate on brand research to create appealing visual elements.</h6>
                        </div>

                        <div className={portfolioDetailsCommon.subProcessPart}>
                            <h3>04.</h3>
                            <div ref={processImgRef4} className={portfolioDetailsCommon.subProcessImg}>
                                <Image
                                    width={100} height={100}
                                    src='/work/2024/propersky/processImg4.svg'
                                    alt="Animated"
                                />
                            </div>
                            <h3>Analysis</h3>
                            <h6>Once the app was completed, we thoroughly tested and optimized it to resolve major user issues.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
