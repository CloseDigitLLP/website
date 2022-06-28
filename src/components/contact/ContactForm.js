import contactForm from '../../styles/contact/contactForm.module.scss'


export default function ContactData(){
    return(
        <section className={`${contactForm.contactForm} section-spacing `}>
            <div className="section-title-part">
                <p className="back-title">Get in touch</p>
                <h5 className="section-title">Get In touch</h5>
            </div>
            <div className='container'>
                <div className={`${contactForm.description} `}>
                    <p className={`mx-auto mb-0`}>We are available 24/7 by e-mail and phone. You can also ask a question about our services through our contact form.  </p>
                </div>
                <div className={`${contactForm.Form} row`}>
                    <div className={`col-md-6 col-12`}>
                        <div className={`${contactForm.formGroup}`}>
                            <div className={`${contactForm.formField}`}>
                                <input type='text' className={`${contactForm.formControl}`} placeholder="Your name here"/>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-12`}>
                        <div className={`${contactForm.formGroup}`}>
                            <div className={`${contactForm.formField}`}>
                                <input type='text' className={`${contactForm.formControl}`} placeholder="Your email here"/>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-12`}>
                        <div className={`${contactForm.formGroup}`}>
                            <div className={`${contactForm.formField}`}>
                                <input type='text' className={`${contactForm.formControl}`} placeholder="Your subject here"/>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-12`}>
                        <div className={`${contactForm.formGroup}`}>
                            <div className={`${contactForm.formField}`}>
                                <input type='text' className={`${contactForm.formControl}`} placeholder="Your phone number"/>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-12 col-12`}>
                        <div className={`${contactForm.formGroup}`}>
                            <div className={`${contactForm.formField}`}>
                                <textarea type='text' className={`${contactForm.formControl} ${contactForm.formControlArea}`} rows="4" placeholder="Description"/>
                            </div>
                        </div>
                    </div>
                    <button type="button" className={`${contactForm.contactButton} btn btn-primary`}>Get in touch <span className='btn-animation'></span></button>
                </div>
               
            </div>
        </section>
    )
}