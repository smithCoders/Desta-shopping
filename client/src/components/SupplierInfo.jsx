import { Button, Card } from 'flowbite-react';
import { MdOutlineVerifiedUser, MdOutlineLocalShipping } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import logo  from "/seller-logo.jpg"
function SupplierInfo() {
    return (
        <Card className='w-[280px]  h-[325px]'>
           
            <div className='flex items-center gap-[24px]'>
                <img src={logo}  className='w-[48px] h-[48px]'/>
                <p>Hakuna Trading PLC.</p>
            </div>

             <div className='flex  flex-col gap-4 justify-center'>
                <div  className='flex  gap-3'>
                      <IoHomeOutline  color='gray' size={25} />
                <p className='text-gray-500'>Addis Abeba,Ethiopia</p>
                </div>
              
            <div  className='flex  gap-3'>
                <MdOutlineVerifiedUser color='gray' size={25}/>
                 <p className='text-gray-500'>verified Seller</p>
            </div>
            {/* delivery */}
            <div  className='flex  gap-3'>
                <MdOutlineLocalShipping color='gray' size={25}/>
                 <p className='text-gray-500'>With Delivery</p>
            </div>
            </div>
            {/* btns */}
            <div className='flex flex-col  gap-2'> 
                <Button className='bg-blue-600 text-white'>Send Message</Button>
                <Button className='text-blue-600 bg-white border border-gray-400'>Seller's profile</Button>
                </div>

            
          
            
        </Card>
    )
}

export default SupplierInfo
