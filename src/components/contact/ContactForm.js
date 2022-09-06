import contactForm from '../../styles/contact/contactForm.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import 'yup-phone'
import { db } from '../../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useRef } from 'react'
import axios from 'axios'


export default function ContactData(){

    const submitBtnRef = useRef()

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        subject: yup.string().required(),
        phoneNumber: yup.string().phone("IN").required(""),
        description: yup.string().required()
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try{
            submitBtnRef.current.disabled = true
            const docRef = await addDoc(collection(db, "users"), data)
            submitBtnRef.current.disabled = false
            axios.post('/api/nodemailer', data).then(response => console.log(response.data))
        }catch(e){
            console.log(e)
            submitBtnRef.current.disabled = false
        }
    }

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
                <form className={`${contactForm.Form} row`} onSubmit={handleSubmit(onSubmit)}>
                    <div className={`col-md-6 col-12`}>
                        <div className={`${contactForm.formGroup}`}>
                            <div className={`${contactForm.formField}`}>
                                <input type='text' className={`${contactForm.formControl}`} placeholder="Your name here" {...register("name")} />
                                <p>{errors.name?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-12`}>
                        <div className={`${contactForm.formGroup}`}>
                            <div className={`${contactForm.formField}`}>
                                <input type='text' className={`${contactForm.formControl}`} placeholder="Your email here" {...register('email')} />
                                <p>{errors.email?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-12`}>
                        <div className={`${contactForm.formGroup}`}>
                            <div className={`${contactForm.formField}`}>
                                <input type='text' className={`${contactForm.formControl}`} placeholder="Your subject here" {...register('subject')} />
                                <p>{errors.subject?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-12`}>
                        <div className={`${contactForm.formGroup}`}>
                            <div className={`${contactForm.formField}`}>
                                <input type='number' className={`${contactForm.formControl}`} placeholder="Your phone number" {...register('phoneNumber')} />
                                <p>{errors.phoneNumber?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-12 col-12`}>
                        <div className={`${contactForm.formGroup}`}>
                            <div className={`${contactForm.formField}`}>
                                <textarea type='text' className={`${contactForm.formControl} ${contactForm.formControlArea}`} rows="4" placeholder="Description" {...register('description')} />
                                <p>{errors.description?.message}</p>
                            </div>
                        </div>
                    </div>
                    <button ref={submitBtnRef} type="submit" className={`${contactForm.contactButton} btn btn-primary`}>Get in touch <span className='btn-animation'></span></button>
                </form>
               
            </div>
        </section>
    )
}