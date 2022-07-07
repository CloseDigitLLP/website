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
            <div className="col-md-4">
                <h6 className="title"><span class="change-title">Our Mission</span></h6>
                <p className={aboutUsData['description']} >
                Skillfully applying the most sought-after, fast-growing pertinent technology to yield total solutions in the most critical business areas.
                </p>
            </div>
            <div className="col-md-4">
                <img src="images/mission-vision.png" alt="vision-mission"  className={aboutUsData['mission-vision-img']}/>
            </div>
            <div className="col-md-4">
            <h6 className="title"><span class="change-title">Our Vision</span></h6>
                <p className={aboutUsData['description']} >
                    Consistently deliver ingenious, comprehensive, efficient, cost-effective business solutions through IT for the global market by creating a professionally stimulating and happy environment for our team where professionals thrive alongside the growth of our company.
                </p>
            </div>
        </div>
       </div>
       </section>
    )
}