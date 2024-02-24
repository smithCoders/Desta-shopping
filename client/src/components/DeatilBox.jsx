import  {Link}   from "react-router-dom"
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineMessage,MdOutlineShoppingBasket } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import RatingComponent  from "./RatingComponent"
import SupplierInfo from "./SupplierInfo";
import img from "/cloth1.jpg"
import img2 from "/image 34.png"
function DeatilBox() {
    return (
        <div className="flex gap-4">
            {/* img */}
            <div className="flex flex-col gap-6">
                <img src={img2} className="w-[380px] h-[380px]  shadow-md "/>
                <div className="flex  items-center justify-center gap-4 ">
                    <img src={img2} className="w-[56px] h-[56px] shadow-md"/>
                    <img src={img2} className="w-[56px] h-[56px]  shadow-md"/>
                    <img src={img2} className="w-[56px] h-[56px]  shadow-md"/>
                </div>
                
            </div>
            {/* detail */}
            <div className="w-[430px] h-[514px]">
                <div className="flex  gap-1">
                    <FaCheck color="green"  size={20} /> <p className="text-[#00B517]">In Stock</p>
                </div>
               
                {/* ttile */}
                <h4 className="text-xl font-semibold w-[384px]">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h4>
                {/* ratings */}
                <div className="flex gap-3">
                    <RatingComponent/>
                    <div className="flex  gap-1">
                         <MdOutlineMessage size={20}/> 
                           <p className="text-[#787A80] text-base  text-nowrap">32 Review</p>
                    </div>
                    <div className="flex gap-1">
                          <MdOutlineShoppingBasket size={20} /> 
                             <p className="text-[#787A80] text-base text-nowrap "> 200 solds</p>
                    </div>
                  
                 

                    

                </div>
                {/* descr */}
                <div className="flex flex-col gap-3">
                    {/* price */}
                    <div className="flex items-center gap-[48px]">
                        <p className="text-gray-500 text-base ">Price:</p>
                        <p className="text-gray-600">Negotiable</p>
                        
                    </div>
                    {/* TYpes */}
                    <div className="flex items-center gap-[48px]">
                        <p className="text-gray-500 text-base ">Types:</p>
                        <p className="text-gray-600">Classic shoes</p></div>
                    {/* Material */}
                    <div className="flex items-center gap-[48px]">
                        <p className="text-gray-500 text-base ">Materials:</p>
                        <p className="text-gray-600">Plastics</p></div>
                    {/* protection */}
                    <div className="flex items-center gap-[48px]">
                        <p className="text-gray-500 text-base ">Protection:</p>
                        <p className="text-gray-600">Refund</p></div>
                    {/* Warranty */}
                    <div className="flex items-center gap-[48px]">
                        <p className="text-gray-500 text-base ">Warranty</p>
                        <p className="text-gray-600">2years  full warranty</p></div>
                 
                   
                    

                </div>

            </div>
            {/* card */}
            <div className="relative">
                <SupplierInfo/>
                <div className="absolute bottom-[150px]  right-16 flex gap-1 items-center justify-center">
                    <FaRegHeart  size={20} color="blue"/>

                    <Link to={""} className="inline text-blue-700">save for later</Link>
                    

                </div>
                
                </div>

            

            
        </div>
    )
}

export default DeatilBox
