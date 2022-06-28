// import React from "react";
// import clientStoryStyle from '../../styles/home/clientStory.module.scss'
// var $ = require('jquery');
// if (typeof window !== 'undefined') {
//     window.$ = window.jQuery = require('jquery');
// }
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

// // import dynamic from 'next/dynamic';
// // const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
// //     ssr: false,
// // });




// // const Responsive = {
// //     // loop:true,
// //     // margin:10,
// //     // autoplay:true,
// //     // autoplayTimeout:3000,
// //     // autoplayHoverPause:true,
// //     991: {
// //         items: 1,
// //     },
// //     1280: {
// //         items: 3,
// //     }
// // }

// export default function ClientStory() {
//     return (
//         <>
//             <section className={`${clientStoryStyle.clientStorySection} section-spacing`}>
//                 <div className="section-title-part">
//                     <p className="back-title">Our Client Review</p>
//                     <h5 className="section-title">What our client say</h5>
//                 </div>
//                 <div className='container'>
//                     <div>
//                         <OwlCarousel
//                             loop
//                             nav={false}
//                             responsive={Responsive}
//                             autoPlay={true}
//                             dots={false}
//                             autoplayTimeout={2000}
//                             autoplaySpeed={2000}
//                             autoplayHoverPause={false}
//                         >
//                             <div className='item'>
//                                 <div className={`${clientStoryStyle.testimonialBlock}`}>
//                                     <div className={`${clientStoryStyle.testimonialImage}`}>
//                                         <span className={`${clientStoryStyle.quote}`}>“</span>
//                                         <p>Exercitation ullamco laboris nisi ut aliquip exea commod consequat. Duis aute irure dolor in reprehenderit.</p>
//                                     </div>
//                                     <div className={`${clientStoryStyle.clientImage}`}>
//                                         <div className={`${clientStoryStyle.imagePart}`}>
//                                             <img src="images/client.jpg" alt="client-image" className={`${clientStoryStyle.image}`} />
//                                         </div>
//                                         <div>
//                                             <h6>Aditi Makadiya</h6>
//                                             <small>Co-Founder</small>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='item'>
//                                 <div className={`${clientStoryStyle.testimonialBlock}`}>
//                                     <div className={`${clientStoryStyle.testimonialImage}`}>
//                                         <span className={`${clientStoryStyle.quote}`}>“</span>
//                                         <p>Exercitation ullamco laboris nisi ut aliquip exea commod consequat. Duis aute irure dolor in reprehenderit.</p>
//                                     </div>
//                                     <div className={`${clientStoryStyle.clientImage}`}>
//                                         <div className={`${clientStoryStyle.imagePart}`}>
//                                             <img src="images/client.jpg" alt="client-image" className={`${clientStoryStyle.image}`} />
//                                         </div>
//                                         <div>
//                                             <h6>Aditi Makadiya</h6>
//                                             <small>Co-Founder</small>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='item'>
//                                 <div className={`${clientStoryStyle.testimonialBlock}`}>
//                                     <div className={`${clientStoryStyle.testimonialImage}`}>
//                                         <span className={`${clientStoryStyle.quote}`}>“</span>
//                                         <p>Exercitation ullamco laboris nisi ut aliquip exea commod consequat. Duis aute irure dolor in reprehenderit.</p>
//                                     </div>
//                                     <div className={`${clientStoryStyle.clientImage}`}>
//                                         <div className={`${clientStoryStyle.imagePart}`}>
//                                             <img src="images/client.jpg" alt="client-image" className={`${clientStoryStyle.image}`} />
//                                         </div>
//                                         <div>
//                                             <h6>Aditi Makadiya</h6>
//                                             <small>Co-Founder</small>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='item'>
//                                 <div className={`${clientStoryStyle.testimonialBlock}`}>
//                                     <div className={`${clientStoryStyle.testimonialImage}`}>
//                                         <span className={`${clientStoryStyle.quote}`}>“</span>
//                                         <p>Exercitation ullamco laboris nisi ut aliquip exea commod consequat. Duis aute irure dolor in reprehenderit.</p>
//                                     </div>
//                                     <div className={`${clientStoryStyle.clientImage}`}>
//                                         <div className={`${clientStoryStyle.imagePart}`}>
//                                             <img src="images/client.jpg" alt="client-image" className={`${clientStoryStyle.image}`} />
//                                         </div>
//                                         <div>
//                                             <h6>Aditi Makadiya</h6>
//                                             <small>Co-Founder</small>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='item'>
//                                 <div className={`${clientStoryStyle.testimonialBlock}`}>
//                                     <div className={`${clientStoryStyle.testimonialImage}`}>
//                                         <span className={`${clientStoryStyle.quote}`}>“</span>
//                                         <p>Exercitation ullamco laboris nisi ut aliquip exea commod consequat. Duis aute irure dolor in reprehenderit.</p>
//                                     </div>
//                                     <div className={`${clientStoryStyle.clientImage}`}>
//                                         <div className={`${clientStoryStyle.imagePart}`}>
//                                             <img src="images/client.jpg" alt="client-image" className={`${clientStoryStyle.image}`} />
//                                         </div>
//                                         <div>
//                                             <h6>Aditi Makadiya</h6>
//                                             <small>Co-Founder</small>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </OwlCarousel>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }