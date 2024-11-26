import footerStyle from '../../styles/common/footer.module.scss';
import Link from 'next/link'
import Image from 'next/image'
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
                        <Image
                                src={require('../../assets/images/logo-white.svg')}
                                alt="logo"
                                width={150}
                                height={20}
                                className="animated-logo-image"
                            />
                        </div>
                        <div className={footerStyle['description']}>
                            <p>A group of creative designers and software developers who work together to provide the best work possible and assist clients in turning their concepts into successful realities.</p>
                        </div>
                        <div className={footerStyle['social-button']}>
                            {/* <a href="">
                                <FontAwesomeIcon icon={faFacebook} className={footerStyle['social-icon']}/>
                            </a> */}
                            <a href="https://www.linkedin.com/company/close-digit/">
                                <FontAwesomeIcon icon={faLinkedin} className={footerStyle['social-icon']}/>
                            </a>
                            {/* <a href="">
                                <FontAwesomeIcon icon={faTwitter} className={footerStyle['social-icon']}/>
                            </a> */}
                            <a href="https://www.instagram.com/closedigit__it/">
                                <FontAwesomeIcon icon={faInstagram} className={footerStyle['social-icon']}/>
                            </a>
                            
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-12 custom-margin-top'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-4 col-sm-6'>
                                <h6 className={footerStyle['footer-heading']}>About Us</h6>
                                <div className={footerStyle['description']}>
                                    <Link href="/AboutUs" className={footerStyle['link']}>
                                        About Us
                                    </Link>
                                    <Link className={footerStyle['link']} href="/Services">
                                        Services
                                    </Link>
                                    <Link className={footerStyle['link']} href="/Technology">
                                        Technology  
                                    </Link>
                                    {/* <Link href="/project">
                                        <a href="" className={footerStyle['link']}>Projects</a>
                                    </Link> */}
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
                                        <a href="tel:+9979961576" className={footerStyle['fieldData']}>+91-9979961576</a>
                                    </div>
                                    <div className={footerStyle['field']}>
                                        <FontAwesomeIcon icon={faEnvelope} className={footerStyle['contact-icon']}/>
                                        <a href="mailto:amakadiya98@gmail.com" className={footerStyle['fieldData']}>sales@closedigit.com</a>
                                    </div>
                                    <div className={footerStyle['field']} >
                                        <FontAwesomeIcon icon={faLocationDot} className={footerStyle['contact-icon']}/>
                                        <h6 className={`${footerStyle.fieldData} ${footerStyle.fieldDataAddress}`}>301 - Agarwal Mall,<br />Opp. Sola Bhagwat Gate, Ahmedabad<br/> 380060<br /></h6>
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