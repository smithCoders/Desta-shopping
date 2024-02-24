import { RiSecurePaymentLine } from "react-icons/ri"
import { MdOutlineMessage } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";




function CartFeatures() {
    return (
        <div className="flex items-center  gap-8">
            {/* feature-1 */}
            <div className="flex items-center  gap-3 ">
                <div className="relative w-[48px] h-[48px] rounded-full bg-gray-300">
                    <RiSecurePaymentLine size={25}   className=" text-gray-500  absolute top-[25%]  left-[20%]"/>

                </div>
                {/* text */}
                <div className="flex flex-col">
                    <p className="text-[#1C1C1C]">Secure payment</p>
                    <p className="text-[#A9ACB0]">Have you ever finally just </p>

                </div>
                

            </div>
            {/* feature-2 */}
            <div className="flex items-center gap-3 ">
                <div className="relative  w-[48px]  h-[48px] rounded-full  bg-gray-300">
                    <MdOutlineMessage size={25} className="text-gray-500   absolute top-[25%]  left-[20%]"/>

                </div>
                {/* text */}
                <div className="flex flex-col">
                    <p className="text-[#1C1C1C]">Customer Support</p>
                    <p className="text-[#A9ACB0]">Have you ever finally just </p>

                </div>
                

            </div>
            {/* feature-3 */}
            <div className="flex items-center gap-3 ">
                <div className="relative w-[48px]  h-[48px] rounded-full  bg-gray-300">
                    <GrDeliver size={25} className="  text-gray-500  absolute top-[25%]  left-[20%]"/>

                </div>
                {/* text */}
                <div className="flex flex-col">
                    <p className="text-[#1C1C1C]">Free delivery</p>
                    <p className="text-[#A9ACB0]">Have you ever finally just </p>

                </div>
                

            </div>
            
        </div>
    )
}

export default CartFeatures
