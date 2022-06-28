import Header from "../home/Header";
import Footer from '../home/Footer';
import ContactBanner from "./ContactBanner";
import ContactData from "./ContactData";
import ContactForm from './ContactForm';

export default function ContactIndex(){
    return(
    <>
        <Header></Header>
        <ContactBanner></ContactBanner>
        <ContactData></ContactData>
        <ContactForm></ContactForm>
        <Footer></Footer>
        
    </>)
}