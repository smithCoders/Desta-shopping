import { Link } from "react-router-dom"

function BannerDiscount() {
    return (
        <div className='bg-[#237CFF] w-[1180px] h-[120px] flex items-center  justify-around ml-[60px] mt-6'>
            <div className="flex flex-col justify-center gap-1">
                <h4 className="text-2xl font-medium text-white">Super discount on more than 100 USD</h4>
                <p className="text-sm  text-white">Have you ever finally just write dummy info</p>
            </div>
            <Link to={""} className="bg-orange-500 text-white px-6  py-2 rounded-md">Shop</Link>
           

        </div>
    )
}

export default BannerDiscount
