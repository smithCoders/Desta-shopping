import BlockItem from "../components/BlockItem"
import Deals from "../components/Deals"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import OutDoors from "../components/OutDoors"
import Inquiry from "../components/inquiry"
import Recommendation_Section from "../sections/Recommendation_Section"
import Service_Section from "../sections/Service_Section"


function Homepage() {
    return (
        <div>
              <div className="px-[96px] py-0" >
          
           <Hero/> 
           <Deals/>
           <OutDoors/>
           <BlockItem/>
           <Inquiry/>
           <Recommendation_Section/>
           <Service_Section/>
          
        </div>
<Newsletter/>

        </div>
      
    )
}

export default Homepage
