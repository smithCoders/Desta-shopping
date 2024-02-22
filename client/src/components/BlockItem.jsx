import  banner from "/Group 970.png"
import { Button} from 'flowbite-react';
import i1 from "/6.jpg"
function BlockItem() {
    return (
           <div className="max-w-[1180px] h-[257px] flex    ml-[64px] mb-6 ">
            {/* col-1 */}
            <div className="w-[280px] h-[257px] relative">
                <img src={banner} className="w-full h-auto"/>
                <div className="absolute top-8 left-4">
                    <p className="text-xl font-semibold mb-4">
                        <span className="block">Consumer and  </span>
                        <span className="block">ELectronics</span>
                        <span>gadgest</span>
                    </p>
                    <Button  className="text-black bg-white  ">Source Now</Button>

                </div>

                
            </div>
            {/* col-2 */}
            <div className="w-[900px] h-[257px] grid grid-cols-1">
                
                    <div className="flex border border-gray-300 ">
                          {/* grid-1 */}
                        

    {/* Grid-1 */}
    <div className="flex w-[223px] h-[127px] relative">
      {/* Items name */}
      <div className="flex flex-col ml-6 gap-3 mt-4">
        <p className="text-[#1C1C1C]">Soft chairs</p>
        <p className="text-sm text-gray-500"><span className="block">From</span> 15USD</p>
      </div>
      <img src={i1} className="w-[82px] h-[82px] absolute bottom-0 right-0" />
    </div>
    {/* Vertical line */}
    <div className="border-l border-gray-300 h-full"></div>
                    
                        
                        
                          {/* grid-2 */}
                     <div className="flex w-[223px] h-[127px] relative">
      {/* Items name */}
      <div className="flex flex-col ml-6 gap-3 mt-4">
        <p className="text-[#1C1C1C]">Soft chairs</p>
        <p className="text-sm text-gray-500"><span className="block">From</span> 15USD</p>
      </div>
      <img src={i1} className="w-[82px] h-[82px] absolute bottom-0 right-0" />
    </div>
    {/* Vertical line */}
    <div className="border-l border-gray-300 h-full"></div>
                         {/* grid-3 */}
                   <div className="flex w-[223px] h-[127px] relative">
      {/* Items name */}
      <div className="flex flex-col ml-6 gap-3 mt-4">
        <p className="text-[#1C1C1C]">Soft chairs</p>
        <p className="text-sm text-gray-500"><span className="block">From</span> 15USD</p>
      </div>
      <img src={i1} className="w-[82px] h-[82px] absolute bottom-0 right-0" />
    </div>
    {/* Vertical line */}
    <div className="border-l border-gray-300 h-full"></div>
                          {/* grid-4 */}
                     <div className="flex w-[223px] h-[127px] relative">
      {/* Items name */}
      <div className="flex flex-col ml-6 gap-3 mt-4">
        <p className="text-[#1C1C1C]">Soft chairs</p>
        <p className="text-sm text-gray-500"><span className="block">From</span> 15USD</p>
      </div>
      <img src={i1} className="w-[82px] h-[82px] absolute bottom-0 right-0" />
    </div>
    {/* Vertical line */}
    <div className="border-l border-gray-300 h-full"></div>
                       
                    
                    </div>

                   {/* col-2 */}
                   <div className="flex ">
                          {/* grid-1 */}
                      <div className="flex w-[223px] h-[127px] relative">
      {/* Items name */}
      <div className="flex flex-col ml-6 gap-3 mt-4">
        <p className="text-[#1C1C1C]">Soft chairs</p>
        <p className="text-sm text-gray-500"><span className="block">From</span> 15USD</p>
      </div>
      <img src={i1} className="w-[82px] h-[82px] absolute bottom-0 right-0" />
    </div>
    {/* Vertical line */}
    <div className="border-l border-gray-300 h-full"></div>
                        
                        
                          {/* grid-2 */}
                    <div className="flex w-[223px] h-[127px] relative">
      {/* Items name */}
      <div className="flex flex-col ml-6 gap-3 mt-4">
        <p className="text-[#1C1C1C]">Soft chairs</p>
        <p className="text-sm text-gray-500"><span className="block">From</span> 15USD</p>
      </div>
      <img src={i1} className="w-[82px] h-[82px] absolute bottom-0 right-0" />
    </div>
    {/* Vertical line */}
    <div className="border-l border-gray-300 h-full"></div>
                         {/* grid-3 */}
                     <div className="flex w-[223px] h-[127px] relative">
      {/* Items name */}
      <div className="flex flex-col ml-6 gap-3 mt-4">
        <p className="text-[#1C1C1C]">Soft chairs</p>
        <p className="text-sm text-gray-500"><span className="block">From</span> 15USD</p>
      </div>
      <img src={i1} className="w-[82px] h-[82px] absolute bottom-0 right-0" />
    </div>
    {/* Vertical line */}
    <div className="border-l border-gray-300 h-full"></div>
                          {/* grid-4 */}
                   <div className="flex w-[223px] h-[127px] relative">
      {/* Items name */}
      <div className="flex flex-col ml-6 gap-3 mt-4">
        <p className="text-[#1C1C1C]">Soft chairs</p>
        <p className="text-sm text-gray-500"><span className="block">From</span> 15USD</p>
      </div>
      <img src={i1} className="w-[82px] h-[82px] absolute bottom-0 right-0" />
    </div>
    {/* Vertical line */}
    <div className="border-l border-gray-300 h-full"></div>
                     
                   
                    </div>
                

             

            </div>
            <div>

            </div>
            
        </div>
    )
}

export default BlockItem
