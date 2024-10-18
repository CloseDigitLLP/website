import bannerStyle from '../../styles/home/banner.module.scss';
import contactBanner from '../../styles/contact/contactBanner.module.scss';
import Image from 'next/image'

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
                            <Image
                                src='/imagesssss/animated-logo.svg'
                                alt="Animated"
                                width={300}
                                height={70}
                                className="animated-logo-image"
                            />
                       
                        {/* <h2 className={bannerStyle['banner-title']}>Close<span className={bannerStyle['Change-title']}>Digit</span></h2> */}
                        <p className={bannerStyle['banner-description']}>We Are Help To Grow Your Business. Increase Your Revenue Average Using Our Smart Solutions.</p>
                        <p className={bannerStyle['banner-description']}>Thinking the high quality grow your brand.</p>
                    </div>
                    
                    </div>
                    <div className="col-md-12 col-lg-6">
                            <Image
                                src={require('../../assets/images/contactUs.gif')}
                                alt="banner"
                                width={600}
                                height={450}
                                className={bannerStyle['banner-image']}
                            />
                    </div>
                </div>
            </div>
        </div>
        <div className={`${bannerStyle.blankImage} ${contactBanner.blankImage}`}></div>
    </div>
    );
}