
import { MdOutlineShoppingCart } from "react-icons/md";
import {Button}  from "flowbite-react"
function SavedCard({img,name,price,discount}) {
    return (
        <div className="h-[382px] w-[270px]">
              <div className='bg-[#DADADA] w-[270px]  h-[240px] relative '>
                <img className='w-[194px] h-[194px] absolute  top-[8%]  left-[13%]' src={img}/>

            </div>

            <h4 className="text-xl  font-medium mb-2 ">{price}</h4>
              <p className="text-base text-[#606060] ">{name}</p>
              <div className="mt-4">  
               
                <Button color="white"  className="text-blue-600 border border-gray-300">   <MdOutlineShoppingCart color="blue"  size={25}/>  Move to Cart</Button>
                </div>

              
                    
               
              
            
        </div>
    )
}

export default SavedCard
