import Header from "../common/Header";
import Footer from '../common/Footer';
import ServiceBanner from './ServiceBanner';
import ServiceTechnology from "./ServiceTechnology";
import Services from "./Services";

export default function ServiceIndex(){
    return(
    <>
        <ServiceBanner></ServiceBanner>
        <Services></Services>
        <ServiceTechnology></ServiceTechnology>
    </>)
}