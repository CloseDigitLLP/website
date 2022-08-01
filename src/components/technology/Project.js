import technologyContent from '../../styles/technology/technologyContent.module.scss'

export default function Project(){
    return(
        <section>
            <div className="container">
                <div className={`${technologyContent['customGrid']}` }>
                    <h3 className={`${technologyContent['projectHeading']}` }>Together, let's write <span>your success story.</span></h3>
                    <button type="button" className="btn btn-primary">Get in touch <span className='btn-animation'></span></button>
                </div>
               
            </div>
        </section>
    )
}