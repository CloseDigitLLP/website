import technology from '../../styles/service/serviceTechnology.module.scss'

export default function ServiceTechnology(){
    return(
        <section className={`section-spacing`}>
            <div className="section-title-part">
                <p className="back-title">We are working on</p>
                <h5 className="section-title">Our Technology</h5>
            </div>
            <div className="container">
                <div className={`${technology.technologySection} row align-items-center`}>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                        <img src="images/frontEndTechnology3.gif" alt="frontend-technology" className={`${technology.imageWidth}`}></img>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className={technology['technology-part']}>
                            <div className={`${technology.box}`}>
                                <div className={`${technology.f_technology} ${technology.html}`}></div>
                            </div>
                            <div className={technology['box']}>
                                <div className={`${technology.f_technology} ${technology.css}`}></div>
                            </div>
                            <div className={technology['box']}>
                                <div className={`${technology.f_technology} ${technology.javaScript}`}></div>
                            </div>
                            <div className={technology['box']}>
                                <div className={`${technology.f_technology} ${technology.angular}`}></div>
                            </div>
                            <div className={technology['box']}>
                                <div className={`${technology.f_technology} ${technology.reactJs}`}></div>
                            </div>
                            <div className={technology['box']}>
                                <div className={`${technology.f_technology} ${technology.vueJs}`}></div>
                            </div>
                            <div className={technology['box']}>
                                <div className={`${technology.f_technology} ${technology.uiux}`}></div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className={`${technology.technologySection} row align-items-center`}>
                <div className="col-md-6 col-sm-12">
                        <div className={technology['technology-part']}>
                        <div className={`${technology.box}`}>
                            <div className={`${technology.b_technology} ${technology.php}`}></div>
                        </div>
                        <div className={technology['box']}>
                            <div className={`${technology.b_technology} ${technology.node}`}></div>
                        </div>
                        <div className={technology['box']}>
                            <div className={`${technology.b_technology} ${technology.laravell}`}></div>
                        </div>
                        <div className={technology['box']}>
                            <div className={`${technology.b_technology} ${technology.cognite}`}></div>
                        </div>
                        <div className={technology['box']}>
                            <div className={`${technology.b_technology} ${technology.wordpress}`}></div>
                        </div>
                        <div className={technology['box']}>
                            <div className={`${technology.b_technology} ${technology.wocommerce}`}></div>
                        </div>
                        </div>
                       
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className='d-flex justify-content-center'>
                            <img src="images/backendTechnology3.gif" alt="frontend-technology" className={`${technology.imageWidth}`}></img>
                        </div>
                        
                    </div>
                   
                </div>
              
            </div>
        </section>
    )
}