import aboutStyle from '../../styles/home/aboutUs.module.scss'


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
                        {/* <img src={'images/about-us.svg'} alt="about-us"></img> */}
                        <img src={'images/about-us.gif'} alt="about-us" className={`${aboutStyle['about-us-image']} cw-80`}></img>
                    </div>
                    <div className="col-lg-6 col-md-12 cmt-3">
                        <div className={aboutStyle['aboutUs-content']}></div>
                        <h6 className='title'><span className="change-title">Our mission </span>is to make your business better through technology.</h6>
                        <p className={aboutStyle['description']}>A team of Creative Minds designing best Apps and Website for the World. An effective tool for your customers to uncover solutions for creating something amazing.</p>
                        <p className={aboutStyle['description']}>Our team collaborates closely with the client to ensure that the product they are developing not only succeeds but also leaves a positive user experience by being simple to use and considering the needs of its consumers.</p>
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