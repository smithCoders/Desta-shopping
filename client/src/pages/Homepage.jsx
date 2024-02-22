import BlockItem from "../components/BlockItem"
import Deals from "../components/Deals"
import Hero from "../components/Hero"
import OutDoors from "../components/OutDoors"
import Inquiry from "../components/inquiry"
import Recommendation_Section from "../sections/Recommendation_Section"


function Homepage() {
    return (
        <div className="px-[96px] py-0" >
          
           <Hero/> 
           <Deals/>
           <OutDoors/>
           <BlockItem/>
           <Inquiry/>
           <Recommendation_Section/>
          
        </div>
    )
}

export default Homepage
