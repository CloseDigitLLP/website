import faqStyle from '../../styles/home/faq.module.scss'
import Image from 'next/image'

export default function SocialPart() {
    return (
        <section className={`section-spacing `}>
                <div className="section-title-part">
                    <p className="back-title">about Development</p>
                    <h5 className="section-title">Frequently Asked Questions</h5>
                </div>
                <div className="container">
                    <div className="accordion" id="accordionExample">
                        <div className={`${faqStyle.accordionItem} accordion-item`}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className={`${faqStyle.accordionButton} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Is it customary for you to sign a non-disclosure agreement (NDA) before commencing projects?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className={`${faqStyle.accordionBody} accordion-body`}>
                                    Absolutely, we understand the importance of confidentiality and protecting your intellectual property. Prior to commencing any project, we adhere to a strict policy of signing a non-disclosure agreement (NDA). This ensures that your proprietary information remains secure and confidential throughout our collaboration. Our NDA encompasses terms regarding disclosure, permissible use, non-compete clauses, and the mutual obligations for safeguarding sensitive data. Your trust is paramount to us, and we are committed to upholding the highest standards of integrity and security in handling your information.
                                </div>
                            </div>
                        </div>
                        <div className={`${faqStyle.accordionItem} accordion-item`}>
                            <h2 className="accordion-header" id="headingFive">
                                <button className={`${faqStyle.accordionButton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    How is your software development process structured?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className={`${faqStyle.accordionBody} accordion-body`}>
                                    We embark on a comprehensive software development journey, spanning from ideation to launch. Our process involves conducting research, structuring a plan, blueprinting, designing, testing, optimizing, and ultimately delivering the final product to you. Each step is meticulously executed to ensure a seamless and efficient development process.

                                </div>
                            </div>
                        </div>
                        <div className={`${faqStyle.accordionItem} accordion-item`}>
                            <h2 className="accordion-header" id="headingTwo">
                                <button className={`${faqStyle.accordionButton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Can you effectively manage migration projects?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className={`${faqStyle.accordionBody} accordion-body`}>
                                    Certainly. Rest assured, we have a proven track record in successfully handling migration projects. Whether it involves migrating existing systems or managing the scalability and flexibility of your digital infrastructure, our adept teams ensure a seamless transition. With extensive experience in managing migration projects of varying complexities, we are committed to delivering outcomes that align perfectly with your objectives.
                                </div>
                            </div>
                        </div>
                        <div className={`${faqStyle.accordionItem} accordion-item`}>
                            <h2 className="accordion-header" id="headingThree">
                                <button className={`${faqStyle.accordionButton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What protocols do you implement to ensure the security of my data and that of my users?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className={`${faqStyle.accordionBody} accordion-body`}>
                                    We prioritize the security of your data. Our approach involves implementing multi-layered security protocols, such as encryption both at rest and in transit, adhering to secure coding practices, and conducting routine security audits. Additionally, our compliance with GDPR and other pertinent data protection regulations underscores our commitment to treating data with the highest levels of confidentiality and protection.
                                </div>
                            </div>
                        </div>
                        <div className={`${faqStyle.accordionItem} accordion-item`}>
                            <h2 className="accordion-header" id="headingFour">
                                <button className={`${faqStyle.accordionButton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How would you prefer to stay informed about the project's progress?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className={`${faqStyle.accordionBody} accordion-body`}>
                                    You will receive continuous updates on your project from start to finish. A dedicated project manager will be assigned to maintain regular communication with you throughout the entire process. Transparency is integral to our work ethic, and we ensure consistent updates via meetings, reports, and feedback sessions using various platforms such as email, Skype, Slack, Teams, and Jira. Our collaborative approach ensures that you are well-informed and actively involved in every stage of development.

                                </div>
                            </div>
                        </div>
                        <div className={`${faqStyle.accordionItem} accordion-item`}>
                            <h2 className="accordion-header" id="headingSix">
                                <button className={`${faqStyle.accordionButton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Can adjustments be made to the project if needed during its execution?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className={`${faqStyle.accordionBody} accordion-body`}>
                                    Should you desire to make adjustments or modifications, we adhere to a structured change management process. This entails evaluating the impact of the proposed change, discussing potential implications on timeline and cost, and subsequently realigning our development strategy as needed. Our agile methodology enables us to accommodate changes while maintaining the trajectory of your project.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}