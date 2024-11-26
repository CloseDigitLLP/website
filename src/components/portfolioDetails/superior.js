import React, { useEffect, useState } from 'react';
import superiorStyle from '../../styles/portfolioDetails/superior.module.scss';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';

export default function Superior() {
  const [laptopPosition, setLaptopPosition] = useState(150);
  const [phonePosition, setPhonePosition] = useState(150);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setLaptopPosition(Math.max(150 - 3.5 * scrollY, -2000)); 
      setPhonePosition(Math.max(150 - 3.5 * scrollY, -1000));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={portfolioDetailsCommon.mainSection}>
      <div className={superiorStyle.bannerSection}>
        <div className="container">
          <div className={superiorStyle.sectionContent}>
            <h3
              
              className={portfolioDetailsCommon.bannerPrimaryText}
            >
              Customize Your Car with the Best Parts
              <br />
              <span className={superiorStyle.mainheadingSpan}>
                Superior Engineering
              </span>
            </h3>
            <div className={superiorStyle.scrollSection}>
                <img
                  className={superiorStyle.bannerLaptopImg}
                  style={{ right: `${laptopPosition}px` }}
                  src="/work/2024/superior/laptop.png"
                  alt="LaptopImg"
                />
                <img
                  className={superiorStyle.bannerPhoneImg}
                  style={{ left: `${phonePosition}px` }}
                  src="/work/2024/superior/phone.png"
                  alt="PhoneImg"
                />
            </div>
            <p className={portfolioDetailsCommon.bannerSecondaryText}>
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

