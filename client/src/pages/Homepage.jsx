
import CategoriesSection from "../sections/CategoriesSection"

import Hero from "../components/Hero"
import Events from "../sections/Events"
import FeaturedProduct from "../sections/FeaturedProduct"
import BestDealSection from "../sections/BestDeals"

function Homepage() {
    return (
        <div >
          
           <Hero/> 
           <CategoriesSection/>
           <BestDealSection/>
           <FeaturedProduct/>
           <Events/>
        </div>
    )
}

export default Homepage
