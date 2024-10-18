import bannerStyle from '../../styles/home/banner.module.scss'
import aboutUsBanner from '../../styles/aboutUs/aboutUsBanner.module.scss'
import Image from 'next/image'

export default function AboutBanner(){
    return(
        <div className={bannerStyle['home-area']}>
        <div className={aboutUsBanner['home-section']}>
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-12 d-flex">
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
                        <p className={bannerStyle['banner-description']}>A group of creative designers and software developers who work together to provide the best work possible and assist clients in turning their concepts into successful realities.</p>
                        <p className={bannerStyle['banner-description']}>Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful.</p>
                        <button type="button" className="btn btn-primary">Contact Us<span className='btn-animation'></span></button>
                    </div>
                    
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Image
                            src={require('../../assets/images/about-banner-2.png')}
                            alt="banner"
                            width={600}
                            height={430}
                            className={aboutUsBanner['banner-image']}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className={bannerStyle['blankImage']}></div>
    </div>
    )

}