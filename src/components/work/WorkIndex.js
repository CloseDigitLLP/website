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
           <div className='row justify-content-center'>
                <div className={`${workBannerStyle['workBanner-item']} col-md-6`}>
                    <Link href="/venini">
                        <div className={`card ${workBannerStyle['card-portfolio']}`}>
                            <div className={`${workBannerStyle['cardImage']}`}>
                                <Image
                                    src={require('../../assets/images/work/venini.png')}
                                    alt="Animated"
                                    width={580}
                                    height={380}
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
                <div className={`${workBannerStyle['workBanner-item']} col-md-6`}>
                    <Link href="/chilliPadi">
                        <div className={`card ${workBannerStyle['card-portfolio']}`}>
                            <div className={`${workBannerStyle['cardImage']}`}>
                                <Image
                                    src={require('../../assets/images/work/chillipadi.png')}
                                    alt="Animated"
                                    width={580}
                                    height={380}
                                    className="animated-logo-image"
                                />
                            </div>
                            <div className={`${workBannerStyle['project-name']}`}>
                                Chilli Padi - Catering Services
                            </div>
                            <div className={`${workBannerStyle['project-cartegory']}`}>
                                Angular, Node, Strapi, React (admin panel), MySql, Mssql, elastic search
                            </div>
                        </div>
                    </Link>
                </div>
                
                <div className={`${workBannerStyle['workBanner-item']} col-md-6`}>
                    <Link href="/feelingBatterNow">
                        <div className={`card ${workBannerStyle['card-portfolio']}`}>
                            <div className={`${workBannerStyle['cardImage']}`}>
                                <Image
                                    src={require('../../assets/images/work/fbn.png')}
                                    alt="Animated"
                                    width={600}
                                    height={350}
                                    className="animated-logo-image"
                                />
                            </div>
                            <div className={`${workBannerStyle['project-name']}`}>
                                Feeling Better now - Mental health assessmnet system
                            </div>
                            <div className={`${workBannerStyle['project-cartegory']}`}>
                                Design / NextJS / NodeJS  
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={`${workBannerStyle['workBanner-item']} col-md-6`}>
                    <Link href="/feelingBatterNow-app">
                        <div className={`card ${workBannerStyle['card-portfolio']}`}>
                            <div className={`${workBannerStyle['cardImage']}`}>
                                <Image
                                    src={require('../../assets/images/work/FBN-mobile-app.png')}
                                    alt="Animated"
                                    width={650}
                                    height={380}
                                    className="animated-logo-image"
                                />
                            </div>
                            <div className={`${workBannerStyle['project-name']}`}>
                               Feeling Batter Now - Mobile application development
                            </div>
                            <div className={`${workBannerStyle['project-cartegory']}`}>
                                Design / React Native / Mobile application
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={`${workBannerStyle['workBanner-item']} col-md-6`}>
                    <Link href="/feelingBatterNow">
                        <div className={`card ${workBannerStyle['card-portfolio']}`}>
                            <div className={`${workBannerStyle['cardImage']}`}>
                                <Image
                                    src={require('../../assets/images/work/practisePlus.png')}
                                    alt="Animated"
                                    width={600}
                                    height={350}
                                    className="animated-logo-image"
                                />
                            </div>
                            <div className={`${workBannerStyle['project-name']}`}>
                               Practice Plus - Virtual clinic on whatsapp
                            </div>
                            <div className={`${workBannerStyle['project-cartegory']}`}>
                                Design / Figma to Responsive design / Bootstrap
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={`${workBannerStyle['workBanner-item']} col-md-6`}>
                    <Link href="/feelingBatterNow">
                        <div className={`card ${workBannerStyle['card-portfolio']}`}>
                            <div className={`${workBannerStyle['cardImage']}`}>
                                <Image
                                    src={require('../../assets/images/work/commbitz.png')}
                                    alt="Animated"
                                    width={580}
                                    height={350}
                                    className="animated-logo-image"
                                />
                            </div>
                            <div className={`${workBannerStyle['project-name']}`}>
                               Commbiz - International <span className='text-lowercase'>e</span>SIM Management
                            </div>
                            <div className={`${workBannerStyle['project-cartegory']}`}>
                                Design / Figma to Responsive design / Bootstrap
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={`${workBannerStyle['workBanner-item']} col-md-6`}>
                    <Link href="/feelingBatterNow">
                        <div className={`card ${workBannerStyle['card-portfolio']}`}>
                            <div className={`${workBannerStyle['cardImage']}`}>
                                <Image
                                    src={require('../../assets/images/work/ChilliApi.png')}
                                    alt="Animated"
                                    width={580}
                                    height={350}
                                    className="animated-logo-image"
                                />
                            </div>
                            <div className={`${workBannerStyle['project-name']}`}>
                                ChilliApi - Resturant Booking application
                            </div>
                            <div className={`${workBannerStyle['project-cartegory']}`}>
                                Angular, Node, Strapi, React (admin panel), MySql, Mssql, elastic search
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={`${workBannerStyle['workBanner-item']} col-md-6`}>
                    <Link href="/snbla">
                        <div className={`card ${workBannerStyle['card-portfolio']}`}>
                            <div className={`${workBannerStyle['cardImage']}`}>
                                <Image
                                    src={require('../../assets/images/work/snbla.png')}
                                    alt="Animated"
                                    width={580}
                                    height={350}
                                    className="animated-logo-image"
                                />
                            </div>
                            <div className={`${workBannerStyle['project-name']}`}>
                               SNBLA - Shop now buy later Application
                            </div>
                            <div className={`${workBannerStyle['project-cartegory']}`}>
                                UI/UX Design / NextJS / Firebase / Bidirectional (LTR - RTL)
                            </div>
                        </div>
                    </Link>
                </div>
           </div>
        </div>
      
    </section>
    )
}