import servicesStyle from '../../styles/home/services.module.scss'
import {
    faPaintBrush,
    faCode,
    faLaptopCode,
    faCloudUploadAlt,
    faMobileScreenButton,
    faShieldAlt,
    faLifeRing,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services(){
 return(
        <section className={`${servicesStyle.serviceSection} section-spacing`}>
            <div className="section-title-part">
                <p className="back-title">We are working on</p>
                <h5 className="section-title">We Provide Awesome Services</h5>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                        <FontAwesomeIcon icon={faPaintBrush} />
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>UI/UX Design</h3>
                        <p className={`${servicesStyle.description}`}>We provide comprehensive UI/UX services that include branding and promotional graphics.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                        <FontAwesomeIcon icon={faLaptopCode} />
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>Website/App Design</h3>
                        <p className={`${servicesStyle.description}`}>We create cross-platform compatible responsive websites and adaptive designs.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>Web Development</h3>
                        <p className={`${servicesStyle.description}`}>We create cutting-edge online applications that enable real-time user collaboration.</p>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                           <FontAwesomeIcon icon={faMobileScreenButton}/>
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>App Development</h3>
                        <p className={`${servicesStyle.description}`}>Across a variety of industrial verticals, we are developing, evaluating, and enhancing next-generation solutions.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                           <FontAwesomeIcon icon={faShieldAlt}/>
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>Quality Assurance</h3>
                        <p className={`${servicesStyle.description}`}>Offers advanced software testing services, and has testing staff that is committed to improving quality.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                           <FontAwesomeIcon icon={faCloudUploadAlt}/>
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>Cloud & Devops</h3>
                        <p className={`${servicesStyle.description}`}>Performance for apps of the highest order while hosting your IT infrastructure online.</p>
                    </div>
                </div>
               
            </div>
            </div>
            
        </section>
 )
}