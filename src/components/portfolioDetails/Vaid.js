import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import vaidStyle from '../../styles/portfolioDetails/vaid.module.scss';

export default function Vaid() {
  const sectionsRef = useRef([]);
  const phoneImgRef = useRef(null);

  useEffect(() => {
    const initializeGsap = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const screenWidth = window.innerWidth;
      const xPercentValue = screenWidth > 1920 ? -450 : -300;

      const sections = sectionsRef.current;
      const phoneSection = phoneImgRef.current;
      const scrollContainer = document.querySelector(`.${vaidStyle.scrollMain}`);
      const imgContainer = document.querySelector(`.${vaidStyle.bannerSection}`);

      const tli = gsap.timeline({
        scrollTrigger: {
          trigger: phoneSection,
          start: "top top",
          end: () => `+=${scrollContainer.offsetWidth + 2000}`,
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
      tli.to(phoneSection, {
        xPercent: xPercentValue,
        scale: -0.2,
        opacity: 0,
        ease: 'none',
      });


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          pin: true,
          scrub: true,
          end: () => `+=${scrollContainer.offsetWidth}`,
        },
      });

      tl.to(sections, {
        xPercent: -100,
        ease: 'none',
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.killTweensOf(sections);
        gsap.killTweensOf(phoneSection);
      };
    };

    initializeGsap();
  }, []);

  return (
    <>
      <section className={vaidStyle.bannerSection}>
        <div className="container">
          <div className={vaidStyle.content}>
            <div>
              <h3>
                Crafting Timeless Spaces: Unveiling the <span>Interior Design</span>
              </h3>
            </div>
            <div className={vaidStyle.bgImg}>
              <div className={vaidStyle.bannerImg} ref={phoneImgRef}>
                <div>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/phone.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                </div>
              </div>
            </div>
            <div>
              <p>
                VAID is a specialized messaging app designed to facilitate seamless communication between clients and interior architects. Whether you're planning a renovation, decorating a new space, or need regular updates on your project, VAID keeps you informed and connected. It includes a feature for daily evidence updates, allowing architects to share progress photos with clients, and provides access to view plans and designs directly through the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={vaidStyle.horiScrollSection}>
        <div className={vaidStyle.overflowHidden}>
          <div className={vaidStyle.scrollMain}>
            <div ref={el => sectionsRef.current[0] = el} className={`${vaidStyle.singleSection}`}>
              <div className={vaidStyle.horiImgContainer}>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img1.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    01 - Welcome Screen <br /> VAID streamlines access with phone and OTP login, eliminating the need to remember a password.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img2.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    02 - After WS <br />After logging in, clients can effortlessly access folders with plans, drawings, and requirements, ensuring convenient access to all project details.

                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img3.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    03 - View plan <br />designIt shows the inner view of the folder named "Execution."
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img4.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    04 - Thread meassage <br />Additionally, it features a messenger-like interface for seamless communication between clients and architects, allowing for regular updates and easy inquiries.

                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img5.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    05 - Create threadThe <br /> messenger-like interface allows clients to create threads using a button at the bottom, facilitating easy communication with the architect team for quick responses and updates.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img6.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    06 - groupThe <br />functionality to add members allows clients to view and access plans and designs.
                  </p>
                </div>
                <div className={vaidStyle.imgContent}>
                  <Image
                    src={require('../../assets/images/work/2024/vaid/vaid-img7.png')}
                    alt="Animated"
                    className={vaidStyle.phoneImg}
                  />
                  <p>
                    07 - inbox <br />The inbox displays holiday messages, festival posts, new updates, and more.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

