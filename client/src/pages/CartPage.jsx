import CartFeatures from "../components/Cart/CartFeatures";
import CartItem from "../components/Cart/CartItem"
import CheckoutCard from "../components/Cart/CheckoutCard"
import SavedLaterSection from "../components/Cart/SavedLaterSection";
import Coupon from "../components/Cart/Coupon"
import Banner  from "../components/Banner"
import { Button} from 'flowbite-react';


function CartPage() {
    return (
        <div className="px-[96px] py-0 relative">
            <h3  className="text-2xl font-semibold  my-6">My  CART(3)</h3>
        <div className="w-[880px] flex gap-8 flex-col border border-gray-300  rounded-md px-[48px]  mb-10">
    <div className="border-b border-gray-300">
        <CartItem />
    </div>
    <div className="border-b border-gray-300">
        <CartItem />
    </div>
    <div className="border-b border-gray-300">
        <CartItem />
    </div>
    {/* btn. */}
    <div className="flex  items-center   justify-between">
        <Button color="blue" className="text-white">Back to Shop</Button>
        <Button color="white" className="text-blue-600 border border-gray-300">Remove All</Button>

    </div>
   
   
</div>
 <CartFeatures/>
{/* checkout */}
<div className="absolute top-[35px] right-[85px] flex flex-col gap-2" >
    <Coupon/>
    <CheckoutCard/>
</div>
      
      <SavedLaterSection/>
      <Banner/>
      
      



        </div>
    )
}

export default CartPage
