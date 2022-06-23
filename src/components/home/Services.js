import servicesStyle from '../../styles/home/services.module.scss'
import {
    faClone,
    faChartPie,
    faBox,
    faCog,
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
                            <FontAwesomeIcon icon={faClone} />
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>Exclusive Design</h3>
                        <p className={`${servicesStyle.description}`}>We provide quick and detailed answers for your awesome business.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                        <FontAwesomeIcon icon={faBox} />
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>Responsive Layout</h3>
                        <p className={`${servicesStyle.description}`}>We provide quick and detailed answers for your awesome business.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                            <FontAwesomeIcon icon={faChartPie} />
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>Easy to Customize</h3>
                        <p className={`${servicesStyle.description}`}>We provide quick and detailed answers for your awesome business.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                           <FontAwesomeIcon icon={faCog} />
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>Customization</h3>
                        <p className={`${servicesStyle.description}`}>We provide quick and detailed answers for your awesome business.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                           <FontAwesomeIcon icon={faShieldAlt}/>
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>Secure Services</h3>
                        <p className={`${servicesStyle.description}`}>We provide quick and detailed answers for your awesome business.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className={`${servicesStyle.serviceCard} card`}>
                        <div className={servicesStyle['icon']}>
                           <FontAwesomeIcon icon={faLifeRing}/>
                        </div>
                        <h3 className={`${servicesStyle.cardHeading} mb-3`}>Custom Support</h3>
                        <p className={`${servicesStyle.description}`}>We provide quick and detailed answers for your awesome business.</p>
                    </div>
                </div>
            </div>
            </div>
            
        </section>
 )
}