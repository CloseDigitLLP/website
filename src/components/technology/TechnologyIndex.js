import TechnologyBanner from './TechnologyBanner'
import ServiceTechnology from "../services/ServiceTechnology";
import TechnologyContent from './TechnologyContent'
import Project from './Project';
export default function TechnologyIndex(){
    return(
    <>
     <TechnologyBanner/>
     <TechnologyContent></TechnologyContent>
     <ServiceTechnology></ServiceTechnology>
     <Project></Project>
    </>)
}