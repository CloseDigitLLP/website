import aboutStyle from '../../styles/home/aboutUs.module.scss'
import Image from 'next/image'

export default function AboutUs(){
    return(
        <section className={`${aboutStyle['aboutUs-section']} section-spacing `}>
            <div className="section-title-part">
                <p className="back-title">About us</p>
                <h5 className="section-title">About Us</h5>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                        <Image
                            src={require('../../assets/images/about-us.gif')}
                            alt="Banner"
                            width={580}
                            height={570}
                            className={`${aboutStyle['about-us-image']} cw-80`}
                            quality={100}
                        />
                    </div>
                    <div className="col-lg-6 col-md-12 cmt-3">
                        <div className={aboutStyle['aboutUs-content']}></div>
                        <h6 className='title'><span className="change-title">Our mission </span>is to make your business better through technology.</h6>
                        <p className={aboutStyle['description']}>A team of Creative Minds designing best Apps and Website for the World. An effective tool for your customers to uncover solutions for creating something amazing.</p>
                        <p className={aboutStyle['description']}>Our team collaborates closely with the client to ensure that the product they are developing not only succeeds but also leaves a positive user experience by being simple to use and considering the needs of its consumers.</p>
                        <p className={aboutStyle['description']}>Every facet of company, including business models, procedures, and consumer relationships, is being disrupted by digital. Our digital solutions are focused on giving you the technology to truly "With digital" as well as a transformation plan. We assist your company objectives and take care of all your business technologies, from site design and development to setting up and maintaining your brand's digital presence.</p>
                        <ul className={aboutStyle['list']}>
                            <li className={aboutStyle['list-item']}>Deliver Exclusive design</li>
                            <li className={aboutStyle['list-item']}>Best development</li>
                            <li className={aboutStyle['list-item']}>We Provide Awesome Services</li>
                        </ul>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className={aboutStyle['blankImage']}></div>
        </section>
    )
}