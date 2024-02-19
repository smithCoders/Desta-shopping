import BestDeals from "../components/BestDeals"
import Ctegories from "../components/Ctegories"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Events from "../sections/Events"
import FeaturedProduct from "../sections/FeaturedProduct"
import styles from "../styles/styles"

function Homepage() {
    return (
        <div >
           <Header/>
           <Hero/> 
           <Ctegories/>
           <BestDeals/>
           <FeaturedProduct/>
           <Events/>
        </div>
    )
}

export default Homepage
