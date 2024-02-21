import { Link } from "react-router-dom"
import styles from "../styles/styles"


function Hero() {
    return (
        <div className="bg-[#fdf2e9] pt-[48px] pl-0 pb-[96px] pr-0">
            <div className="max-w-[1300px] mx-0 my-auto py-0 px-[32px] grid grid-cols-2 gap-[96px]  items-center">
                <div>
                    <h1 className="text-5xl text-[#333] font-bold mb-[32px]">A Happy shopping delivered to your door, every single day</h1>
                    <p className="text-xl  text-[#555]   mb-[48px]">The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
                    <div className="flex items-center justify-center gap-5">
                        <Link to={"/"} className={`${styles.btn} bg-[#e67e22]  hover:bg-[#cf711f] text-white`}>Start Shopping Now</Link>
                    <Link className={`${styles.btn} bg-white text-[#333]`}>Learn More</Link>
                    </div>
                    
                </div>
                {/* img */}
                <div>
                    
                </div>
            </div>

        </div>
       
    )
}

export default Hero
