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
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,

        991: {
            items: 2,
        },
        1024:{
            items: 2,
        },
        1280: {
            items: 3,
        },
    }

export default function ClientStory(){
   return(
    <section className={`${clientStoryStyle.clientStorySection} section-spacing`}>
    <div className="section-title-part">
        <p className="back-title">Our Client Review</p>
        <h5 className="section-title">What our client say</h5>
   </div>
    <div className='container'>
        <div>
            <OwlCarousel
               loop
               nav={false}
            //    responsive={Responsive}
                responsive={{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
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
                                <Image
                                    src={require('../../assets/images/David.jpg')}
                                    alt="client-image" 
                                    width={50}
                                    height={50}
                                    className={`${clientStoryStyle.image}`}
                                    quality={100}
                                />
                           </div>
                           <div>
                               <h6>David Ozersky</h6>
                               <small>Mensanta,CTO</small>
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
                                <Image
                                    src={require('../../assets/images/client-2.jpg')}
                                    alt="client-image" 
                                    width={50}
                                    height={50}
                                    className={`${clientStoryStyle.image}`}
                                    quality={100}
                                />
                           </div>
                           <div>
                               <h6>Harsh Goel</h6>
                               <small>Proptech,CEO</small>
                           </div>
                       </div>
                   </div>
               </div>
               <div className='item'>
                   <div className={`${clientStoryStyle.testimonialBlock}`}>
                       <div className={`${clientStoryStyle.testimonialImage}`}>
                           <span className={`${clientStoryStyle.quote}`}>“</span>
                           <p>We were astounded by their efficiency, cost-effectiveness, and working style. Being able to work with them has been enjoyable.</p>
                       </div>
                       <div className={`${clientStoryStyle.clientImage}`}>
                           <div className={`${clientStoryStyle.imagePart}`}>
                                <Image
                                    src={require('../../assets/images/client.jpg')}
                                    alt="client-image" 
                                    width={50}
                                    height={50}
                                    className={`${clientStoryStyle.image}`}
                                    quality={100}
                                />
                           </div>
                           <div>
                               <h6>Peter Tuskrey</h6>
                               <small>Head IT</small>
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