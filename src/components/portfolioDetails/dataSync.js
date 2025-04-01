import dataSyncStyle from '../../styles/portfolioDetails/dataSync.module.scss'
import React, { useEffect } from 'react';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import data from '../../resources/portfolioDetails.json';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

export default function DataSync() {


  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 0,
    });
  }, []);

  const options = {
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: false,
    margin: 20,
    loop: true,
    rtl: true,
    responsiveClass: true,
    autoWidth: false,
    nav: true,
    dots: false,
    stagePadding: 0,
    responsive: {
      0: { items: 1.2 },
      700: { items: 2 },
      1200: { items: 2.2 },
      1800: { items: 2.5 }
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 1600,
      once: true,
      offset: 0,
    });
  }, [])

  return (
    <div className={portfolioDetailsCommon.mainSection}>
      <div className={dataSyncStyle.bannerSection}>
        <div className="container">
          <div className={`${dataSyncStyle.sectionContent}`}>
            <h3 data-aos="slide-left" className={portfolioDetailsCommon.bannerPrimaryText}>Automate E-Commerce by <br />
              <span className={dataSyncStyle.mainheadingSpan}>Data Sync</span>
            </h3>
            <div data-aos="flip-up" className={dataSyncStyle.bannerImg}>
              <div className={dataSyncStyle.bannerInnerImg}>
              </div>
            </div>
            <p className={portfolioDetailsCommon.bannerSecondaryText}>This platform is dedicated to advancing technology for seamless data synchronization in e-commerce. By implementing innovative solutions, we enable businesses to effortlessly connect their systems, ensuring accurate and real-time data updates. Our focus on automation and artificial intelligence empowers companies to enhance their operational efficiency, streamline inventory management, and improve customer experiences, paving the way for growth in the digital landscape.</p>
          </div>
        </div>
      </div>


      {/* innovative Design Section */}
      <div className={dataSyncStyle.innovativeDesignSection}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon.mainheading}>Innovative design solution: <br />
            <span className={dataSyncStyle.mainheadingSpan}>Data Sync</span>
          </h3>
          <div className={dataSyncStyle.innovativeContent}>
            <Image src="/work/2024/dataSync/laptop-img.svg" width={400} height={400} layout='responsive' alt="img" />
          </div>
          <p className={portfolioDetailsCommon.bannerSecondaryText}>We design with user-friendliness in mind, ensuring our solutions are easy to navigate and intuitive. Our portfolio includes references from satisfied clients, showcasing our commitment to quality. We are proud to be solution partners with leading technology providers, enabling us to deliver exceptional services that meet the evolving needs of e-commerce businesses.</p>
        </div>
      </div>


      {/* window Section */}
      <div className={dataSyncStyle.windowSection}>
        <div className='container'>
          <div className={dataSyncStyle.windowPart}>
            <div className={dataSyncStyle.leftWindow}>
              <img src="/work/2024/dataSync/windowImg1.svg" alt="" />
            </div>
            <div className={dataSyncStyle.rightWindow}>
              <img src="/work/2024/dataSync/windowImg2.svg" alt="" />
            </div>
          </div>
          <p className={portfolioDetailsCommon.bannerSecondaryText}>We design a user-friendly dual-option switch that allows brands and sellers to view and manage their information simultaneously. This innovative feature enhances workflow efficiency, enabling easy toggling between perspectives and quick access to essential data.</p>
        </div>
      </div>
      <TechnologySection data={data.techdata.datasync} />

      {/* Codecraft section*/}
      <div className={dataSyncStyle.codecraftSection}>
        <div className='container'>
          <h3 className={portfolioDetailsCommon.bannerPrimaryText}>
            Codecraft: <br /><span className={dataSyncStyle.mainheadingSpan}>Data Sync</span> journey in Development
          </h3>
          <div className={dataSyncStyle.contentPart}>
            <div className='row g-4'>
              <div className="col-lg-6">
                <img src="/work/2024/dataSync/code-craft.png" alt="img" width='100%' />
              </div>
              <div className="col-lg-6">
                <div className='d-flex align-items-center h-100'>
                  <p className={portfolioDetailsCommon.bannerSecondaryText}>We design with a focus on data synchronization, utilizing vectors to illustrate the seamless flow of information. Our approach ensures that brands and sellers can effortlessly access and manage their data in real-time. This empowers businesses to enhance efficiency, improve decision-making, and maintain accurate inventory across platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider Section */}
      <section className={dataSyncStyle['sliderSection']}>
        <div className="container">
          <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
            Innovative Features in <br /><span className={dataSyncStyle.mainheadingSpan}>Data Sync</span>
          </h3>

          <OwlCarousel data-aos="slide-up" className={`${dataSyncStyle['owlcarousel']} ${dataSyncStyle['review-owlcarousel']}`} navText={["", ""]}  {...options}>
            <div className={`${dataSyncStyle['slider-item']}`}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={dataSyncStyle['imgPart']}>
                    <Image
                      src='/work/2024/dataSync/sliderImg1.png'
                      alt="Animated"
                      width={350}
                      height={274}
                      layout='responsive'
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h6>
                    <span>Client Detail Page</span> <br />
                    it shows the client&apos;s location and project details for efficient management. It also features to create threads and submit evidence for streamlined communication and updates.
                  </h6>
                </div>
              </div>
            </div>
            <div className={`${dataSyncStyle['slider-item']}`}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={dataSyncStyle['imgPart']}>
                    <Image
                      src='/work/2024/dataSync/sliderImg2.png'
                      alt="Animated"
                      width={350}
                      height={274}
                      layout='responsive'
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h6>
                    <span>Submit Evidencewhere</span> <br /> where you can click to add photos, show location on the photos, and include descriptions so client can easily know about the work.
                  </h6>
                </div>
              </div>
            </div>
            <div className={`${dataSyncStyle['slider-item']}`}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={dataSyncStyle['imgPart']}>
                    <Image
                      src='/work/2024/dataSync/sliderImg3.png'
                      alt="Animated"
                      width={350}
                      height={274}
                      layout='responsive'
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h6>
                    <span>Timer</span> <br />
                    function for employees allows them to select a client and start a timer. It tracks all in and out times according to the timer, providing a detailed log of work hours.
                  </h6>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

    </div>
  );
}

