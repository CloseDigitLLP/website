import projectStyle from '../../styles/home/project.module.scss'


export default function Services(){
    return(
        <>
             <section className={`${projectStyle.projectSection} section-spacing`}>
                <div className='container'>
                    <div className={`${projectStyle.contentPart}`}>
                        <h2 className={`${projectStyle.title}`}>Have a project in mind?</h2>
                        <p className={`${projectStyle.description}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur</p>
                        <button type="button" className="btn btn-primary dark-primary">Contact Us <span className='btn-animation'></span></button>
                    </div>
                    
                </div>
             </section>
        </>
    )
}