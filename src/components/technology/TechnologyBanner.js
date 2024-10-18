import bannerStyle from '../../styles/home/banner.module.scss'
import Image from 'next/image'


export default function TechnologyBanner(){
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
                            <Image
                                src='/imagesssss/animated-logo.svg'
                                alt="Animated"
                                width={300}
                                height={70}
                                className="animated-logo-image"
                            />
                            {/* <h2 className={bannerStyle['banner-title']}>Close<span className={bannerStyle['Change-title']}>Digit</span></h2> */}
                            <p className={bannerStyle['banner-description']}>Business issue solving is ingrained in our DNA. Frontend Army also possesses the necessary technical know-how to make this happen. Your software development project needs the necessary resources, and we have them. You have the idea. We have the resources.</p>
                            <button type="button" className="btn btn-primary">Get in touch <span className='btn-animation'></span></button>
                        </div>
                        
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Image
                                src={require('../../assets/images/technologyBanner.png')}
                                alt="Banner"
                                width={600}
                                height={550}
                                className={bannerStyle['banner-image']}
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