import portfolioWorkStyle from '../../styles/portfolio/portfolioWork.module.scss'
import Image from 'next/image'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tilt from 'react-parallax-tilt';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const ScrollMagic = dynamic(() => import('scrollmagic'), { ssr: false });
const debugAddIndicators = dynamic(
    () => import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'),
    { ssr: false }
);

export default function OurWork() {
    const triggerRef1 = useRef(null);
    const triggerRef2 = useRef(null);
    const triggerRef3 = useRef(null);
    const triggerRef4 = useRef(null);
    const triggerRef5 = useRef(null);
    const triggerRef6 = useRef(null);
    const triggerRef7 = useRef(null);
    const triggerRef8 = useRef(null);



    const animateRef1 = useRef(null);
    const animateRef2 = useRef(null);

    const animateRef3 = useRef(null);
    const animateRef4 = useRef(null);

    const animateRef5 = useRef(null);
    const animateRef6 = useRef(null);

    const animateRef7 = useRef(null);
    const animateRef8 = useRef(null);

    const animateRef9 = useRef(null);
    const animateRef10 = useRef(null);

    const animateRef11 = useRef(null);
    const animateRef12 = useRef(null);

    const animateRef13 = useRef(null);
    const animateRef14 = useRef(null);

    const animateRef15 = useRef(null);
    const animateRef16 = useRef(null);

    useEffect(() => {
        const initializeScrollMagic = async () => {
            const { default: ScrollMagic } = await import('scrollmagic');
            await import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

            const controller = new ScrollMagic.Controller();

            // First scene
            const scene1 = new ScrollMagic.Scene({
                triggerElement: triggerRef1.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef1.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            // Second scene
            const scene2 = new ScrollMagic.Scene({
                triggerElement: triggerRef1.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef2.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            const scene3 = new ScrollMagic.Scene({
                triggerElement: triggerRef2.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef3.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            const scene4 = new ScrollMagic.Scene({
                triggerElement: triggerRef2.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef4.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);


            const scene5 = new ScrollMagic.Scene({
                triggerElement: triggerRef3.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef5.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);
            const scene6 = new ScrollMagic.Scene({
                triggerElement: triggerRef3.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef6.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            const scene7 = new ScrollMagic.Scene({
                triggerElement: triggerRef4.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef7.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);
            const scene8 = new ScrollMagic.Scene({
                triggerElement: triggerRef4.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef8.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            const scene9 = new ScrollMagic.Scene({
                triggerElement: triggerRef5.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef9.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            const scene10 = new ScrollMagic.Scene({
                triggerElement: triggerRef5.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef10.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            const scene11 = new ScrollMagic.Scene({
                triggerElement: triggerRef6.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef11.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);
            const scene12 = new ScrollMagic.Scene({
                triggerElement: triggerRef6.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef12.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);


            const scene13 = new ScrollMagic.Scene({
                triggerElement: triggerRef7.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef13.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            const scene14 = new ScrollMagic.Scene({
                triggerElement: triggerRef7.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef14.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            const scene15 = new ScrollMagic.Scene({
                triggerElement: triggerRef8.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef15.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            const scene16 = new ScrollMagic.Scene({
                triggerElement: triggerRef8.current,
                duration: 500,
                triggerHook: 0.5
            })
                .setClassToggle(animateRef16.current, portfolioWorkStyle['scale-up'])
                .addIndicators()
                .addTo(controller);

            return () => {
                controller.destroy(true);
                scene1.destroy(true);
                scene2.destroy(true);
            };
        };

        initializeScrollMagic();
    }, []);

    return (
        <section className={`section-spacing`}>
            <div className="section-title-part">
                <p className="back-title">Our Work</p>
                <h5 className="section-title">Our Work</h5>
            </div>
            <div className="container">
                <div className={`${portfolioWorkStyle['tab-section']} portfolioTabBar`}>
                    <Tabs
                        defaultActiveKey="All"
                        id="uncontrolled-tab-example"
                        className="mb-3">
                        <Tab eventKey="All" title="All Work">
                            <div ref={triggerRef1} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate1"]}
                                    ref={animateRef1}>
                                    <Image
                                        src={require('../../assets/images/Vaid.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>VAID</h3>
                                    <p>UI/UX Design, Reactive Native, Angular Js, MongoDB</p>
                                </div>
                                <div id={portfolioWorkStyle["animate2"]}
                                    ref={animateRef2}>
                                    <Image
                                        src={require('../../assets/images/Camelab.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Camelab</h3>
                                </div>
                            </div>




                            <div ref={triggerRef2} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate3"]}
                                    ref={animateRef3}>
                                    <Image
                                        src={require('../../assets/images/Hontrel.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Hontrel</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate4"]}
                                    ref={animateRef4}>
                                    <Image
                                        src={require('../../assets/images/Superior.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Superior</h3>
                                </div>
                            </div>



                            <div ref={triggerRef3} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate5"]}
                                    ref={animateRef5}>
                                    <Image
                                        src={require('../../assets/images/Datasync.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Datasync</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate6"]}
                                    ref={animateRef6}>
                                    <Image
                                        src={require('../../assets/images/Schenk.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Schenk</h3>
                                </div>
                            </div>



                            <div ref={triggerRef4} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate7"]}
                                    ref={animateRef7}>
                                    <Image
                                        src={require('../../assets/images/PaydayDepot.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Payday Depot</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate8"]}
                                    ref={animateRef8}>
                                    <Image
                                        src={require('../../assets/images/Delivery.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Delivery</h3>
                                </div>
                            </div>


                            <div ref={triggerRef5} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate9"]}
                                    ref={animateRef9}>
                                    <Image
                                        src={require('../../assets/images/GuptaGroup.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Gupta Group</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate10"]}
                                    ref={animateRef10}>
                                    <Image
                                        src={require('../../assets/images/PracticePlus.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Practice Plus</h3>
                                </div>
                            </div>


                            <div ref={triggerRef6} className={portfolioWorkStyle['brand-part']}>

                                <div id={portfolioWorkStyle["animate11"]}
                                    ref={animateRef11}>
                                    <Image
                                        src={require('../../assets/images/Commbitz.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Commbitz</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate12"]}
                                    ref={animateRef12}>
                                    <Image
                                        src={require('../../assets/images/Allure.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Allure</h3>
                                </div>
                            </div>


                            <div ref={triggerRef7} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate13"]}
                                    ref={animateRef13}>
                                    <Image
                                        src={require('../../assets/images/Snbla.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Snbla</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate14"]}
                                    ref={animateRef14}>
                                    <Image
                                        src={require('../../assets/images/FellingBetterNow.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>FellingBetterNow</h3>
                                </div>
                            </div>


                            <div ref={triggerRef8} className={portfolioWorkStyle['brand-part']}>

                                <div id={portfolioWorkStyle["animate15"]}
                                    ref={animateRef15}>
                                    <Image
                                        src={require('../../assets/images/Directory.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Directory</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate16"]}
                                    ref={animateRef16}>
                                    <Image
                                        src={require('../../assets/images/Camplinq.svg')}
                                        alt="Animated"
                                        className="animated-logo-image"
                                    />
                                    <h3>Camplinq</h3>
                                </div>
                            </div>

                        </Tab>
                        <Tab eventKey="UI/UX" title="UI/UX Design">
                            UI/UX Design
                        </Tab>
                        <Tab eventKey="Web" title="Web Development/Design">
                            Web Development/Design
                        </Tab>
                        <Tab eventKey="App" title="App Development/Design">
                            App Development/Design
                        </Tab>
                    </Tabs>
                </div>



                <div className={portfolioWorkStyle["title-part"]}>
                    <div className="section-title-part">
                        <p className="back-title">TRUSTED CLIENT</p>
                        <h5 className="section-title">TRUSTED CLIENT</h5>
                    </div>
                </div>


                <div className={portfolioWorkStyle["trusted-brands-section"]}>
                    <div><Image
                        src={require('../../assets/images/shopify.svg')}
                        alt="Animated"
                        className="animated-logo-image"
                    /></div>
                    <div><Image
                        src={require('../../assets/images/google.svg')}
                        alt="Animated"
                        className="animated-logo-image"
                    /></div>
                    <div><Image
                        src={require('../../assets/images/pintrest.svg')}
                        alt="Animated"
                        className="animated-logo-image"
                    /></div>
                    <div><Image
                        src={require('../../assets/images/stripe.svg')}
                        alt="Animated"
                        className="animated-logo-image"
                    /></div>
                    <div><Image
                        src={require('../../assets/images/reddit.svg')}
                        alt="Animated"
                        className="animated-logo-image"
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}