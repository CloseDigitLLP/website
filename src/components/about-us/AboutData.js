import aboutUsData from '../../styles/aboutUs/aboutData.module.scss'

export default function AboutData(){
    return(
        <section className={`section-spacing`}>
        <div className="section-title-part">
            <p className="back-title">About us</p>
            <h5 className="section-title">About Us</h5>
       </div>
       <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
                <h6 className="title"><span class="change-title">Our Mission</span></h6>
                <p className={aboutUsData['description']} >
                Effectively utilising the most in-demand, rapidly expanding relevant technology to produce complete solutions in the most important business domains.
                </p>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center">
                <img src="images/mission-vision.png" alt="vision-mission"  className={aboutUsData['mission-vision-img']}/>
            </div>
            <div className="col-lg-4 col-md-12">
            <h6 className="title"><span class="change-title">Our Vision</span></h6>
                <p className={aboutUsData['description']} >
                Deliver innovative, thorough, effective, and affordable business solutions using IT on a consistent basis for the worldwide market while fostering a positive work environment for our team that supports the expansion of our firm.
                </p>
            </div>
        </div>
       </div>
       </section>
    )
}