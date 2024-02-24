import CartItem from "../components/Cart/CartItem"
import CheckoutCard from "../components/Cart/CheckoutCard"
import Coupon from "../components/Cart/Coupon"


function CartPage() {
    return (
        <div className="px-[96px] py-0 relative">
            <h3  className="text-2xl font-semibold  my-6">My  CART(3)</h3>
        <div className="w-[880px] flex gap-8 flex-col border border-gray-300  rounded-md px-[48px] ">
    <div className="border-b border-gray-300">
        <CartItem />
    </div>
    <div className="border-b border-gray-300">
        <CartItem />
    </div>
    <div className="border-b border-gray-300">
        <CartItem />
    </div>
   
</div>
{/* checkout */}
<div className="absolute top-[35px] right-[85px] flex flex-col gap-2" >
    <Coupon/>
    <CheckoutCard/>
</div>



        </div>
    )
}

export default CartPage
