import React, { useEffect, useRef } from 'react';
import portfolioWorkStyle from '../../styles/portfolio/portfolioWork.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import data from "../../resources/portfolioDetails.json";

const groupIntoPairs = (projects) => {
    let pairs = [];
    for (let i = 0; i < projects.length; i += 2) {
        pairs.push(projects.slice(i, i + 2));
    }
    return pairs;
}

export default function TabBarContent() {
    const animateRefs = useRef(Array.from({ length: 18 }, () => null));
    const showRefs = useRef(Array.from({ length: 18 }, () => null));

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the container
            rootMargin: '0px',
            threshold: 0.7 // Trigger when 70% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.dataset.index);
                    // Add classes for animations
                    animateRefs.current[index].classList.add(portfolioWorkStyle['scale-up']);
                    showRefs.current[index].classList.add(portfolioWorkStyle['showDetails']);
                    observer.unobserve(entry.target); // Stop observing after it has animated
                }
            });
        }, options);

        // Observe each animated element
        animateRefs.current.forEach((el, index) => {
            if (el) {
                el.dataset.index = index; // Store the index in the dataset
                observer.observe(el);
            }
        });

        return () => {
            // Cleanup: disconnect the observer
            observer.disconnect();
        };
    }, []);

    const projectPairs = groupIntoPairs(data.projectPairs);

    return (
        <div>
            {projectPairs.map((pair, pairIndex) => (
                <div key={pairIndex} className={portfolioWorkStyle['brand-part']}>
                    {pair.map((project, index) => (
                        <div key={index} className='main-content'>
                            <div id={portfolioWorkStyle[project.id]}
                                className={portfolioWorkStyle[`imgBox${pairIndex * 2 + index}`]}
                                ref={el => animateRefs.current[pairIndex * 2 + index] = el}>
                                <Link href={project.href}>
                                    <div>
                                        <img
                                            src={project.imgSrc}
                                            alt={project.title}
                                            className={portfolioWorkStyle['brand-img']}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div ref={el => showRefs.current[pairIndex * 2 + index] = el} className={portfolioWorkStyle["project-info"]}>
                                <h3 className={portfolioWorkStyle["project-title"]}>{project.title}</h3>
                                <div className={portfolioWorkStyle['brand-info']}>
                                    <div className={portfolioWorkStyle['tech-logo']}>
                                        {project.tech.map((techItem, techIndex) => (
                                            <div key={techIndex} className={portfolioWorkStyle['logo']}>
                                                <Image src={techItem.src} alt={techItem.name} width={24} height={24} />
                                                <p>{techItem.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}













// import React from 'react';
// import portfolioWorkStyle from '../../styles/portfolio/portfolioWork.module.scss';
// import Image from 'next/image';
// import { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import data from "../../resources/portfolioDetails.json";

// const groupIntoPairs = (projects) => {
//     let pairs = [];
//     for (let i = 0; i < projects.length; i += 2) {
//         pairs.push(projects.slice(i, i + 2));
//     }
//     return pairs;
// }

// export default function TabBarContent() {
//     const animateRefs = useRef(Array.from({ length: 18 }, () => null));
//     const triggerRefs = useRef(Array.from({ length: 18 }, () => null));
//     const showRef = useRef(Array.from({ length: 18 }, () => null));

//     useEffect(() => {
//         const initializeScrollMagic = async () => {
//             const { default: ScrollMagic } = await import('scrollmagic');
//             await import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

//             const controller = new ScrollMagic.Controller();

//             animateRefs.current.forEach((animateRef, index) => {
//                 const scene = new ScrollMagic.Scene({
//                     triggerElement: triggerRefs.current[index],
//                     duration: 600,
//                     triggerHook: 0.7
//                 })
//                     .setClassToggle(animateRef, portfolioWorkStyle['scale-up'])
//                     .addIndicators()
//                     .addTo(controller);
//                 return () => {
//                     controller.destroy(true);
//                     scene.forEach((scene) => scene.destroy(true));
//                 };
//             });

//             showRef.current.forEach((showRef, index) => {
//                 const scene = new ScrollMagic.Scene({
//                     triggerElement: triggerRefs.current[index],
//                     duration: 600,
//                     triggerHook: 0.7
//                 })
//                     .setClassToggle(showRef, portfolioWorkStyle['showDetails'])
//                     .addIndicators()
//                     .addTo(controller);
//                 return () => {
//                     controller.destroy(true);
//                     scene.forEach((scene) => scene.destroy(true));
//                 };
//             });
//         };
//         initializeScrollMagic();
//     }, [animateRefs, showRef, triggerRefs]);

//     const projectPairs = groupIntoPairs(data.projectPairs);

//     return (
//         <div>
//             {projectPairs.map((pair, pairIndex) => (
//                 <div key={pairIndex} className={portfolioWorkStyle['brand-part']}>
//                     {pair.map((project, index) => (
//                         <div key={index} ref={el => triggerRefs.current[pairIndex * 2 + index] = el} className='main-content'>
//                             <div id={portfolioWorkStyle[project.id]}
//                                 className={portfolioWorkStyle[`imgBox${pairIndex * 2 + index}`]}
//                                 ref={el => animateRefs.current[pairIndex * 2 + index] = el}>
//                                 <Link href={project.href}>
//                                     <div>
//                                         <Image
//                                             src={project.imgSrc}
//                                             alt={project.title}
//                                             className={portfolioWorkStyle['brand-img']}
//                                             width={500}
//                                             height={300}
//                                         />
//                                     </div>
//                                 </Link>
//                             </div>
//                             <div ref={el => showRef.current[pairIndex * 2 + index] = el} className={portfolioWorkStyle["project-info"]}>
//                                 <h3 className={portfolioWorkStyle["project-title"]}>{project.title}</h3>
//                                 <div className={portfolioWorkStyle['brand-info']}>
//                                     <div className={portfolioWorkStyle['tech-logo']}>
//                                         {project.tech.map((techItem, techIndex) => (
//                                             <div key={techIndex} className={portfolioWorkStyle['logo']}>
//                                                 <Image src={techItem.src} alt={techItem.name} width={24} height={24} />
//                                                 <p>{techItem.name}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     )
// }










// import React from 'react'
// import portfolioWorkStyle from '../../styles/portfolio/portfolioWork.module.scss'
// import Image from 'next/image'
// import { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import data from "../../resources/portfolioDetails.json"

// const groupIntoPairs = (projects) => {
//     let pairs = [];
//     for (let i = 0; i < projects.length; i += 2) {
//         pairs.push(projects.slice(i, i + 2));
//     }
//     return pairs;
// }
// export default function TabBarContent() {
//     const animateRefs = Array.from({ length: 18 }, () => useRef(null));
//     const triggerRefs = Array.from({ length: 18 }, () => useRef(null));
//     const showRef = Array.from({ length: 18 }, () => useRef(null));

//     useEffect(() => {
//         const initializeScrollMagic = async () => {
//             const { default: ScrollMagic } = await import('scrollmagic');
//             await import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

//             const controller = new ScrollMagic.Controller();
//             animateRefs.forEach((animateRef, index) => {
//                 const scene = new ScrollMagic.Scene({
//                     triggerElement: triggerRefs[index].current,
//                     duration: 600,
//                     triggerHook: 0.7
//                 })
//                     .setClassToggle(animateRef.current, portfolioWorkStyle['scale-up'])
//                     .addIndicators()
//                     .addTo(controller);
//                 return () => {
//                     controller.destroy(true);
//                     scene.forEach((scene) => scene.destroy(true));
//                 };
//             });
//             showRef.forEach((showRef, index) => {
//                 const scene = new ScrollMagic.Scene({
//                     triggerElement: triggerRefs[index].current,
//                     duration: 600,
//                     triggerHook: 0.7
//                 })
//                     .setClassToggle(showRef.current, portfolioWorkStyle['showDetails'])
//                     .addIndicators()
//                     .addTo(controller);
//                 return () => {
//                     controller.destroy(true);
//                     scene.forEach((scene) => scene.destroy(true));
//                 };
//             });
//         };
//         initializeScrollMagic();
//     }, []);

//     const projectPairs = groupIntoPairs(data.projectPairs);
//     return (
//         <div>
//             {projectPairs.map((pair, pairIndex) => (
//                 <div key={pairIndex} className={portfolioWorkStyle['brand-part']}>
//                     {pair.map((project, index) => (
//                         <div key={index} ref={triggerRefs[pairIndex * 2 + index]} className='main-content'>
//                             <div id={portfolioWorkStyle[project.id]}
//                                 className={portfolioWorkStyle[`imgBox${pairIndex * 2 + index}`]}
//                                 ref={animateRefs[pairIndex * 2 + index]}>
//                                 <Link href={project.href}>
//                                     <div>
//                                         <img
//                                             src={project.imgSrc}
//                                             alt={project.title}
//                                             className={portfolioWorkStyle['brand-img']}
//                                         />
//                                     </div>
//                                 </Link>
//                             </div>
//                             <div ref={showRef[pairIndex * 2 + index]} className={portfolioWorkStyle["project-info"]}>
//                                 <h3 className={portfolioWorkStyle["project-title"]}>{project.title}</h3>
//                                 <div className={portfolioWorkStyle['brand-info']}>
//                                     <div className={portfolioWorkStyle['tech-logo']}>
//                                         {project.tech.map((techItem, techIndex) => (
//                                             <div key={techIndex} className={portfolioWorkStyle['logo']}>
//                                                 <Image src={techItem.src} alt={techItem.name} width={24} height={24} />
//                                                 <p>{techItem.name}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     )
// }
