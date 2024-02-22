import i1  from "/8.jpg"
import i2  from "/7.jpg"
import i3  from "/6.jpg"
import i4  from "/5.jpg"
import i5  from "/4.jpg"
import { Badge } from 'flowbite-react';
function Deals() {
    return (
        <div className="w-[1180px] h-[240px] flex items-center mb-[32px]">
            <div className="w-[285px] h-[240px] flex  flex-col  items-center  mt-[64px] ">
                <div className="flex  flex-col  ">
                     <h4 className="font-medium">Deal and offers</h4>
                <p className="text-gray-500">time left</p>
                <div className="flex  gap-1 ">
                    <div className="w-[45px] h-[50px] bg-gray-700 text-white rounded-sm">
                        <p className="text-center">04</p>
                        <p className="text-center">Days</p>

                    </div>
                    <div className="w-[45px] h-[50px] bg-gray-700 text-white rounded-sm">
                        <p className="text-center">13</p>
                        <p className="text-center">hours</p>

                    </div>
                    <div className="w-[45px] h-[50px] bg-gray-700 text-white rounded-sm">
                        <p className="text-center">04</p>
                        <p className="text-center">Mins</p>

                    </div>
                    <div className="w-[45px] h-[50px] bg-gray-700 text-white rounded-sm">
                        <p className="text-center">56</p>
                        <p className="text-center">sec</p>

                    </div>

                </div>
                </div>
               
            </div>
            {/* col-2 */}
           <div className="w-[895px] h-[235px]  flex items-center justify-center">
             <div className="border-l border-gray-300 h-[235px]"></div>
    {/* card-1 */}
    <div className="px-5 py-2">
        <img src={i1} className="w-[150px] h-[140px]" />
        <div className="flex items-center justify-between flex-col">
            <p>Smart Watches</p>
            <Badge className="bg-[#FFE3E3] text-sm text-[#EB001B] w-[45px] h-[17px]">-25%</Badge>
        </div>
    </div>
    {/* Add vertical line */}
    <div className="border-l border-gray-300 h-[235px]"></div>

    {/* card-2 */}
    <div className="px-5 py-2">
        <img src={i2} className="w-[150px] h-[140px]" />
        <div className="flex items-center justify-between flex-col">
            <p>Smart Watches</p>
            <Badge className="bg-[#FFE3E3] text-sm text-[#EB001B] w-[45px] h-[17px]">-15%</Badge>
        </div>
    </div>
    {/* Add vertical line */}
    <div className="border-l border-gray-300 h-[235px]"></div>

    {/* card-3 */}
    <div className="px-5 py-2">
        <img src={i3} className="w-[150px] h-[140px]" />
        <div className="flex items-center justify-between flex-col">
            <p>Smart Watches</p>
            <Badge className="bg-[#FFE3E3] text-sm text-[#EB001B] w-[45px] h-[17px]">-40%</Badge>
        </div>
    </div>
    {/* Add vertical line */}
    <div className="border-l border-gray-300 h-[235px]"></div>

    {/* card-4 */}
    <div className="px-5 py-2">
        <img src={i4} className="w-[150px] h-[140px]" />
        <div className="flex items-center justify-between flex-col">
            <p>Smart Watches</p>
            <Badge className="bg-[#FFE3E3] text-sm text-[#EB001B] w-[45px] h-[17px]">-25%</Badge>
        </div>
    </div>
    {/* Add vertical line */}
    <div className="border-l border-gray-300 h-[235px]"></div>

    {/* card-5 */}
    <div className="px-5 py-2">
        <img src={i5} className="w-[150px] h-[140px]" />
        <div className="flex items-center justify-between flex-col">
            <p>Smart Watches</p>
            <Badge className="bg-[#FFE3E3] text-sm text-[#EB001B] w-[45px] h-[17px]">-25%</Badge>
        </div>
    </div>
</div>

            
        </div>
    )
}

export default Deals
