import portfolioWorkStyle from '../../styles/portfolio/portfolioWork.module.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import UiUxTab from './TabBar/UiUxProjects';
import WebTab from './TabBar/WebsiteProjects';
import AppTab from './TabBar/AppProjects';
import AllProjects from './TabBar/AllProjects';
import data from '../../resources/portfolioDetails.json';
import dynamic from 'next/dynamic';
import Image from 'next/image';

var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}

import 'owl.carousel/dist/assets/owl.carousel.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});


export default function OurWorkContent() {
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
                               <AllProjects/>
                            </Tab>
                            <Tab eventKey="UI/UX" title="UI/UX">
                                <UiUxTab />
                            </Tab>
                            <Tab eventKey="Web" title="Web Development">
                                <WebTab />
                            </Tab>
                            <Tab eventKey="App" title="App Development">
                                <AppTab/>
                            </Tab>
                        </Tabs>
                    </div>

                    <div className={portfolioWorkStyle["title-part"]}>
                        <div className="section-title-part">
                            <p className="back-title">TRUSTED CLIENT</p>
                            <h5 className="section-title">TRUSTED CLIENT</h5>
                        </div>
                    </div>

                    <div className='my-3'>
                    <OwlCarousel
                        loop
                        nav={false}
                        autoplay={true}
                        responsive={{
                            0: {
                                items: 3,
                                margin: 30 
                            },
                            600: {
                                items: 3,
                                margin: 30 
                            },
                            1000: {
                                items: 4
                            }
                        }}
                        items={2}
                        autoPlay={false}
                        dots={false}
                        autoplayTimeout={2000}
                        autoplaySpeed={2000}
                        autoplayHoverPause={false}
                    >
                        {data.clientCarouselData.map((client,index) => {
                                return (
                                    <div className={portfolioWorkStyle["clientCarousel"]} key={index}>
                                                <Image
                                                    src={client.logo}
                                                    alt="client"
                                                    width={200}
                                                    height={40}
                                                />
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                    </div>
                </div>
            </section>
        </>
    )
}
