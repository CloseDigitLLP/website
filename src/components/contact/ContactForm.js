import contactForm from '../../styles/contact/contactForm.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import 'yup-phone'
import { db } from '../../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useRef, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BeatLoader } from 'react-spinners'


export default function ContactData() {

    const submitBtnRef = useRef()
    const [isLoading, setIsLoading] = useState(false)

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        subject: yup.string().required(),
        phoneNumber: yup.string().phone("IN").required(""),
        description: yup.string().required()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        setIsLoading(true)
        try {
            const docRef = await addDoc(collection(db, "users"), data)
            await axios.post('/api/nodemailer', data).then((response) => {
                console.log(response.data); toast.success("Data saved successfully!")
            })
        } catch (e) {
            console.log(e)
            toast.error("Data couldn't be saved")
        } finally {
            setIsLoading(false)
        }
    }

    return (
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
                    {isLoading
                        ?
                        <div style={{ margin: "0 auto", width: "14%", display: "flex", justifyContent: "center", alignItems: "center" }} ><BeatLoader color="#4949dd" size={8} /></div>
                        :
                        <button ref={submitBtnRef} type="submit" className={`${contactForm.contactButton} btn btn-primary`}>Get in touch <span className='btn-animation'></span></button>
                    }
                </form>
                <ToastContainer />
            </div>
        </section>
    )
}