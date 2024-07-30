import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import vaidStyle from "../../styles/portfolioDetails/vaid.module.scss"
import img from '../../assets/images/work/2024/vaid/phone.png'

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);


  return (
    <section ref={targetRef} className={vaidStyle['carousel-container']}>
      <div className={vaidStyle['sticky-container']}>
          <motion.div style={{ x }} className={vaidStyle['carousel']}>
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className={vaidStyle['card']} key={card.id}>
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={vaidStyle['card-image']}
      ></div>
      <div className={vaidStyle['card-content']}>
        <p className={vaidStyle['card-title']}>{card.title}</p>
      </div>
    </div>
  );
};

const cards = [
  { url: "/imgs/abstract/1.jpg", title: "Title 1", id: 1 },
  { url: "/imgs/abstract/2.jpg", title: "Title 2", id: 2 },
  { url: "/imgs/abstract/3.jpg", title: "Title 3", id: 3 },
  { url: "/imgs/abstract/4.jpg", title: "Title 4", id: 4 },
  { url: "/imgs/abstract/5.jpg", title: "Title 5", id: 5 },
  { url: "/imgs/abstract/6.jpg", title: "Title 6", id: 6 },
  { url: "/imgs/abstract/7.jpg", title: "Title 7", id: 7 },
];


export default HorizontalScrollCarousel;
