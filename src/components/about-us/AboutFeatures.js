import aboutFeature from '../../styles/aboutUs/aboutFeature.module.scss'
import {
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
                        <p>we run a successful remote for ready to use content for startups business technology or agency</p>
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
                        <p>we run a successful remote for ready to use content for startups business technology or agency</p>
                    </div>
                </div>
            </div>
            <div  className={`${aboutFeature['fadeInUp']} col-lg-4 mb-3 mb-lg-0` }>
                <div className={aboutFeature['card']}>
                    <div className={aboutFeature['card-body']}>
                        <div className={aboutFeature['icon-box']}>
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                        <h3 className={aboutFeature['card-title']}><span>Available</span>When you are</h3>
                        <p>we run a successful remote for ready to use content for startups business technology or agency</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
       
    </section>
)
}