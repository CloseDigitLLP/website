import bannerStyle from '../../styles/home/banner.module.scss'
import workBannerStyle from '../../styles/work/workBanner.module.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function WorkIndex(){
    return(
        <section className={`${workBannerStyle['workBanner-section']} section-spacing`}>
        <div className="section-title-part">
            <p className="back-title">Portfolio</p>
            <h5 className="section-title">Our work</h5>
        </div>
        <div className="container">
           <div className='row'>
                <div className='col-md-5'>
                    <Link href="/venini">
                        <div className={`card ${workBannerStyle['card-portfolio']}`}>
                            <div className={`${workBannerStyle['cardImage']}`}>
                                <Image
                                    src={require('../../assets/images/work/venini.png')}
                                    alt="Animated"
                                    width={500}
                                    height={350}
                                    className="animated-logo-image"
                                />
                            </div>
                            <div className={`${workBannerStyle['project-name']}`}>
                                Venini Artglass - Ecommerce Website
                            </div>
                            <div className={`${workBannerStyle['project-cartegory']}`}>
                                Graphics Design / Ecommerce Website / development
                            </div>
                        </div>
                    </Link>
                </div>
               
                <div className='col-md-7'></div>
           </div>
        </div>
      
    </section>
    )
}