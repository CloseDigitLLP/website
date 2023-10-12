import technologyContent from '../../styles/technology/technologyContent.module.scss'
import aboutFeature from '../../styles/aboutUs/aboutFeature.module.scss'

 
import {
    faPaintBrush,
    faCode,
    faShieldAlt,
    faLaptopCode,
    faCloudUploadAlt,
    faMobileScreenButton,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TechnologyContent(){
 return(
        <section className={`section-spacing`}>
            <div className="section-title-part">
                <p className="back-title">Our Strategy</p>
                <h5 className="section-title">Our Strategy</h5>
            </div>
            <div className="container">
        <div className="row justify-content-center">
            <div className={`${aboutFeature['fadeInUp']} col-lg-6 col-md-12  mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faPaintBrush} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>Discover</h3>
                        <p>We develop brands through discovery, using in-depth research to constantly test presumptions.</p>
                    </div>
                </div>
            </div>
            <div className={`${aboutFeature['fadeInUp']} col-lg-6 col-md-12  mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                        <FontAwesomeIcon icon={faLaptopCode} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>Design</h3>
                        <p>We take a minimalistic approach to design. We relish the satisfaction of making something special that is simple for end customers.</p>
                    </div>
                </div>
            </div>
            <div className={`${aboutFeature['fadeInUp']} col-lg-6 col-md-12 mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>Build</h3>
                        <p>With the support of technology innovations, we construct with effectiveness and competence, producing adaptable and scalable business-driven solutions.</p>
                    </div>
                </div>
            </div>
             <div className={`${aboutFeature['fadeInUp']} col-lg-6 col-md-12 mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>Deliver</h3>
                        <p>We employ an iterative process in both our work and practise, constantly seeking to do things better.</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
        </section>
 )
}