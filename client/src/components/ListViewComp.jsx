import ListRating from "./ListRating";
import img1 from "/1.jpg";
import icon from "/heart-icon.png"
import { Link } from "react-router-dom";

function ListViewComp() {
 
    return (
        <div className="w-full h-[230px] flex   shadow-md relative">
            {/* img-cont */}
            <div className="w-[210px] h-210px]">
                <img src={img1} className="w-[185px]  h-[185px]"/>
            </div>
            {/* text-cont */}
            <div className="flex flex-col gap-3">
                <p className="text-base mt-2">Canon Cmera EOS 2000, Black 10x zoom</p>
                {/* price */}
                <div className="flex  gap-4 items-center">
                    <h4 className="text-xl text-[#1C1C1C] font-medium">$500.78</h4>
                    <span className="text-base  font-semibold text-gray-500 line-through "> $200</span>
                </div>
                {/* rating */}
                <div>
                    <ListRating/>
                </div>
                {/* description */}
                <div className="w-[605px]  h-[75px]">
                    <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua</p>
                          <Link className="text-[#0D6EFD]" to={"/detail"}>View details</Link>

                </div>
            </div>
            {/* icon */}
           
                <img src={icon} className="w-[40px]  h-[40px] absolute right-5  top-3 "/>
              
            
            
        </div>
    )
}

export default ListViewComp
