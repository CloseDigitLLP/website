import React from "react";
import clientStoryStyle from '../../styles/home/clientStory.module.scss'
import dynamic from 'next/dynamic';
import Image from 'next/image'

var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}


import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const Responsive = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    991: {
        items: 2,
    },
    1024: {
        items: 2,
    },
    1280: {
        items: 3,
    },
}

export default function ClientStory() {
    return (
        <section className={`${clientStoryStyle.clientStorySection} section-spacing`}>
            <div className="section-title-part">
                <p className="back-title">Our Clients Review</p>
                <h5 className="section-title">What our clients say</h5>
            </div>
            <div className='container'>
                <div>
                    <OwlCarousel
                        loop
                        nav={false}
                        //    responsive={Responsive}
                        responsive={{
                            0: {
                                items: 1
                            },
                            600: {
                                items: 2
                            },
                            1000: {
                                items: 3
                            }
                        }}
                        items={2}
                        autoPlay={true}
                        dots={false}
                        autoplayTimeout={2000}
                        autoplaySpeed={2000}
                        autoplayHoverPause={false}
                    >
                        <div className='item'>
                            <div className={`${clientStoryStyle.testimonialBlock}`}>
                                <div className={`${clientStoryStyle.testimonialImage}`}>
                                    <span className={`${clientStoryStyle.quote}`}>“</span>
                                    <p>Excellent management and delivery. They provide information, thoughts, and ideas so we can produce a better project.</p>
                                </div>
                                <div className={`${clientStoryStyle.clientImage}`}>
                                    <div className={`${clientStoryStyle.imagePart}`}>
                                        {/* <Image
                                            src={require('../../assets/images/David.jpg')}
                                            alt="client-image"
                                            width={50}
                                            height={50}
                                            className={`${clientStoryStyle.image}`}
                                            quality={100}
                                        /> */}
                                        <div className={`${clientStoryStyle.namePart}`}>DO</div>
                                    </div>
                                    <div>
                                        <h6>David Ozersky</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className={`${clientStoryStyle.testimonialBlock}`}>
                                <div className={`${clientStoryStyle.testimonialImage}`}>
                                    <span className={`${clientStoryStyle.quote}`}>“</span>
                                    <p>It was a positive experience. very thankful developers who are skilled and persistent. reachable at any moment and accessible.</p>
                                </div>
                                <div className={`${clientStoryStyle.clientImage}`}>
                                    <div className={`${clientStoryStyle.imagePart}`}>
                                        {/* <Image
                                            src={require('../../assets/images/client-2.jpg')}
                                            alt="client-image"
                                            width={50}
                                            height={50}
                                            className={`${clientStoryStyle.image}`}
                                            quality={100}
                                        /> */}
                                        <div className={`${clientStoryStyle.namePart}`}>HG</div>
                                    </div>
                                    <div>
                                        <h6>Harsh Goel</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className={`${clientStoryStyle.testimonialBlock}`}>
                                <div className={`${clientStoryStyle.testimonialImage}`}>
                                    <span className={`${clientStoryStyle.quote}`}>“</span>
                                    <p>We received entries from over 2 dozens website designesr. VRteam solution was the only one that took careful consideration to follow our design brief in great detail. They very much understood our business and our customer to make the correct design.</p>
                                </div>
                                <div className={`${clientStoryStyle.clientImage}`}>
                                    <div className={`${clientStoryStyle.imagePart}`}>
                                        {/* <Image
                                            src={require('../../assets/images/client.jpg')}
                                            alt="client-image"
                                            width={50}
                                            height={50}
                                            className={`${clientStoryStyle.image}`}
                                            quality={100}
                                        /> */}
                                        <div className={`${clientStoryStyle.namePart}`}>CB</div>
                                    </div>
                                    <div>
                                        <h6>Cocolaat Brand</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className={`${clientStoryStyle.testimonialBlock}`}>
                                <div className={`${clientStoryStyle.testimonialImage}`}>
                                    <span className={`${clientStoryStyle.quote}`}>“</span>
                                    <p>They respond to all messages within 15 minutes, even when there is a 10 hour time difference. When we needed edits to their initial design, the turn around time was 24 hours. We will work with them for the rest of our site.</p>
                                </div>
                                <div className={`${clientStoryStyle.clientImage}`}>
                                    <div className={`${clientStoryStyle.imagePart}`}>
                                        {/* <Image
                                            src={require('../../assets/images/client.jpg')}
                                            alt="client-image"
                                            width={50}
                                            height={50}
                                            className={`${clientStoryStyle.image}`}
                                            quality={100}
                                        /> */}
                                        <div className={`${clientStoryStyle.namePart}`}>CB</div>
                                    </div>
                                    <div>
                                        <h6>Cocolaat Brand</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className={`${clientStoryStyle.testimonialBlock}`}>
                                <div className={`${clientStoryStyle.testimonialImage}`}>
                                    <span className={`${clientStoryStyle.quote}`}>“</span>
                                    <p>We love our new landingpage design! And really happy to work in future projects together</p>
                                </div>
                                <div className={`${clientStoryStyle.clientImage}`}>
                                    <div className={`${clientStoryStyle.imagePart}`}>
                                        {/* <Image
                                            src={require('../../assets/images/client.jpg')}
                                            alt="client-image"
                                            width={50}
                                            height={50}
                                            className={`${clientStoryStyle.image}`}
                                            quality={100}
                                        /> */}
                                        <div className={`${clientStoryStyle.namePart}`}>CD</div>
                                    </div>
                                    <div>
                                        <h6>CR_DE</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className={`${clientStoryStyle.testimonialBlock}`}>
                                <div className={`${clientStoryStyle.testimonialImage}`}>
                                    <span className={`${clientStoryStyle.quote}`}>“</span>
                                    <p>The coorperation was great. Quick replies and attention for our feedback. Nothing was too much and we love the end result of our logo. Would definitely use again for other projects.</p>
                                </div>
                                <div className={`${clientStoryStyle.clientImage}`}>
                                    <div className={`${clientStoryStyle.imagePart}`}>
                                        {/* <Image
                                            src={require('../../assets/images/client.jpg')}
                                            alt="client-image"
                                            width={50}
                                            height={50}
                                            className={`${clientStoryStyle.image}`}
                                            quality={100}
                                        /> */}
                                        <div className={`${clientStoryStyle.namePart}`}>on</div>
                                    </div>
                                    <div>
                                        <h6>onuralq</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className={`${clientStoryStyle.testimonialBlock}`}>
                                <div className={`${clientStoryStyle.testimonialImage}`}>
                                    <span className={`${clientStoryStyle.quote}`}>“</span>
                                    <p>The designer was very attentive and responded so quickly. We highly recommend working with them.</p>
                                </div>
                                <div className={`${clientStoryStyle.clientImage}`}>
                                    <div className={`${clientStoryStyle.imagePart}`}>
                                        {/* <Image
                                            src={require('../../assets/images/client.jpg')}
                                            alt="client-image"
                                            width={50}
                                            height={50}
                                            className={`${clientStoryStyle.image}`}
                                            quality={100}
                                        /> */}
                                        <div className={`${clientStoryStyle.namePart}`}>an</div>
                                    </div>
                                    <div>
                                        <h6>angemac11</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}