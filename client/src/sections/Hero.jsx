
import { Button} from 'flowbite-react';
import banner from "/Banner-board.png"
import photo  from "/photo.png"
import CategorySidebar from "../components/Hero/CategorySidebar";
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <div  className="mb-[32px]">
            <div className="max-w-[1180px] h-[400px]  flex items-center shadow-md   ">
                {/* grid-1 */}
               <CategorySidebar/>
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

                            
                            <Link className="bg-blue-500 text-white text-center  rounded-sm  w-[180px]  h-[30px]" to={"/login"}>Log in</Link>
                            <Link className="bg-white  text-black w-[180px]  h-[30px] rounded-sm  text-center" to={"/signup"}>Sign up</Link>

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
