
import React, {useEffect} from 'react';
import Image from 'next/image';
import CommonStyle from '../../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


const TechnologySection = ({ data }) => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
      once: true,
      offset: 200,
    });
  }, []);


  return (
    <div className={CommonStyle['technology-section']} id="technology-section">
      <div data-aos="slide-left" className="container">
        <div className={CommonStyle['technology-heading-section']}>
          <h2 className={CommonStyle['main-heading']}>Tools & Technology</h2>
        </div>
        <div className={CommonStyle['technology-row']}>
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
