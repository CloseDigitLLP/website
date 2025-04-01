import React,{useEffect} from 'react';
import portfolioDetailsCommon from '../../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function PreviewSlider({ images }) {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 0,
    });
  }, []);


  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className={portfolioDetailsCommon.landingPageSection}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={portfolioDetailsCommon.landingPageImg}>
            <Image
              width={500}
              height={500}
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

