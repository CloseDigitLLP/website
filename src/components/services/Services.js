import aboutFeature from '../../styles/aboutUs/aboutFeature.module.scss'
import {
    faPaintBrush,
    faLaptopCode,
    faCloudUploadAlt,
    faDesktop,
    faCode,
    faMobileScreenButton,
    faComments,
    faClone,
    faLightbulb,
    faClock,
    faUsersViewfinder,
    faChartPie,
    faBox,
    faCog,
    faShieldAlt,
    faLifeRing,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function Services(){
return(
    <section className={`section-spacing`}>
        <div className="section-title-part">
            <p className="back-title">Our Services</p>
            <h5 className="section-title">Our Services</h5>
       </div>
       <div className="container">
        <div className="row justify-content-center">
            <div className={`${aboutFeature['fadeInUp']} col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faPaintBrush} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>UI/UX Design</h3>
                    </div>
                </div>
            </div>
            <div className={`${aboutFeature['fadeInUp']} col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                        <FontAwesomeIcon icon={faLaptopCode} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>Web/App Design </h3>
                    </div>
                </div>
            </div>
            <div className={`${aboutFeature['fadeInUp']} col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>Web Development</h3>
                    </div>
                </div>
            </div>
             <div className={`${aboutFeature['fadeInUp']} col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>App Development</h3>
                    </div>
                </div>
            </div>
            <div className={`${aboutFeature['fadeInUp']} col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faShieldAlt} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>Quality Assurance</h3>
                    </div>
                </div>
            </div>
             <div className={`${aboutFeature['fadeInUp']} col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faCloudUploadAlt} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>Cloud & Devops</h3>
                    </div>
                </div>
            </div>
            {/* <div className={`${aboutFeature['fadeInUp']} col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faDesktop} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>Desktop Application</h3>
                    </div>
                </div>
            </div>
          
             <div className={`${aboutFeature['fadeInUp']} col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-4` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faComments} />
                        </div>
                        <h3 className={aboutFeature['card-title']}>Consultancy</h3>
                    </div>
                </div>
            </div> */}
        </div>
       </div>
       
    </section>
)
}