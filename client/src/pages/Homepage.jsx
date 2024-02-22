import BlockItem from "../components/BlockItem"
import Deals from "../components/Deals"
import Hero from "../components/Hero"
import OutDoors from "../components/OutDoors"
import Inquiry from "../components/inquiry"


function Homepage() {
    return (
        <div className="px-[96px] py-0" >
          
           <Hero/> 
           <Deals/>
           <OutDoors/>
           <BlockItem/>
           <Inquiry/>
          
        </div>
    )
}

export default Homepage
