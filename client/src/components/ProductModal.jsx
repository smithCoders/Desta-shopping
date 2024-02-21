// import { useState, useEffect } from "react";
// import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
// import { RiCloseLine } from "react-icons/ri";
// import styles from "../styles/styles";

// function ProductModal({ setOpen, data,open }) {
//     console.log("set open",open)
//     const [count, setCount] = useState(1);
//     const [click, setClick] = useState(false);

//     // Close modal when the user presses the escape key
//     useEffect(() => {
//         const handleEscapeKey = (event) => {
//             if (event.keyCode === 27) {
//                 setOpen(!open);
//             }
//         };

//         document.addEventListener('keydown', handleEscapeKey);

//         return () => {
//             document.removeEventListener('keydown', handleEscapeKey);
//         };
//     }, [open, setOpen]);

//     const handleMessageSubmit = () => {
//         // Implement message submit functionality
//     };

//     const countDec = () => {
//         if (count > 1) setCount(count - 1);
//     };

//     const countInc = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
//             <div className="modal-overlay" onClick={() => setOpen(false)}></div>
//             <div className="w-[90%] h-[90vh] overflow-y-scroll md:w-[60%] md:h-[75vh] bg-white rounded-md shadow-lg relative">
//                 <RiCloseLine size={30} className="absolute right-3 top-3 cursor-pointer" onClick={() => setOpen(!open)} />
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                     {/* Left side */}
//                     <div>
//                         <img src={data.img} alt="Product" />
//                         <div className="flex flex-col ml-4">
//                             <div className="flex items-center gap-3">
//                                 <img src={data.shopAvatar} className="w-12 h-12 rounded-full object-cover mr-2" alt="Shop Avatar" />
//                                 <h4 className={styles.shop_name}>
//                                     {data.shopName}
//                                 </h4>
//                                 <p className="text-sm">
//                                     ({data.shopRating} Ratings)
//                                 </p>
//                                 <p className="text-sm text-red-600 font-semibold">{data.value} sold out</p>
//                             </div>
//                             <button className={`${styles.button} bg-black mt-4 h-11`} onClick={handleMessageSubmit}>
//                                 <span className="text-white flex items-center text-base">
//                                     Send Messages <AiOutlineMessage size={20} className="ml-1" />
//                                 </span>
//                             </button>
//                         </div>
//                     </div>
//                     {/* Right side */}
//                     <div className="pt-5 pl-1 pr-1">
//                         <h2 className={`${styles.productTitle} text-xl text-center`}>
//                             {data.name}
//                         </h2>
//                         <p className="text-base text-slate-800 font-normal">{data.description}</p>
//                         <div className="flex items-center justify-center gap-3 pt-3">
//                             <div className="flex items-center justify-center gap-8">
//                                 <p className={styles.productDidcountPrice}>
//                                     {data.priceDiscount && data.priceDiscount}
//                                 </p>
//                                 <p className={styles.price}>
//                                     {data.price}
//                                 </p>
//                             </div>
//                             {/* Quantity buttons */}
//                             <div className="flex items-center mt-12 justify-between pr-3">
//                                 <button className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in" onClick={countDec}>-</button>
//                                 <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[9px]">{count}</span>
//                                 <button className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in" onClick={countInc}>+</button>
//                             </div>
//                             {/* Wishlist */}
//                             <div className="ml-10 mt-4">
//                                 {click ? (
//                                     <AiFillHeart size={25} color="red" onClick={() => setClick(!click)} title="Remove from wishlist." />
//                                 ) : (
//                                     <AiOutlineHeart size={25} color="#333" onClick={() => setClick(!click)} title="Add to wishlist." />
//                                 )}
//                             </div>
//                         </div>
//                         {/* Add to cart button */}
//                         <button className={`${styles.button} bg-black ml-7 mt-4 h-11`}>
//                             <span className="text-white flex items-center text-base">
//                                 Add to cart <AiOutlineShoppingCart size={20} className="ml-1" />
//                             </span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductModal;
import { useState } from "react"
import {RxCross1} from "react-icons/rx"
import styles from "../styles/styles";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
function ProductModal({setOPen,data}) {
    const[count,setCount]=useState(1);
    const[click,setClick]=useState(false);
    const[select,setSelect]=useState(false);
    const handleMessageSubmit=()=>{

    }
    const countDec=()=>{
    if(count>1) setCount(count-1)
    }
const countInc=()=>{
    setCount(count+1)
}
    return (
        <div className="bg-white">
            {data? (<div className="fixed w-full h-screen  top-0 left-0  bg-slate-300  z-100 flex  items-center justify-center">
                <div className="w-[90%]  h-[90vh] overflow-y-scroll  md:w-[60%]  md:h-[75vh] bg-white rounded-md shadow-lg relative"> 
                    <RxCross1 size={30} className="absolute  right-3  top-3  z-60" 
                    onClick={()=>setOPen(false)}/>
                    <div className=" grid   grid-cols-1 md:grid-cols-2   gap-2 ">
                        <div className="">
                            <img src={data.img}/>
                            <div className="flex  flex-col ml-4">
                                 <div className="flex  items-center gap-3">
                                <img src={data.shopAvatar}  className="w-12 h-12 rounded-full  object-cover mr-2"/>
                                <h4 className={`${styles.shop_name}`}>
                                    {data.shopName}
                                </h4>
                                 <p className="text-sm ">
                                    ({data.shopRating +" "+ "Ratings"}) 
                                </p>
                                 <p className="text-sm  text-red-600   font-semibold">{(data.value) + "  sold out"}</p>
                               

                            </div>
                            <button  className={`${styles.button} bg-black    mt-4  h-11`} onClick={()=>handleMessageSubmit()}>
                                <span className="text-white flex items-center text-base">
                                    send Messages <AiOutlineMessage size={20} className="ml-1"/>
                                </span>

                            </button>
                           
                            </div>
                           
                            
                        </div>
                          {/* right-side. */}
                    <div className=" pt-5 pl-1 pr-1 ">
                        <h2 className={`${styles.productTitle} text-xl text-center`}>
                            {data.name}
                        </h2>
                        <p className="text-base text-slate-800 font-normal">{data.description}</p>
                        <div className="flex items-center justify-center gap-3 pt-3">
                            <div className="flex items-center justify-center gap-8 ">
                                 <p className={`${styles.productDidcountPrice}`}>
                                {data.priceDiscount && data.priceDiscount}
                            </p>
                            <p className={`${styles.price}`}>
                                {data.price}
                            </p>
                            </div>
                           
                            {/* button */}
                            <div className="flex items-center mt-12 justify-between pr-3">
                                
                                    <button className="bg-gradient-to-r from-teal-400  to-teal-500 text-white  font-bold rounded-l px-4 py-2 shadow-lg  hover:opacity-75 transition duration-300 ease-in" onClick={countDec}> -</button>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-4 
                                    py-[9px]">{count}</span>
                                
                                  
                                    <button className="bg-gradient-to-r from-teal-400  to-teal-500 text-white  font-bold rounded-l px-4 py-2 shadow-lg  hover:opacity-75 transition duration-300 ease-in" onClick={countInc}>+</button>
                                
                            </div>
                            {/* wishlist */}

                            <div className="ml-10 mt-4">
                            {click ? (<AiFillHeart  
                size={25} 
                color={click? "red":"#333"}
                onClick={()=>setClick(!click)}
                title="remove from wishlist."
                 className=""/>):
                 (<AiOutlineHeart  
                size={25} 
                color={click? "red":"#333"}
                onClick={()=>setClick(!click)}
                title="add to wishlist."
                 className=""/>)
                }
                </div>
                        </div>
                        {/* ad to cart btn */}
                         <button  className={`${styles.button} bg-black     ml-7   mt-4  h-11`} >
                                <span className="text-white flex items-center text-base">
                                    Add to cart <AiOutlineShoppingCart size={20} className="ml-1"/>
                                </span>

                            </button>
                    </div>
                   
                    </div>
                   

                </div>
                
            </div>):null}
        </div>
    )
}

export default ProductModal