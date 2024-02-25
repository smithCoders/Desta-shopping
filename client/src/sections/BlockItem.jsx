import  banner from "/Group 970.png"
import { Button} from 'flowbite-react';
import { outdoorItems as data } from "../data/datas";

import Item from "../components/ItemBox";
function BlockItem() {
      const column1 = data.slice(0, 4);
    const column2 = data.slice(4,8);

    return (
           <div className="max-w-[1180px]   ml-[64px] mb-6 ">
              <h4 className="font-medium text-2xl  my-6  text-center"> Trend Products</h4>
              <div className="flex  ">
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
              {/* Column 2 */}
            <div className="w-[900px] h-[257px] grid grid-cols-1">
                {/* First Column */}
                <div className="flex  gap-4 border border-gray-300">
                    {column1.map((item, index) => (
                        <Item key={index} title={item.name} price={item.price} image={item.img} />
                    ))}
                </div>
                {/* Second Column */}
                <div className="flex gap-4 ">
                    {column2.map((item, index) => (
                        <Item key={index} title={item.name} price={item.price} image={item.img} />
                    ))}
                </div>
            </div>
              </div>
          
         </div>
    )
}

export default BlockItem
