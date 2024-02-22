import { Link } from "react-router-dom"
import { Button} from 'flowbite-react';
import banner from "/Banner-board.png"
import photo  from "/photo.png"


function Hero() {
    return (
        <div className=" px-[96px] py-0">
            <div className="max-w-[1180px] h-[400px]  flex items-center shadow-md  ">
                {/* grid-1 */}
                <div className=" flex flex-col gap-4 justify-center w-[250px] h-[360px] pl-4">
                    <Link className="text-gray-600 hover:bg-[#E5F1FF]">Automobiles</Link>
                    <Link className="text-gray-600 hover:bg-[#E5F1FF]">Clothes and Wears</Link>
                    <Link className="text-gray-600 hover:bg-[#E5F1FF]">Home interiors</Link>
                    <Link className="text-gray-600 hover:bg-[#E5F1FF] ">computer and techs</Link>
                    <Link className="text-gray-600 hover:bg-[#E5F1FF]">Tools and equipments</Link>
                    <Link className="text-gray-600 hover:bg-[#E5F1FF]">sport and outdoors</Link>
                    <Link className="text-gray-600 hover:bg-[#E5F1FF]">Animal and pets</Link>
                    <Link className="text-gray-600 hover:bg-[#E5F1FF]">Machinary and tools</Link>
                    <Link className="text-gray-600 hover:bg-[#E5F1FF]">More categories</Link>

                </div>
                {/* grid-2 */}
                <div className="w-[665px] h-[360px] relative">
                    <img src={banner} className="w-full  h-auto"/>
                    <div className="absolute left-8  top-14 flex  flex-col gap-[6px]">
                        <span className="text-[28px] ">
                        Latest trending
                    </span>
                    <span className="text-[32px] font-semibold">Electronics items</span>
                        <Button  className="text-black bg-white  ">Learn More</Button>
                    </div>
                    

                </div>
                {/* grid-3 */}
                <div className=" flex  flex-col  gap-3 ">
                    <div className="w-[203px]  h-[150px] bg-[#E3F0FF]">
                        <div className="flex flex-col gap-3 px-2">
                            <div className="flex items-center gap-2 mb-3 mt-1">
                                <img src={photo} className="w-[28.4px] h-[33.89px] bg-cover"/>
                            <p>
                                <span className="block">Hi user,</span>
                                <span>let's get started</span>
                            </p>
                            </div>

                            
                            <Button className="bg-blue-500 text-white  w-[180px]  h-[30px] hover:bg-blue-400 hover:text-white">Log in</Button>
                            <Button className="bg-white  text-black w-[180px]  h-[30px]  hover:none">Sign up</Button>

                        </div>

                    </div>
                    <div className="w-[200px]  h-[95px] bg-[#F38332] flex items-center justify-between flex-wrap">
                        <p className=" text-white px-5">Get US $10 off with a new supplier</p>

                    </div>
                    <div className="w-[200px]  h-[95px] bg-[#55BDC3] flex items-center justify-between flex-wrap">
                        <p className="text-white px-5">Send quotes with supplier preferences</p>

                    </div>

                </div>

            </div>

        </div>
       
    )
}

export default Hero
