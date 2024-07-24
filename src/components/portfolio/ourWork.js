import portfolioWorkStyle from '../../styles/portfolio/portfolioWork.module.scss'
import Image from 'next/image'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tilt from 'react-parallax-tilt';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ScrollMagic = dynamic(() => import('scrollmagic'), { ssr: false });
const debugAddIndicators = dynamic(
    () => import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'),
    { ssr: false }
);

export default function OurWork() {
    const triggerRefs = Array.from({ length: 8 }, () => useRef(null));
    const animateRefs = Array.from({ length: 16 }, () => useRef(null));

    useEffect(() => {
        const initializeScrollMagic = async () => {
            const { default: ScrollMagic } = await import('scrollmagic');
            await import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

            const controller = new ScrollMagic.Controller();

            // Create scenes
            animateRefs.forEach((animateRef, index) => {
                const triggerIndex = Math.floor(index / 2);
                const scene = new ScrollMagic.Scene({
                    triggerElement: triggerRefs[triggerIndex].current,
                    duration: 500,
                    triggerHook: 0.7
                })
                    .setClassToggle(animateRef.current, portfolioWorkStyle['scale-up'])
                    .addIndicators()
                    .addTo(controller);

                // Clean up on unmount
                return () => {
                    controller.destroy(true);
                    scene.destroy(true);
                };
            });
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
                        className={portfolioWorkStyle["tab-bar"]}>
                        <Tab eventKey="All" title="All Work">
                            <div ref={triggerRefs[0]} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate1"]}
                                    className={portfolioWorkStyle["imgBox"]}
                                    ref={animateRefs[0]}>
                                    <Image
                                        src={require('../../assets/images/vaid.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <div className={portfolioWorkStyle['brand-info']}>
                                        <h3>VAID</h3>
                                        <div className={portfolioWorkStyle['tech-logo']}>
                                                <div><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={30} height={30} /></div>
                                                <div><Image src={require('../../assets/images/work/technology-icons/react.svg')} alt="logo" width={30} height={30} /></div>
                                                <div><Image src={require('../../assets/images/work/technology-icons/pwa.svg')} alt="logo" width={30} height={30} /></div>
                                                <div><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={30} height={30} /></div>
                                                <div><Image src={require('../../assets/images/work/technology-icons/redux.svg')} alt="logo" width={30} height={30} /></div>
                                                <div><Image src={require('../../assets/images/work/technology-icons/mysql.svg')} alt="logo" width={40} height={35} /></div>
                                        </div>
                                    </div>
                                </div>
                                <div id={portfolioWorkStyle["animate2"]}
                                    ref={animateRefs[1]}
                                    className={portfolioWorkStyle["imgBox1"]}>
                                    <Link href="/Camelab">
                                        <Image
                                            src={require('../../assets/images/Camelab.png')}
                                            alt="Animated"
                                            className={portfolioWorkStyle['brand-img']}
                                        />
                                    </Link>
                                    <div className={portfolioWorkStyle['brand-info']}>
                                        <h3>Camelab</h3>
                                        <div className={portfolioWorkStyle['tech-logo']}>
                                                <div><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={30} height={30} /></div>
                                                <div><Image src={require('../../assets/images/work/technology-icons/react.svg')} alt="logo" width={30} height={30} /></div>
                                                <div><Image src={require('../../assets/images/work/technology-icons/pwa.svg')} alt="logo" width={30} height={30} /></div>
                                                <div><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={30} height={30} /></div>
                                                <div><Image src={require('../../assets/images/work/technology-icons/redux.svg')} alt="logo" width={30} height={30} /></div>
                                                <div><Image src={require('../../assets/images/work/technology-icons/mysql.svg')} alt="logo" width={40} height={35} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ref={triggerRefs[1]} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate3"]}
                                    ref={animateRefs[2]}>
                                    <Image
                                        src={require('../../assets/images/Hontrel.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Hontrel</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate4"]}
                                    ref={animateRefs[3]}>
                                    <Image
                                        src={require('../../assets/images/Superior.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Superior</h3>
                                </div>
                            </div>
                            <div ref={triggerRefs[2]} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate5"]}
                                    ref={animateRefs[4]}>
                                    <Image
                                        src={require('../../assets/images/Datasync.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Datasync</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate6"]}
                                    ref={animateRefs[5]}>
                                    <Image
                                        src={require('../../assets/images/Schenk.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Schenk</h3>
                                </div>
                            </div>
                            <div ref={triggerRefs[3]} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate7"]}
                                    ref={animateRefs[6]}>
                                    <Image
                                        src={require('../../assets/images/PaydayDepot.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Payday Depot</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate8"]}
                                    ref={animateRefs[7]}>
                                    <Image
                                        src={require('../../assets/images/Delivery.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Delivery</h3>
                                </div>
                            </div>
                            <div ref={triggerRefs[4]} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate9"]}
                                    ref={animateRefs[8]}>
                                    <Image
                                        src={require('../../assets/images/GuptaGroup.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Gupta Group</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate10"]}
                                    ref={animateRefs[9]}>
                                    <Image
                                        src={require('../../assets/images/PracticePlus.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Practice Plus</h3>
                                </div>
                            </div>
                            <div ref={triggerRefs[5]} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate11"]}
                                    ref={animateRefs[10]}>
                                    <Image
                                        src={require('../../assets/images/Commbitz.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Commbitz</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate12"]}
                                    ref={animateRefs[11]}>
                                    <Image
                                        src={require('../../assets/images/Allure.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Allure</h3>
                                </div>
                            </div>
                            <div ref={triggerRefs[6]} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate13"]}
                                    ref={animateRefs[12]}>
                                    <Image
                                        src={require('../../assets/images/Snbla.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Snbla</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate14"]}
                                    ref={animateRefs[13]}>
                                    <Image
                                        src={require('../../assets/images/FellingBetterNow.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>FellingBetterNow</h3>
                                </div>
                            </div>
                            <div ref={triggerRefs[7]} className={portfolioWorkStyle['brand-part']}>
                                <div id={portfolioWorkStyle["animate15"]}
                                    ref={animateRefs[14]}>
                                    <Image
                                        src={require('../../assets/images/Directory.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
                                    />
                                    <h3>Directory</h3>
                                </div>
                                <div id={portfolioWorkStyle["animate16"]}
                                    ref={animateRefs[15]}>
                                    <Image
                                        src={require('../../assets/images/Camplinq.png')}
                                        alt="Animated"
                                        className={portfolioWorkStyle['brand-img']}
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
                        className={portfolioWorkStyle['brand-img']}
                    /></div>
                    <div><Image
                        src={require('../../assets/images/google.svg')}
                        alt="Animated"
                        className={portfolioWorkStyle['brand-img']}
                    /></div>
                    <div><Image
                        src={require('../../assets/images/pintrest.svg')}
                        alt="Animated"
                        className={portfolioWorkStyle['brand-img']}
                    /></div>
                    <div><Image
                        src={require('../../assets/images/stripe.svg')}
                        alt="Animated"
                        className={portfolioWorkStyle['brand-img']}
                    /></div>
                    <div><Image
                        src={require('../../assets/images/reddit.svg')}
                        alt="Animated"
                        className={portfolioWorkStyle['brand-img']}
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}
