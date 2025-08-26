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



// import React, { useState } from 'react';
// import Lottie from 'lottie-react';
// import animation1 from "../../../public/work/lottie-files/Map.json";
// import animation2 from "../../../public/work/lottie-files/Owner-Track-View.json";
// import animation3 from "../../../public/work/lottie-files/Schedule_Visit_All.json";
// import animation4 from "../../../public/work/lottie-files/Search.json";
// import styles from '../../styles/portfolioDetails/vaynoapp.module.scss';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// import Image from 'next/image';
// import dynamic from 'next/dynamic';
// var $ = require('jquery');
// if (typeof window !== 'undefined') {
//     window.$ = window.jQuery = require('jquery');
// }

// import 'owl.carousel/dist/assets/owl.carousel.css';

// const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
//     ssr: false,
// });

// const VaynoApp = () => {
//     const [activeSlide, setActiveSlide] = useState(0);

//     const settings = {
//         dots: false,
//         arrows: true,
//         infinite: true,
//         autoplay: true,
//         speed: 1000,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         beforeChange: (_, next) => setActiveSlide(next),
//     };

//     const slides = [
//         { id: 0, animation: animation1, text: "This is Lottie 1" },
//         { id: 1, animation: animation2, text: "This is Lottie 2" },
//         { id: 2, animation: animation3, text: "This is Lottie 3" },
//         { id: 3, animation: animation4, text: "This is Lottie 3" }
//     ];

//     return (
//         <div className='container'>
//             <div className={styles['slider-part']}>
//                 <OwlCarousel
//                     loop
//                     nav={false}
//                     autoplay={true}
//                     // responsive={{
//                     //     0: {
//                     //         items: 3,
//                     //         margin: 30
//                     //     },
//                     //     600: {
//                     //         items: 3,
//                     //         margin: 30
//                     //     },
//                     //     1000: {
//                     //         items: 4
//                     //     }
//                     // }}
//                     items={2}
//                     autoPlay={false}
//                     dots={false}
//                     autoplayTimeout={2000}
//                     autoplaySpeed={2000}
//                     autoplayHoverPause={false}
                    
//                 >
//                     {slides.map((slide, index) => (
//                         <div
//                             key={slide.id}
//                             className={`${styles['slider-card']} ${index === activeSlide ? styles['active'] : ''
//                                 }`}
//                         >
//                             <div className={styles['slider-img-part']}>
//                                 <div className={`${styles['lottie-animation-container']} ${index === activeSlide ? styles['active'] : ''
//                                     }`}>
//                                     <div style={{ position: 'absolute', top: 11, left: 12, width: '100%', height: '100%' }}>
//                                         <div style={{ width: '92%', height: 'auto', borderRadius: '40px' }}>
//                                             <Lottie animationData={slide.animation} autoplay={index === activeSlide} loop={index === activeSlide} />
//                                         </div>
//                                     </div>
//                                     <Image
//                                         src='/work/2024/tonight-band/mobile-mockup.png'
//                                         alt="Animated"
//                                         width={300}
//                                         height={620}
//                                     />
//                                 </div>
//                                 <div className={styles['back-image']}>
//                                     <Image src="/work/2024/vayno/slider-img-1.png" alt='slider image' width={312} height={440} />
//                                 </div>
//                             </div>
//                             <div className={styles['slider-text-part']}>
//                                 <p className={styles['slider-text']}>{slide.text}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </OwlCarousel>
//             </div>
//         </div>
//     );
// };

// export default VaynoApp;

