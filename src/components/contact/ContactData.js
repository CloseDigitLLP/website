import contactData from '../../styles/contact/contactData.module.scss'
import {
    faLocationDot,
    faComments,
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function ContactData(){
    return(
        <section className={`${['contactSection']} section-spacing `}>
        <div className="section-title-part">
            <p className="back-title">CONTACT US</p>
            <h5 className="section-title">Contact Us</h5>
        </div>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0'>
                    <div className={`${contactData.card}`}>
                        <div className={`${contactData.cardBody}`}>
                            <div className={`${contactData.titleBox} mb-4`} >
                                <FontAwesomeIcon icon={faLocationDot} className={`${contactData.icon}`}/>
                                <div className={`${contactData.boxCircleLarge}`} ></div>
                                <div className={`${contactData.boxCircleSmall}`}></div>
                            </div>
                            <h3 className={`${contactData.office} mb-3`}>Visit Our Office</h3>
                            <p className={`${contactData.address} mb-0 w-90 w-md-75 w-lg-100 mx-auto`}>301, Agarwal Mall, Sola, Ahmedabad 380060.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0'>
                    <div className={`${contactData.card}`}>
                        <div className={`${contactData.cardBody}`}>
                            <div className={`${contactData.titleBox} mb-4`} >
                                <FontAwesomeIcon icon={faComments} className={`${contactData.icon}`}/>
                                <div className={`${contactData.boxCircleLarge}`} ></div>
                                <div className={`${contactData.boxCircleSmall}`}></div>
                            </div>
                            <h3 className={`${contactData.office} mb-3`}>Let&apos;s Talk</h3>
                            <p className={`${contactData.address} mb-0 w-90 w-md-75 w-lg-100 mx-auto`}><strong>Phone:</strong><a href="tel:+919979961576">+91-9979961576</a> </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0'>
                    <div className={`${contactData.card}`}>
                        <div className={`${contactData.cardBody}`}>
                            <div className={`${contactData.titleBox} mb-4`} >
                                <FontAwesomeIcon icon={faEnvelope} className={`${contactData.icon}`}/>
                                <div className={`${contactData.boxCircleLarge}`} ></div>
                                <div className={`${contactData.boxCircleSmall}`}></div>
                            </div>
                            <h3 className={`${contactData.office} mb-3`}>E-mail Us</h3>
                            <p className={`${contactData.address} mb-0 w-90 w-md-75 w-lg-100 mx-auto`}><a href="mailto:closeDigit9@gmail.com">sales@closedigit.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}