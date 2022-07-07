import Header from "../home/Header";
import Footer from '../home/Footer';
import AboutBanner from '../about-us/AboutBanner';
import AboutData from "./AboutData";
import Solution from '../home/Solution'; 
import ClientStory from '../home/ClientStory';
import AboutFeature from '../about-us/AboutFeatures';

export default function ContactIndex(){
    return(
    <>
        <Header></Header>
        <AboutBanner></AboutBanner>
        <AboutData></AboutData>
        <Solution></Solution>
        <AboutFeature></AboutFeature>
        <ClientStory></ClientStory>
        <Footer></Footer>
        
    </>)
}