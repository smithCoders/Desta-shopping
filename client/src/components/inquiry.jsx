import img from "/inquiry.png"
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
function Inquiry() {
    return (
        <div className="w-[1189px] h-[420px]  relative overflow-hidden">
            <img src={img} className="w-full h-auto "/>
            <div className="absolute inset-0 bg-gradient-to-b   from-blue-500  to-blue-300 opacity-80"></div>
            <div className="absolute  top-8  left-12 ">
                <h2 className="text-white text-[32px] font-medium"> <span className="block">An easy way to send </span> <span> requests to all suppliers</span> </h2>
                <p className="text-base text-white">
                    <span className="block">Lorem ipsum dolor sit amet, consectetur adipisicing .</span>
                    <span>elit, sed do eiusmod tempor incididunt</span>


                </p>

            </div>
            {/* form */}
            <div className=" absolute right-[48px] bottom-[16px] w-[491px] h-[346px] bg-white ">
                <div className="mx-4">
                     <h4 className="text-xl text-[#1C1C1C] font-medium">Send quote to suppliers</h4>
                <form className="flex  flex-col gap-4">
                    <div className="flex flex-col  gap-6">
                        <TextInput type="text" placeholder="what item do you need?"/>
                        <Textarea placeholder="Type more detail..." rows={3}/>
                        <div>
                             <TextInput type="number" placeholder="quantity"/>
                        </div>
                        <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white">Send Inqury</Button>
                    </div>

                </form>
                </div>
               


            </div>

        </div>
    )
}

export default Inquiry
