
import React, {useEffect} from 'react';
import Image from 'next/image';
import CommonStyle from '../../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


const TechnologySection = ({ data }) => {


  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 0,
    });
  }, []);


  return (
    <div className={CommonStyle['technology-section']} id="technology-section">
      <div  className="container">
        <div className={CommonStyle['technology-heading-section']}>
          <h2 data-aos="zoom-out" className={CommonStyle['main-heading']}>Tools & Technology</h2>
        </div>
        <div data-aos="zoom-in" className={CommonStyle['technology-row']}>
          {data.map((tech, index) => (
            <div key={index} className={`technology ${CommonStyle['technology']}`}>
              <Image
                src={tech.icon}
                alt={tech.name}
                width={100}
                height={100}
              />
              <p className={CommonStyle['technology-text']}>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
