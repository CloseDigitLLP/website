import portfolioWorkStyle from '../../styles/portfolio/portfolioWork.module.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import data from "../../resources/portfolioDetails.json"
import UiUxTab from './TabBar/UiUxProjects';
import WebTab from './TabBar/WebsiteProjects';
import AppTab from './TabBar/AppProjects';
import AllProjects from './TabBar/AllProjects';

const groupIntoPairs = (projects) => {
    let pairs = [];
    for (let i = 0; i < projects.length; i += 2) {
        pairs.push(projects.slice(i, i + 2));
    }
    return pairs;
};

export default function OurWorkContent() {

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

                    <div className={portfolioWorkStyle["trusted-brands-section"]}>
                        <div><img
                            src="/portfolio/shopify.svg"
                            alt="Animated"
                            className={portfolioWorkStyle['brand-img']}
                        /></div>
                        <div><img
                            src="/portfolio/google.svg"
                            alt="Animated"
                            className={portfolioWorkStyle['brand-img']}
                        /></div>
                        <div><img
                            src="/portfolio/pintrest.svg"
                            alt="Animated"
                            className={portfolioWorkStyle['brand-img']}
                        /></div>
                        <div><img
                            src="/portfolio/stripe.svg"
                            alt="Animated"
                            className={portfolioWorkStyle['brand-img']}
                        /></div>
                        <div><img
                            src="/portfolio/reddit.svg"
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
