import bannerStyle from '../../styles/home/banner.module.scss';
import contactBanner from '../../styles/contact/contactBanner.module.scss';


export default function ContactBanner(){
    return(
        // <div className={bannerStyle['home-area']}>
        <div className={contactBanner['contact-area']}>
        
        <div className={bannerStyle['home-section']}>
            <div className="container">
                <div className="row">
                <div className="col-md-12 col-lg-6 d-flex">
                    <div className={bannerStyle['banner-text']}>
                        <div className="typewriter">
                            <h3 className={bannerStyle['banner-heading']}>Encourage innovation with</h3>
                        </div>

                        <img src="images/animated-logo.svg" alt="animated" className='animated-logo-image'></img>
                       
                        {/* <h2 className={bannerStyle['banner-title']}>Close<span className={bannerStyle['Change-title']}>Digit</span></h2> */}
                        <p className={bannerStyle['banner-description']}>We Are Help To Grow Your Business. Increase Your Revenue Average Using Our Smart Solutions.</p>
                        <p className={bannerStyle['banner-description']}>Thinking the high quality grow your brand.</p>
                    </div>
                    
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img src={'images/contactUs.gif'} alt="banner" className={bannerStyle['banner-image']}></img>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${bannerStyle.blankImage} ${contactBanner.blankImage}`}></div>
    </div>
    );
}