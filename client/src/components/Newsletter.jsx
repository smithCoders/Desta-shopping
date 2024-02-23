import { Button,  TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
function Newsletter() {
    return (
        <div className='w-[1440px] h-[190px] bg-gray-200 flex flex-col gap-3 items-center justify-center'>
            <h4 className='text-xl font-medium'>Subscribe on our newsletter</h4>
            <p className='text-base  text-[#606060]'>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className='flex gap-1'>
                 <TextInput id="email4" type="email" icon={HiMail} placeholder="email" required />
            <Button type='submit' color='blue' className='text-white '>Subscribe</Button>
            </div>
           
        </div>
    )
}

export default Newsletter
