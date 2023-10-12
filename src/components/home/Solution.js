import solutionStyle from '../../styles/home/solution.module.scss'
import Image from 'next/image'

export default function Services(){
    return(
        <section className={`${solutionStyle.solutionSection} section-spacing`}>
            <div className="section-title-part">
                <p className="back-title">Provide solution</p>
                <h5 className="section-title">We Provide Creative Solutions</h5>
            </div>
            <div className="container">
                <div className='row'>
                    <div className='col-md-12 col-lg-6 cmt-3'>
                        <h6 className="title"><span className='change-title'>Our passion</span> to work hard and deliver excellent results. It could solve your customers and develop innovation.</h6>
                        <ul className={solutionStyle['features-list']}>
                            <li>
                                {/* <span className={solutionStyle['active']}>UI/UX Design</span> */}
                                <span>Design</span>
                            </li>
                            <li>
                                <span>Development</span>
                            </li>
                            <li>
                                <span>Data Handling</span>
                            </li>
                            <li>
                                <span>Management</span>
                            </li>
                            <li>
                                <span>Consulting</span>
                            </li>
                            <li>
                                <span>Customization</span>
                            </li>
                            <li>
                                <span>Managed IT Service</span>
                            </li>
                            <li>
                                <span>Discovery & Strategy</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-12 col-lg-6 d-flex justify-content-center'>
                        <Image
                            src={require('../../assets/images/creating_services.gif')}
                            alt="solution-gif"
                            width={600}
                            height={400}
                            className={solutionStyle['solution-banner']}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}