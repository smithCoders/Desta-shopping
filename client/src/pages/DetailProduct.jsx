import BannerDiscount from "../components/Banner"
import DeatilBox from "../components/DeatilBox"
import DescriptionBox from "../components/DescriptionBox"
import RelatedProducts from "../components/RelatedProducts"
import {YouMayLikeBox}  from "../components/YouMayLike"
function DetailProduct() {
    return (
        <div className="max-w-full px-[96px] py-0">
            <DeatilBox/>
            <div className="flex gap-6">
                 <DescriptionBox/>
                
                    <YouMayLikeBox/>
                    
                 

            </div>
            <RelatedProducts/>
            <BannerDiscount/>
           
            
        </div>
    )
}

export default DetailProduct
