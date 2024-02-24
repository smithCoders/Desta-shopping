import { Card,TextInput, Button} from 'flowbite-react';

function Coupon() {
    return (
       
            <Card className='w-[280px] h-[110px]'>
                <p className='text-gray-600'>Have Coupoun?</p>
                <div className='flex items-center rounded-md '>
                    <TextInput  type='text' />
                    <Button color="white" className='text-blue-600 text-[18px] font-medium  border border-gray-300'>Apply</Button>
                </div>

            </Card>
            
       
    )
}

export default Coupon
