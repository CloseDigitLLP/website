import portfolioWorkStyle from '../../styles/portfolio/portfolioWork.module.scss'
import Image from 'next/image'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import data from "../../resources/portfolioDetails.json"
import TabBarContent from './TabBarContent';

const groupIntoPairs = (projects) => {
    let pairs = [];
    for (let i = 0; i < projects.length; i += 2) {
        pairs.push(projects.slice(i, i + 2));
    }
    return pairs;
};

export default function OurWorkContent() {

    // useEffect(() => {
    //     const initializeScrollMagic = async () => {
    //         const { default: ScrollMagic } = await import('scrollmagic');
    //         await import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

    //         const controller = new ScrollMagic.Controller();

    //         const scene = new ScrollMagic.Scene({
    //             triggerElement: "#TitleText1",
    //             triggerHook: 0,
    //             duration: "100%",
    //         })
    //             .setClassToggle("#TitleText", portfolioWorkStyle['stickyOnTop'])
    //             .addIndicators()
    //             .addTo(controller);
    //         return () => {
    //             controller.destroy(true);
    //             scene.destroy(true);
    //         };

    //     };
    //     initializeScrollMagic();
    // }, []);


    const projectPairs = groupIntoPairs(data.projectPairs.flat());
    return (
        <>
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
                                <TabBarContent />
                            </Tab>
                            <Tab eventKey="UI/UX" title="UI/UX Design">
                                <TabBarContent />
                            </Tab>
                            <Tab eventKey="Web" title="Web Development/Design">
                                <TabBarContent />
                            </Tab>
                            <Tab eventKey="App" title="App Development/Design">
                                <TabBarContent />
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
        </>
    )
}
