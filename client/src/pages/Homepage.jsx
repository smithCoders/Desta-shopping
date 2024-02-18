import BestDeals from "../components/BestDeals"
import Ctegories from "../components/Ctegories"
import Header from "../components/Header"
import Hero from "../components/Hero"
import styles from "../styles/styles"

function Homepage() {
    return (
        <div >
           <Header/>
           <Hero/> 
           <Ctegories/>
           <BestDeals/>
        </div>
    )
}

export default Homepage
