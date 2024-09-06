
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import CommonStyle from '../../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import $ from 'jquery';


const TechnologySection = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);
  
  useEffect(() => {
    const doAnimations = () => {
        const offset = $(window).scrollTop() + $(window).height();
        const $animatables = $('.animatable');

        if ($animatables.length === 0) {
            $(window).off('scroll', doAnimations);
        }

        $animatables.each(function () {
            const $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 500) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });
    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

    return () => {
        $(window).off('scroll', doAnimations);
    };
}, []);


  return (
    <div className={CommonStyle['technology-section']} id="technology-section">
      <div className="container animatable bounceInRight">
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
