import bannerStyle from '../../styles/portfolio/portfolioBanner.module.scss'
import Image from 'next/image'
import Link from 'next/link'


export default function PortfolioBanner() {
    return (
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
                                    src="/imagesssss/animated-logo.svg"
                                    alt="Animated"
                                    width={300}
                                    height={70}
                                    className="animated-logo-image"
                                />

                                <p className={bannerStyle['banner-description']}>A group of creative designers and software developers who work together to provide the best work possible and assist clients in turning their concepts into successful realities.</p>
                                <Link href={'/Contact'}>
                                    <button type="button" className="btn btn-primary">Get in touch <span className='btn-animation'></span></button>
                                </Link>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className={bannerStyle['textSection']}>
                                {/* <Image
                                src={require('../../assets/images/portfolioBanner.svg')}
                                alt="Banner"
                                width={584}
                                height={435}
                                className={bannerStyle['banner-image']}
                                quality={100}
                            /> */}

                                <h2 className={bannerStyle['closeText']}>
                                    {/* <div className={bannerStyle['rotate-img']}>
                                </div> */}
                                    CLOSE</h2>
                                <h2 className={bannerStyle['digitText']}>DIGIT<span>.</span></h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={bannerStyle['blankImage']}></div>

        </div>


    )
}


