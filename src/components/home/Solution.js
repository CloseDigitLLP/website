import solutionStyle from '../../styles/home/solution.module.scss'

export default function Services(){
    return(
        <section className={`${solutionStyle.solutionSection} section-spacing`}>
            <div className="section-title-part">
                <p className="back-title">Provide solution</p>
                <h5 className="section-title">Provide Creative Solution</h5>
            </div>
            <div className="container">
                <div className='row'>
                    <div className='col-md-12 col-lg-6'>
                        <h6 className="title"><span className='change-title'>Our passion</span> to work hard and deliver excellent results. It could solve your customers and develop innovation.</h6>
                        <ul className={solutionStyle['features-list']}>
                            <li>
                                <span className={solutionStyle['active']}>UI/UX Design</span>
                            </li>
                            <li>
                                <span>Website design</span>
                            </li>
                            <li>
                                <span>Web development</span>
                            </li>
                            <li>
                                <span>App development</span>
                            </li>
                            <li>
                                <span>E-Commerce Development</span>
                            </li>
                            <li>
                                <span>WordPress Development</span>
                            </li>
                            <li>
                                <span>Managed IT Service</span>
                            </li>
                            <li>
                                <span>Discovery & Strategy</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-12 col-lg-6'>
                        <img src={'images/creating_services.gif'} alt="solution-gif" className={solutionStyle['solution-banner']}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}