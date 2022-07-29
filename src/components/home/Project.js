import projectStyle from '../../styles/home/project.module.scss'


export default function Services(){
    return(
        <>
             <section className={`${projectStyle.projectSection} section-spacing`}>
                <div className='container'>
                    <div className={`${projectStyle.contentPart}`}>
                        <h2 className={`${projectStyle.title}`}>Have a project in mind?</h2>
                        <p className={`${projectStyle.description}`}>To choose your next move, stay current with our in-depth topics, continuing trends, tool and technology comparisons, and newest concepts. Our advisers on innovation and change identify the best approach for your business model.</p>
                        <button type="button" className="btn btn-primary dark-primary">Contact Us <span className='btn-animation'></span></button>
                    </div>
                    
                </div>
             </section>
        </>
    )
}