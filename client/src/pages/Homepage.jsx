import BlockItem from "../sections/BlockItem"
import Header from "../sections/Header"
import Hero from "../sections/Hero"
import Newsletter from "../components/Newsletter"
import OutDoors from "../sections/OutDoors"
import Inquiry from "../sections/inquiry"
import Recommendation_Section from "../sections/Recommendation_Section"
import Service_Section from "../sections/Service_Section"
import DealSection from "../sections/DealSection"
import FooterComp  from "../sections/Footer"

function Homepage() {
    return (
        <div className="overflow-hidden">
              <div className="px-[96px] py-0" >
                <Header/>
          
           <Hero/> 
           <DealSection/>
           <OutDoors/>
           <BlockItem/>
           <Inquiry/>
           <Recommendation_Section/>
           <Service_Section/>
          
        </div>
<Newsletter/>
<FooterComp/>

        </div>
      
    )
}

export default Homepage
