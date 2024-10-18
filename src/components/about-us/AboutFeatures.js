import aboutFeature from '../../styles/aboutUs/aboutFeature.module.scss'
import {
    faLightbulb,
    faClock,
    faUsersViewfinder,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function AboutFeature(){
return(
    <section className={`section-spacing`}>
        <div className="section-title-part">
            <p className="back-title">Our Features</p>
            <h5 className="section-title">Awesome Features</h5>
       </div>
       <div className="container">
        <div className="row">
            <div  className={`${aboutFeature['fadeInUp']} col-lg-4 mb-3 mb-lg-0` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faLightbulb} />
                        </div>
                        <h3 className={aboutFeature['card-title']}><span>Best</span>Understanding</h3>
                        <p>We are aware that in order to live up to our commitment, we must adopt entirely new methods of operation and make sustainability a key component of our output.</p>
                    </div>
                </div>
            </div>
            <div  className={`${aboutFeature['fadeInUp']} col-lg-4 mb-3 mb-lg-0` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faUsersViewfinder} />
                        </div>
                        <h3 className={aboutFeature['card-title']}><span>Customer</span>Focused</h3>
                        <p>By merging technology, concepts, and abilities, we assist today&apos;s enterprises in being ready for the future. Committed to providing the greatest level of quality and service.</p>
                    </div>
                </div>
            </div>
            <div  className={`${aboutFeature['fadeInUp']} col-lg-4 mb-3 mb-lg-0` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                        <h3 className={aboutFeature['card-title']}><span>Available</span>when needed</h3>
                        <p>Offer customers effective Products, Services and Develop business growth that go above and beyond their expectations. Capable of providing service whenever a consumer needs it</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
       
    </section>
)
}