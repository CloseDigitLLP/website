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
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const index = Number(entry.target.dataset.index);
                const animateEl = animateRefs.current[index];
                const showEl = showRefs.current[index];
    

                if (animateEl && showEl) {  
                    if (entry.isIntersecting) {
                        animateEl.classList.add(portfolioWorkStyle['scale-up']);
                        showEl.classList.add(portfolioWorkStyle['showDetails']);
                    } else {
                        animateEl.classList.remove(portfolioWorkStyle['scale-up']);
                        showEl.classList.remove(portfolioWorkStyle['showDetails']);
                    }
                }
            });
        }, options);
    
        animateRefs.current.forEach((el, index) => {
            if (el) {
                el.dataset.index = index;
                observer.observe(el);
            }
        });
    
        return () => {
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
                                {/* <h3 className={portfolioWorkStyle["project-title"]}>{project.title}</h3> */}
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
