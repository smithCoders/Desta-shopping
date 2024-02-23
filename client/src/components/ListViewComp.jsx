import ListRating from "./ListRating";
import img1 from "/1.jpg";
function ListViewComp() {
    return (
        <div className="w-full h-[230px] flex">
            {/* img-cont */}
            <div className="w-[210px] h-210px]">
                <img src={img1} className="w-[185px]  h-[185px]"/>
            </div>
            {/* text-cont */}
            <div>
                <p className="text-base">Canon Cmera EOS 2000, Black 10x zoom</p>
                {/* price */}
                <div>
                    <h4 className="text-xl text-[#1C1C1C] font-medium">$500.78</h4>
                    <span className="text-sm text-gray-500 line-through "> $200</span>
                </div>
                {/* rating */}
                <div>
                    <ListRating/>
                </div>
                {/* description */}
                <div className="w-[605px] ">

                </div>
            </div>
            
        </div>
    )
}

export default ListViewComp
