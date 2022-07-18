import bannerStyle from '../../styles/home/banner.module.scss'

export default function ServiceBanner(){
    return(
        <div className={bannerStyle['home-area']}>
        <div className={bannerStyle['home-section']}>
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-12 d-flex">
                    <div className={bannerStyle['banner-text']}>
                        <div className="typewriter">
                            <h3 className={bannerStyle['banner-heading']}>Encourage innovation with</h3>
                        </div>
                        <img src="images/animated-logo.svg" alt="animated" className='animated-logo-image'></img>
                        {/* <h2 className={bannerStyle['banner-title']}>Close<span className={bannerStyle['Change-title']}>Digit</span></h2> */}
                        <p className={bannerStyle['banner-description']}>A Group Of Software Developers And Creative Designers Who Are Connected To Deliver Best Work Out Of The Box, And Helps Clients To Convert Their Ideas To A Successful Reality.</p>
                        <p className={bannerStyle['banner-description']}>Make your business rich with the CloseDigit Powerful tool for your customer to help user find solution for build something great.</p>
                        <button type="button" className="btn btn-primary">Contact Us<span className='btn-animation'></span></button>
                    </div>
                    
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img src={'images/service-banner.png'} alt="banner" className={bannerStyle['banner-image']}></img>
                    </div>
                </div>
            </div>
        </div>
        <div className={bannerStyle['blankImage']}></div>
    </div>
    )

}