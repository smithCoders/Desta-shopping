import { Button, Card } from 'flowbite-react';
function CheckoutCard() {
    return (
        <Card className='w-[280px]  h-[302px] '>
            <div className='flex  flex-col  gap-2 border-b border-gray-50 mb-8'>
                  <p className=' flex items-center   justify-between'>
                <span className='text-gray-600'>SUbTotal:</span>
                <span className='text-gray-600'>$8750.78</span>
            </p>
            <p className=' flex items-center   justify-between'>
                <span className='text-gray-600'>Discount:</span>
                <span className='text-[#FA3434]'>-$720</span>
            </p>
            <p className=' flex items-center   justify-between'>
                <span className='text-gray-600'>Tax:</span>
                <span className='text-[#00B517]'>+$50</span>
            </p>
            </div>
            <h4>
                 <p className=' flex items-center   justify-between'>
                <span className='text-base text-black'>Total:</span>
                <span className='text-xl  font-semibold '>$7750.78</span>
            </p>
            </h4>
            <Button color='green' className='text-white bg-[#00B517]'>Check Out</Button>
          
            
        </Card>
    )
}

export default CheckoutCard
