import portfolioWorkStyle from '../../styles/portfolio/portfolioWork.module.scss'
import Image from 'next/image'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';



export default function OurWorkContent() {
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
                                <div>
                                    <div id={portfolioWorkStyle["animate1"]}
                                        className={portfolioWorkStyle["imgBox"]}
                                        ref={animateRefs[0]}>
                                        <Link href="/">
                                            <div>
                                                <div>
                                                    <Image
                                                        src={require('../../assets/images/Work/2024/Vaid.png')}
                                                        alt="Animated"
                                                        className={portfolioWorkStyle['brand-img']}
                                                    />
                                                </div>

                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={24} height={24} /> <p>UI-UX</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/reactnative.svg')} alt="logo" width={24} height={24} /> <p>React Native</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={24} height={24} /> <p>Firebase</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firestore.svg')} alt="logo" width={24} height={24} /> <p>Firestore</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/mysql.svg')} alt="logo" width={30} height={24} /> <p>My SQL</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>VAID</h3>
                                </div>
                                <div>
                                    <div id={portfolioWorkStyle["animate2"]}
                                        ref={animateRefs[1]}
                                        className={portfolioWorkStyle["imgBox1"]}>
                                        <Link href="/Camelab">
                                            <div>
                                                <div>
                                                    <Image src={require('../../assets/images/Work/2024/Camelab.png')} alt="Animated" className={portfolioWorkStyle['brand-img']} />
                                                </div>

                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={24} height={24} /> <p>UI-UX</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/react.svg')} alt="logo" width={24} height={24} /> <p>React</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/reactnative.svg')} alt="logo" width={24} height={24} /> <p>React Native</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={24} height={24} /> <p>Firebase</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firestore.svg')} alt="logo" width={24} height={24} /> <p>Firestore</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/mysql.svg')} alt="logo" width={30} height={24} /> <p>My SQL</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/redux.svg')} alt="logo" width={24} height={24} /> <p>Redux</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/paypal.svg')} alt="logo" width={24} height={24} /> <p>Paypal</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Camelab</h3>
                                </div>

                            </div>
                            <div ref={triggerRefs[1]} className={portfolioWorkStyle['brand-part']}>
                                <div>
                                    <div id={portfolioWorkStyle["animate3"]}
                                        className={portfolioWorkStyle["imgBox2"]}
                                        ref={animateRefs[2]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/Hontrel.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/wordpress.svg')} alt="logo" width={24} height={24} /> <p>Wordpress</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/elementor.svg')} alt="logo" width={24} height={24} /> <p>Elementor</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/godaddy.svg')} alt="logo" width={24} height={24} /> <p>Godaddy</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Hontrel</h3>
                                </div>
                                <div>
                                    <div id={portfolioWorkStyle["animate4"]}
                                        className={portfolioWorkStyle["imgBox3"]}
                                        ref={animateRefs[3]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/Superior.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={24} height={24} /> <p>UI-UX</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/html.svg')} alt="logo" width={24} height={24} /> <p>HTML</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/scss.svg')} alt="logo" width={24} height={24} /> <p>SCSS</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/bootstrap.svg')} alt="logo" width={24} height={24} /> <p>Bootstrap</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/css.svg')} alt="logo" width={24} height={24} /> <p>CSS</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Superior</h3>
                                </div>

                            </div>
                            <div ref={triggerRefs[2]} className={portfolioWorkStyle['brand-part']}>
                                <div>
                                    <div id={portfolioWorkStyle["animate5"]}
                                        className={portfolioWorkStyle["imgBox4"]}
                                        ref={animateRefs[4]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/Datasync.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/react.svg')} alt="logo" width={24} height={24} /> <p>React</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/material.svg')} alt="logo" width={24} height={24} /> <p>Material</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={24} height={24} /> <p>Firebase</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/github.svg')} alt="logo" width={24} height={24} /> <p>Github</p> </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Datasync</h3>
                                </div>
                                <div>
                                    <div id={portfolioWorkStyle["animate6"]}
                                        className={portfolioWorkStyle["imgBox5"]}
                                        ref={animateRefs[5]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/Schenk.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={24} height={24} /> <p>UI-UX</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={24} height={24} /> <p>Firebase</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/html.svg')} alt="logo" width={24} height={24} /> <p>HTML</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/css.svg')} alt="logo" width={24} height={24} /> <p>CSS</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/bootstrap.svg')} alt="logo" width={24} height={24} /> <p>Bootstrap</p> </div>                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Schenk</h3>
                                </div>
                            </div>


                            <div ref={triggerRefs[3]} className={portfolioWorkStyle['brand-part']}>
                                <div>
                                    <div id={portfolioWorkStyle["animate7"]}
                                        className={portfolioWorkStyle["imgBox6"]}
                                        ref={animateRefs[6]}>
                                        <Link href='/'>
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/PaydayDepot.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/html.svg')} alt="logo" width={24} height={24} /> <p>HTML</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/css.svg')} alt="logo" width={24} height={24} /> <p>CSS</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/bootstrap.svg')} alt="logo" width={24} height={24} /> <p>Bootstrap</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/github.svg')} alt="logo" width={24} height={24} /> <p>Github</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Payday Depot</h3>
                                </div>

                                <div>
                                    <div id={portfolioWorkStyle["animate8"]}
                                        className={portfolioWorkStyle["imgBox7"]}
                                        ref={animateRefs[7]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/Delivery.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/react.svg')} alt="logo" width={24} height={24} /> <p>React</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/ReactBootstrap.svg')} alt="logo" width={24} height={24} /> <p>React Bootstrap</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={24} height={24} /> <p>Firebase</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Delivery</h3>
                                </div>
                            </div>


                            <div ref={triggerRefs[4]} className={portfolioWorkStyle['brand-part']}>
                                <div>
                                    <div id={portfolioWorkStyle["animate9"]}
                                        className={portfolioWorkStyle["imgBox8"]}
                                        ref={animateRefs[8]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/GuptaGroup.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={24} height={24} /> <p>UI-UX</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/HTML.svg')} alt="logo" width={24} height={24} /> <p>HTML</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/tailwind.svg')} alt="logo" width={24} height={24} /> <p>Tailwind</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/github.svg')} alt="logo" width={24} height={24} /> <p>Github</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Gupta Group</h3>
                                </div>

                                <div>
                                    <div id={portfolioWorkStyle["animate10"]}
                                        className={portfolioWorkStyle["imgBox9"]}
                                        ref={animateRefs[9]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/PracticePlus.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={24} height={24} /> <p>UI-UX</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/bootstrap.svg')} alt="logo" width={24} height={24} /> <p>Bootstrap</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={24} height={24} /> <p>Firebase</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/wordpress.svg')} alt="logo" width={24} height={24} /> <p>Wordpress</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/owl.png')} alt="logo" width={24} height={24} /> <p>Owl-carousel</p> </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Practice Plus</h3>
                                </div>
                            </div>
                            <div ref={triggerRefs[5]} className={portfolioWorkStyle['brand-part']}>
                                <div>
                                    <div id={portfolioWorkStyle["animate11"]}
                                        className={portfolioWorkStyle["imgBox10"]}
                                        ref={animateRefs[10]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/Commbitz.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                    <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={24} height={24} /> <p>UI-UX</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/nextjs.svg')} alt="logo" width={24} height={24} /> <p>NextJS</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/tailwind.svg')} alt="logo" width={24} height={24} /> <p>Tailwind</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/redux.svg')} alt="logo" width={24} height={24} /> <p>Redux</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/nodejs.svg')} alt="logo" width={24} height={24} /> <p>Node</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/Firestore.svg')} alt="logo" width={24} height={24} /> <p>Firestore</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={24} height={24} /> <p>Firebase</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Commbitz</h3>
                                </div>

                                <div>
                                    <div id={portfolioWorkStyle["animate12"]}
                                        className={portfolioWorkStyle["imgBox11"]}
                                        ref={animateRefs[11]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/Allure.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                    <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={24} height={24} /> <p>UI-UX</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/HTML.svg')} alt="logo" width={24} height={24} /> <p>HTML</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/css.svg')} alt="logo" width={24} height={24} /> <p>CSS</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/bootstrap.svg')} alt="logo" width={24} height={24} /> <p>Bootstrap</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/github.svg')} alt="logo" width={24} height={24} /> <p>Github</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Allure</h3>
                                </div>


                            </div>
                            <div ref={triggerRefs[6]} className={portfolioWorkStyle['brand-part']}>
                                <div>
                                    <div id={portfolioWorkStyle["animate13"]}
                                        className={portfolioWorkStyle["imgBox12"]}
                                        ref={animateRefs[12]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/Snbla.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                    <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={24} height={24} /> <p>UI-UX</p></div>
                                                    <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/HTML.svg')} alt="logo" width={24} height={24} /> <p>HTML</p> </div>
                                                    <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/wordpress.svg')} alt="logo" width={24} height={24} /> <p>Wordpress</p></div>
                                                    <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/elementor.svg')} alt="logo" width={24} height={24} /> <p>Elementor</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Snbla</h3>
                                </div>
                                <div>
                                    <div id={portfolioWorkStyle["animate14"]}
                                        className={portfolioWorkStyle["imgBox13"]}
                                        ref={animateRefs[13]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/FellingBetterNow.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                    <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/nextjs.svg')} alt="logo" width={24} height={24} /> <p>NextJS</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={24} height={24} /> <p>Firebase</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/Firestore.svg')} alt="logo" width={24} height={24} /> <p>Firestore</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/redux.svg')} alt="logo" width={24} height={24} /> <p>Redux</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/aws.svg')} alt="logo" width={24} height={24} /> <p>AWS</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/express.svg')} alt="logo" width={24} height={24} /> <p>ExpressJS</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>FellingBetterNow</h3>
                                </div>
                            </div>
                            <div ref={triggerRefs[7]} className={portfolioWorkStyle['brand-part']}>
                                <div>
                                    <div id={portfolioWorkStyle["animate15"]}
                                        className={portfolioWorkStyle["imgBox14"]}
                                        ref={animateRefs[14]}>
                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/Directory.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/uiux.svg')} alt="logo" width={24} height={24} /> <p>UI-UX</p></div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/react.svg')} alt="logo" width={24} height={24} /> <p>Ract</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/pwa.svg')} alt="logo" width={24} height={24} /> <p>PWA</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/firebase.svg')} alt="logo" width={24} height={24} /> <p>Firebase</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/redux.svg')} alt="logo" width={24} height={24} /> <p>Redux</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/mysql.svg')} alt="logo" width={30} height={24} /> <p>My SQL</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Directory</h3>
                                </div>

                                <div>
                                    <div id={portfolioWorkStyle["animate16"]}
                                        className={portfolioWorkStyle["imgBox15"]}
                                        ref={animateRefs[15]}>

                                        <Link href="/">
                                            <div>
                                                <Image
                                                    src={require('../../assets/images/Work/2024/Camplinq.png')}
                                                    alt="Animated"
                                                    className={portfolioWorkStyle['brand-img']}
                                                />
                                                <div className={portfolioWorkStyle['brand-info']}>
                                                    <div className={portfolioWorkStyle['tech-logo']}>
                                                    <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/HTML.svg')} alt="logo" width={24} height={24} /> <p>HTML</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/css.svg')} alt="logo" width={24} height={24} /> <p>CSS</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/bootstrap.svg')} alt="logo" width={24} height={24} /> <p>Bootstrap</p> </div>
                                                        <div className={portfolioWorkStyle['logo']}><Image src={require('../../assets/images/work/technology-icons/js.svg')} alt="logo" width={20} height={24} /> <p>Javascript</p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className={portfolioWorkStyle["project-title"]}>Camplinq</h3>
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
