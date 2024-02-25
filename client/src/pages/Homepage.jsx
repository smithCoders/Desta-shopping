import BlockItem from "../components/BlockItem"
import Deals from "../components/Deals"
import Header from "../sections/Header"
import Hero from "../sections/Hero"
import Newsletter from "../components/Newsletter"
import OutDoors from "../components/OutDoors"
import Inquiry from "../components/inquiry"
import Recommendation_Section from "../sections/Recommendation_Section"
import Service_Section from "../sections/Service_Section"
import DealSection from "../sections/DealSection"


function Homepage() {
    return (
        <div>
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

        </div>
      
    )
}

export default Homepage
