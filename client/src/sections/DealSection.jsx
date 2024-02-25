import Deals from "../components/DiscountBox"
import TimeLeft from "../components/TimeLeft"

function DealSection() {
    return (
        <div className="w-[1180px]  mb-[32px]">
                <h4 className="font-medium text-2xl  mb-6  text-center"> offers  and discounts</h4>
                <div className="flex items-center">
                     <TimeLeft/>
            <Deals/>
                </div>
           
        </div>
    )
}

export default DealSection
