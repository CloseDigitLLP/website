import Header from "../home/Header";
import Footer from '../home/Footer';
import ServiceBanner from './ServiceBanner';
import ServiceTechnology from "./ServiceTechnology";
import Services from "./Services";

export default function ServiceIndex(){
    return(
    <>
        <Header></Header>
        <ServiceBanner></ServiceBanner>
        <Services></Services>
        <ServiceTechnology></ServiceTechnology>
        <Footer></Footer>
        
    </>)
}