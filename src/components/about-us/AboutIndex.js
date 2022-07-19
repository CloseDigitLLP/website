import AboutBanner from '../about-us/AboutBanner';
import AboutData from "./AboutData";
import Solution from '../home/Solution'; 
import ClientStory from '../home/ClientStory';
import AboutFeature from '../about-us/AboutFeatures';

export default function ContactIndex(){
    return(
    <>
        <AboutBanner></AboutBanner>
        <AboutData></AboutData>
        <Solution></Solution>
        <AboutFeature></AboutFeature>
        <ClientStory></ClientStory>
        
    </>)
}