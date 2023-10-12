
import Image from 'next/image'

export default function AboutCulture(){
    return(
        <section className={`section-spacing`}>
        <div className="section-title-part">
            <p className="back-title">Our Culture</p>
            <h5 className="section-title">Our Culture</h5>
       </div>
       <div className='culture-part-image'>
                {/* <Image
                    src={require('../../assets/images/gandr-collage.jpg')}
                    alt="combine"
                    // width={400}
                    // height={250}
                    className={`combineImage`}
                    quality={100}
                /> */}
       </div>
       </section>
    )
}