/* eslint-disable @next/next/no-img-element */
import React, {useEffect} from 'react'
// import amendSoilStyles from '../../styles/portfolioDetails/jvConstruction.module.scss';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import amendSoilStyles from '../../styles/portfolioDetails/amendsoil.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DesignProcess from './portfolioDetailsCommon/designProcess';
import TechnologySection from './portfolioDetailsCommon/technologySection';
import data from "../../resources/portfolioDetails.json";
import PreviewSlider from './portfolioDetailsCommon/previewSlider';
import ShowcaseSlider from './portfolioDetailsCommon/showcaseSlider';


export default function AmendTheSoil() {
    
      useEffect(() => {
        AOS.init({
          duration: 1600,
          once: true, 
          offset: 200, 
        });
      }, []);
  return (
    <div className={portfolioDetailsCommon.mainSection}>
       <div className={amendSoilStyles.bannerMainSection}>
          <div className={amendSoilStyles.bannerSection}>
            <div className="container">
              <div className={`${amendSoilStyles.sectionContent}`}>
                <h3 data-aos="slide-left" className={portfolioDetailsCommon.bannerPrimaryText}>Register for Upcoming Events & Gatherings: <span className={amendSoilStyles.mainheadingSpan}>Amending the Soil</span>
                </h3>
                <div data-aos="flip-up" className={amendSoilStyles.bannerImg}>
                  <div className={amendSoilStyles.bannerInnerImg}>
                  </div>
                </div>
                <p className={portfolioDetailsCommon.bannerSecondaryText}>The design for the &apos;Amending the Soil&apos; website focuses on simplicity and functionality, allowing users to easily register for upcoming events and gatherings. The homepage features a clean layout with a prominent registration form and a dedicated section showcasing upcoming events. Each event is displayed with key details, including the title, date, and a brief description, with a clear call-to-action button for easy sign-up. The design incorporates an intuitive user flow, ensuring a seamless registration experience while keeping the overall aesthetic minimal and user-friendly.</p>
              </div>
            </div>
          </div>
    
        </div>
        <div className={amendSoilStyles.showcaseSection}>
        <div className='container'>
        <h3 data-aos="slide-left" className={portfolioDetailsCommon.bannerPrimaryText}>Innovative design solution for Website: <br/>
         <span className={amendSoilStyles.mainheadingSpan}> Amending the Soil</span> Showcase
        </h3>
        </div>
        <ShowcaseSlider slides={data.ShowCaseData.amendSoil}/>
        </div>
        <DesignProcess description="At Amending the Soil, our design process begins with understanding your specific needs and objectives. For events like 'Cruch,' we conduct thorough research and planning to ensure clear goals. Our team brainstorms and creates initial prototypes for the event structure and related resources. We gather feedback through community engagement to refine our offerings. By closely collaborating with partners and stakeholders, we ensure seamless implementation, continuously enhancing the process to provide an exceptional experience for all participants."/>
        <TechnologySection data={data.techdata.amendSoil}/>
        {/* color pallet */}
            <div className={`${amendSoilStyles['colorPalletContainer']}`}>
                <div className="container">
                    <h3 data-aos="slide-left" className={portfolioDetailsCommon['mainheading']}>
                        Color Palette presentation for
                        <br /><span className={amendSoilStyles.mainheadingSpan}>Amending the Soil</span> 
                    </h3>
                    <p>The design of the &apos;Amending the Soil&apos; website features a carefully curated color palette that enhances the user experience. The soft cream background creates a warm and inviting atmosphere, while accents of dark walnut add depth and sophistication. Light gold brings warmth and elegance, and muted taupe complements these tones, creating a harmonious and earthy feel. This color scheme reflects the values of sustainability and connection, fostering an engaging and aesthetically pleasing environment for visitors.</p>

                    <div className={portfolioDetailsCommon.colorPalette} data-aos="flip-down">
                        <div className={`${portfolioDetailsCommon.colorPalette1} ${amendSoilStyles.colorPalette1}`}><div className={`${portfolioDetailsCommon.imageContainer} ${amendSoilStyles.imageContainer}`}><img src="/work/2024/amend-soil/colorPalette1.png" alt="colorPalette" /></div></div>
                        <div className={`${portfolioDetailsCommon.colorPalette2} ${amendSoilStyles.colorPalette2}`}><div className={`${portfolioDetailsCommon.imageContainer} ${amendSoilStyles.imageContainer}`}><img src="/work/2024/amend-soil/colorPalette2.png" alt="colorPalette" /></div></div>
                        <div className={`${portfolioDetailsCommon.colorPalette3} ${amendSoilStyles.colorPalette3}`}><div className={`${portfolioDetailsCommon.imageContainer} ${amendSoilStyles.imageContainer}`}><img src="/work/2024/amend-soil/colorPalette3.png" alt="colorPalette" /></div></div>
                        <div className={`${portfolioDetailsCommon.colorPalette4} ${amendSoilStyles.colorPalette4}`}><div className={`${portfolioDetailsCommon.imageContainer} ${amendSoilStyles.imageContainer}`}><img src="/work/2024/amend-soil/colorPalette4.png" alt="colorPalette" /></div></div>
                    </div>
                </div>
            </div>
    </div>
  )
}
