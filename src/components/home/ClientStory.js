import React from "react";
import clientStoryStyle from '../../styles/home/clientStory.module.scss'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import data from '../../resources/data.json';

var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}

import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

function getInitials(name) {
    const nameParts = name.split(" ");
    return nameParts.map(part => part[0]).join("").toUpperCase();
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
                        responsive={{
                            0: {
                                items: 1
                            },
                            600: {
                                items: 1
                            },
                            1000: {
                                items: 2
                            }
                        }}
                        items={2}
                        autoPlay={true}
                        dots={false}
                        autoplayTimeout={2000}
                        autoplaySpeed={2000}
                        autoplayHoverPause={false}
                    >
                        {data?.reviews && (
                            data?.reviews?.map((review, index) => {
                                let initial = getInitials(review.name)
                                return (
                                    <div className={`${clientStoryStyle.item}`} key={index}>
                                        <div className={`${clientStoryStyle.testimonialBlock}`}>
                                            <div className={`${clientStoryStyle.center}`}>
                                                <span className={`${clientStoryStyle.star}`}>
                                                    <Image
                                                        src={require('../../assets/images/star.svg')}
                                                        alt="star"
                                                    />
                                                </span>
                                                <span className={`${clientStoryStyle.star}`}>
                                                    <Image
                                                        src={require('../../assets/images/star.svg')}
                                                        alt="star"
                                                    />
                                                </span>
                                                <span className={`${clientStoryStyle.star}`}>
                                                    <Image
                                                        src={require('../../assets/images/star.svg')}
                                                        alt="star"
                                                    />
                                                </span>
                                                <span className={`${clientStoryStyle.star}`}>
                                                    <Image
                                                        src={require('../../assets/images/star.svg')}
                                                        alt="star"
                                                    />
                                                </span>
                                                <span className={`${clientStoryStyle.star}`}>
                                                    <Image
                                                        src={require('../../assets/images/star.svg')}
                                                        alt="star"
                                                    />
                                                </span>
                                            </div>
                                            <div className={`${clientStoryStyle.text}`}>
                                                <p>{review.comment}</p>
                                            </div>
                                            <div className={`${clientStoryStyle.profile}`}>
                                                {review.image_path ? (<Image
                                                    src={review.image_path}
                                                    alt="client"
                                                    width={70}
                                                    height={70}
                                                />) : (<div className={`${clientStoryStyle.namePart}`}>{initial}</div>)}
                                            </div>
                                            <div className={`${clientStoryStyle.ClientName}`}>
                                                <h6>{review.name}</h6>

                                                <h6 className={`${clientStoryStyle.position}`}>{review.position}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}