import React from 'react'
import portfolioWorkStyle from '../../styles/portfolio/portfolioWork.module.scss'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import data from "../../resources/portfolioDetails.json"

const groupIntoPairs = (projects) => {
    let pairs = [];
    for (let i = 0; i < projects.length; i += 2) {
        pairs.push(projects.slice(i, i + 2));
    }
    return pairs;
}
export default function TabBarContent() {
    const animateRefs = Array.from({ length: 16 }, () => useRef(null));
    const triggerRefs = Array.from({ length: 16 }, () => useRef(null));
    const showRef = Array.from({ length: 16 }, () => useRef(null));

    useEffect(() => {
        const initializeScrollMagic = async () => {
            const { default: ScrollMagic } = await import('scrollmagic');
            await import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

            const controller = new ScrollMagic.Controller();
            animateRefs.forEach((animateRef, index) => {
                const scene = new ScrollMagic.Scene({
                    triggerElement: triggerRefs[index].current,
                    duration: 500,
                    triggerHook: 0.7
                })
                    .setClassToggle(animateRef.current, portfolioWorkStyle['scale-up'])
                    .addIndicators()
                    .addTo(controller);
                return () => {
                    controller.destroy(true);
                    scene.destroy(true);
                };
            });
            showRef.forEach((showRef, index) => {
                const scene = new ScrollMagic.Scene({
                    triggerElement: triggerRefs[index].current,
                    duration: 500,
                    triggerHook: 0.7
                })
                    .setClassToggle(showRef.current, portfolioWorkStyle['showDetails'])
                    .addIndicators()
                    .addTo(controller);
                return () => {
                    controller.destroy(true);
                    scene.destroy(true);
                };
            });
        };
        initializeScrollMagic();
    }, []);

    const projectPairs = groupIntoPairs(data.projectPairs);
    return (
        <div>
            {projectPairs.map((pair, pairIndex) => (
                <div key={pairIndex} className={portfolioWorkStyle['brand-part']}>
                    {pair.map((project, index) => (
                        <div key={index} ref={triggerRefs[pairIndex * 2 + index]} className='main-content'>
                            <div id={portfolioWorkStyle[project.id]}
                                className={portfolioWorkStyle[`imgBox${pairIndex * 2 + index}`]}
                                ref={animateRefs[pairIndex * 2 + index]}>
                                <Link href={project.href}>
                                    <div>
                                        <Image
                                            src={require(`../../assets/${project.imgSrc}`)}
                                            alt={project.title}
                                            className={portfolioWorkStyle['brand-img']}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div ref={showRef[pairIndex * 2 + index]} className={portfolioWorkStyle["project-info"]}>
                                <h3 className={portfolioWorkStyle["project-title"]}>{project.title}</h3>
                                <div className={portfolioWorkStyle['brand-info']}>
                                    <div className={portfolioWorkStyle['tech-logo']}>
                                        {project.tech.map((techItem, techIndex) => (
                                            <div key={techIndex} className={portfolioWorkStyle['logo']}>
                                                <Image src={require(`../../assets/${techItem.src}`)} alt={techItem.name} width={24} height={24} />
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
