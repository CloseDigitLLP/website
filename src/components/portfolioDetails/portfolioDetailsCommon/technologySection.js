
import React, {useEffect} from 'react';
import Image from 'next/image';
import CommonStyle from '../../../styles/portfolioDetails/portfolioDetailsCommon.module.scss'; // Adjust the path as needed
import dynamic from 'next/dynamic';

const TechnologySection = ({ data }) => {

    const ScrollMagic = dynamic(() => import('scrollmagic'), { ssr: false });
    const ScrollMagicController = dynamic(() => import('scrollmagic').then(mod => mod.Controller), { ssr: false });

    useEffect(() => {

        const ScrollMagic = require('scrollmagic');
        const controller = new ScrollMagic.Controller();

        const section = document.querySelector('#technology-section');
        const elements = document.querySelectorAll('.technology');

        if (!section || elements.length === 0) {
            console.log('Section or elements not found');
            console.log(section , 'section')
            console.log(elements, 'elements')
            return;
        }

        elements.forEach((el, index) => {
            new ScrollMagic.Scene({
                triggerElement: section, 
                triggerHook: 0.9,
                duration: '50%', 
                offset: index * 100, 
            })
            .on('enter', () => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            })
            // .on('leave', () => {
            //     el.style.opacity = '0';
            //     el.style.transform = 'translateY(50px)';
            //     el.style.transition = 'opacity 0.6s ease-in, transform 0.6s ease-in';
            // })
            .addTo(controller);
        });

        return () => {
            controller.destroy();
        };
    }, []);

  return (
    <div className={CommonStyle['technology-section']} id="technology-section">
      <div className="container">
        <div className={CommonStyle['technology-heading-section']}>
          <h2 className={CommonStyle['main-heading']}>Tools & Technology</h2>
        </div>
        <div className={CommonStyle['technology-row']}>
          {data.map((tech, index) => (
            <div key={index} className={`technology ${CommonStyle['technology']}`}>
              <Image
                src={require(`../../../assets/${tech.icon}`)}
                alt={tech.name}
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
