import img1  from "/cloth-1.jpg"
import { Button,TextInput } from 'flowbite-react';
function CartItem() {
    return (
        <div className="w-[840px] h-[155px]  mt-6  ">
           
            <div className="flex  gap-3 items-center ">
               
                       <img src={img1} className="w-[70px] h-[70px] object-cover  mlx-6 border border-slate-300 "/>

             
              
                  <div> 
                <div className="flex  items-center justify-between gap-[350px]">
                     <p>T-shirts with multiple colors, for men and lady</p>
                     <p className="text-base">$80.5</p>
                </div>
                
            <div className="text-gray-500">
                <span >Size:</span>
                <span >medium</span>,
                <span>Color: </span>
                <span>blue </span>,
                <span>Material:  </span>
                <span>Plastic</span>
            </div>
            <div className="flex  items-center justify-between gap-[370px]">
                <p className="text-gray-600">
                     <span>Seller:</span>
                <span>Artel Market</span>
                </p>
        <TextInput  className="w-[120px] " type="number" placeholder="Enter quantity" required />
      </div>
          

               
            </div>

            </div>
           
           
            {/* btns */}
            <div className="flex items-center  ml-[100px]  gap-2">
                <Button color="white" className="text-red-600 border  border-gray-200 rounded-md">Remove</Button>
              <Button color="white" className="text-blue-700 border  border-gray-200 rounded-md">Save for later</Button>
            </div>
              
            

            </div>
           
            
      
    )
}

export default CartItem
