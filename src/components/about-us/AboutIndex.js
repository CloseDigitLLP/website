import AboutBanner from '../about-us/AboutBanner';
import AboutData from "./AboutData";
import Solution from '../home/Solution'; 
import ClientStory from '../home/ClientStory';
import AboutFeature from '../about-us/AboutFeatures';
import AboutCulture from '../about-us/AboutCulture';

export default function ContactIndex(){
    return(
    <>
        <AboutBanner></AboutBanner>
        <AboutData></AboutData>
        <Solution></Solution>
        <AboutFeature></AboutFeature>
        <AboutCulture></AboutCulture>
        <ClientStory></ClientStory>
        
    </>)
}