import bannerStyle from '../../styles/portfolio/portfolioBanner.module.scss'
import Image from 'next/image'
import Link from 'next/link'


export default function PortfolioBanner(){
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
                                src={require('../../assets/images/animated-logo.svg')}
                                alt="Animated"
                                width={300}
                                height={70}
                                className="animated-logo-image"
                            />
                            {/* <h2 className={bannerStyle['banner-title']}>Close<span className={bannerStyle['Change-title']}>Digit</span></h2> */}
                            <p className={bannerStyle['banner-description']}>A group of creative designers and software developers who work together to provide the best work possible and assist clients in turning their concepts into successful realities.</p>
                            <Link href={'/Contact'}>
                                <button type="button" className="btn btn-primary">Get in touch <span className='btn-animation'></span></button>
                            </Link>
                        </div>
                        
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Image
                                src={require('../../assets/images/portfolioBanner.svg')}
                                alt="Banner"
                                width={584}
                                height={435}
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