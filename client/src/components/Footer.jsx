import { Link } from "react-router-dom"
import styles from "../styles/styles"
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane,FaWhatsapp  } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import logo from "/logo.svg";


function Footer() {
    return (
        <div className="py-[128px] px-0">
            {/* lets make grid-col like this  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr in tailwind */}
            


            <div className={`${styles.container} grid grid-cols-5 gap-[96px]`}>
                {/* col-1 */}
            

                <div className="flex flex-col gap-2  ">
                    <Link>
                    <img src={logo} className="h-[150px] "/>
                    </Link>
                    <div className="flex  gap-4">
                        <Link>
                            <FaFacebookF className="text-[#3b5998] text-2xl"/>
                        </Link>
                        <Link>
                            <FaTelegramPlane className="text-[#0088cc] text-2xl"/>
                        </Link>
                        <Link>
                            <IoLogoInstagram className="text-[#e1306c] text-2xl"/>
                        </Link>
                        <Link>
                            <FaWhatsapp className="text-[#25d366] text-2xl"/>
                        </Link>



                    </div>
                    <div>
                        <span className="text-[#767676] text-sm">
                            {/* return the current year with copy right message */}
                            &copy; {new Date().getFullYear()} All rights reserved. by Desta shopping.inc.
                            
                        </span>
                    </div>
                </div>
                {/* c0l-2  with   grid with of 1.5fr */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium text-[#333] mb-4">About</h3>
                    <Link className="text-[#767676] text-sm">About us</Link>
                    <Link className="text-[#767676] text-sm">Contact us</Link>
                    <Link className="text-[#767676] text-sm">Privacy Policy</Link>
                    <Link className="text-[#767676] text-sm">Terms and Conditions</Link>

            </div>
                {/* col-3 */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium text-[#333] mb-4">Help</h3>
                    <Link className="text-[#767676] text-sm">Payments</Link>
                    <Link className="text-[#767676] text-sm">Shipping</Link>
                    <Link className="text-[#767676] text-sm">Cancellation & Returns</Link>
                    <Link className="text-[#767676] text-sm">FAQ</Link>

        </div>
                {/* col-4 */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium text-[#333] mb-4">Accounts</h3>
                    <Link className="text-[#767676] text-sm">Create account</Link>
                    <Link className="text-[#767676] text-sm">Sign in</Link>
                    <Link className="text-[#767676] text-sm">Andriod App</Link>
                    <Link className="text-[#767676] text-sm">iOS App</Link>
                
                </div>
                {/* col-5 */}
                {/* privacy policy */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium text-[#333] mb-4">Policy</h3>
                    <Link className="text-[#767676] text-sm">Return Policy</Link>
                    <Link className="text-[#767676] text-sm">Refund Policy</Link>
                    <Link className="text-[#767676] text-sm">Terms of Service</Link>
                    <Link className="text-[#767676] text-sm">Security</Link>
                    </div>

             </div>
                
</div>

    
    )
}

export default Footer
