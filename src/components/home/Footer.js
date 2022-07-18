import footerStyle from '../../styles/home/footer.module.scss';
import {
   faFacebook,
   faLinkedin,
   faTwitter,
   faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faPhone,
    faEnvelope,
    faLocationDot,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services(){
    return(
        <>
        <section className={`${footerStyle.footerSection} section-spacing`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-md-12'>
                        <div className={footerStyle['footer-logo']}>
                            <img src={'images/logo-white.svg'} alt="logo"></img>
                        </div>
                        <div className={footerStyle['description']}>
                            <p>A Group Of Software Developers And Creative Designers Who Are Connected To Deliver Best Work Out Of The Box, And Helps Clients To Convert Their Ideas To A Successful Reality.</p>
                        </div>
                        <div className={footerStyle['social-button']}>
                            <a href="">
                                <FontAwesomeIcon icon={faFacebook} className={footerStyle['social-icon']}/>
                            </a>
                            <a href="">
                                <FontAwesomeIcon icon={faLinkedin} className={footerStyle['social-icon']}/>
                            </a>
                            <a href="">
                                <FontAwesomeIcon icon={faTwitter} className={footerStyle['social-icon']}/>
                            </a>
                            <a href="">
                                <FontAwesomeIcon icon={faInstagram} className={footerStyle['social-icon']}/>
                            </a>
                            
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-12 custom-margin-top'>
                        <div className='row mt-md-5'>
                            <div className='col-lg-3 col-md-4 col-sm-6'>
                                <h6 className={footerStyle['footer-heading']}>About Us</h6>
                                <div className={footerStyle['description']}>
                                    <a href="" className={footerStyle['link']}>About Us</a>
                                    <a href="" className={footerStyle['link']}>Projects</a>
                                    <a href="" className={footerStyle['link']}>Our Team</a>
                                </div>
                               
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6'>
                                <h6 className={footerStyle['footer-heading']}>Our Services</h6>
                                <div className={footerStyle['description']}>
                                    <a href=""  className={`${footerStyle.link} ${footerStyle.withoutLink}`}>UI/UX Design</a>
                                    <a href=""  className={`${footerStyle.link} ${footerStyle.withoutLink}`}>Web/App design</a>
                                    <a href=""  className={`${footerStyle.link} ${footerStyle.withoutLink}`}>Web Development</a>
                                    <a href=""  className={`${footerStyle.link} ${footerStyle.withoutLink}`}>App Development</a>
                                    <a href=""  className={`${footerStyle.link} ${footerStyle.withoutLink}`}>IT Services</a>
                                    <a href=""  className={`${footerStyle.link} ${footerStyle.withoutLink}`}>Consulting</a>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-4 col-sm-12'>
                                <h6 className={footerStyle['footer-heading']}>Contact Information</h6>
                                <div className={footerStyle['description']}>
                                    <div className={footerStyle['field']}>
                                        <FontAwesomeIcon icon={faPhone} className={footerStyle['contact-icon']}/>
                                        <a href="tel:+9979961576" className={footerStyle['field-data']}>+91 123456789</a>
                                    </div>
                                    <div className={footerStyle['field']}>
                                        <FontAwesomeIcon icon={faEnvelope} className={footerStyle['contact-icon']}/>
                                        <a href="mailto:amakadiya98@gmail.com" className={footerStyle['field-data']}>closeDigit9@gmail.com</a>
                                    </div>
                                    <div className={footerStyle['field']} >
                                        <FontAwesomeIcon icon={faLocationDot} className={footerStyle['contact-icon']}/>
                                        <h6 className={footerStyle['field-data']}>801 Building Name,<br />Area name,<br/>Ahmedabad, 380061<br /></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${footerStyle.copyRightSection}`}>
                <p className='mb-0'>Copyright @2022 <a target="_blank" href="" style={{textDecoration:'underline'}}>CloseDigit </a> All rights reserved.</p>
             </div>
          
        </section>
        
        </>
        
    )}