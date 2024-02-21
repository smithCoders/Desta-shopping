import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/styles";
import {AiFillEye, AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar} from "react-icons/ai"
import ProductModal from "./ProductModal";

function Card({data}) {
 
  
    const[click,setClick]=useState(false);
    const[open,setOPen]=useState(false);
    const d=data.name;
    const productName=d.replace(/\s+/g,"-")
    return (
      <>
        <div className="w-full h-[370px] bg-white rounded-lg shadow-lg p-3 relative cursor-pointer">
            <div className="flex justify-end"></div>
               <img src={data.img} alt="" className="w-full h-[170px] object-contain"/>
            {/* <Link to={`/product/${productName}`}>
             
            </Link> */}
            {/* shop-name */}
            <Link to={"/"}>
                <p className={` ${styles.shop_name} `}>{data.name}</p>
            </Link>
            {/* descritpion */}
            <Link  to={`/product/${productName}`}>
                <h4 className="pb-3 font-medium">{data.name.length>40? data.name.slice(0,40)+"...":data.name}</h4>
                <div  className="flex">
                    <AiFillStar size={20} color="#F6BA00" className="mr-2 cursor-pointer"/>
                    <AiFillStar size={20} color="#F6BA00" className="mr-2 cursor-pointer"/>
                    <AiFillStar size={20} color="#F6BA00" className="mr-2 cursor-pointer"/>
                    <AiFillStar size={20} color="#F6BA00" className="mr-2 cursor-pointer"/>
                    <AiFillStar size={20} color="#F6BA00" className="mr-2 cursor-pointer"/>
                    <AiOutlineStar size={20} color="#F6BA00" className="mr-2 cursor-pointer"/>
                    

                </div>
                <div className="py-2 flex items-center justify-between">
                    <div className="flex">

                         <p className={`${styles.price}`}>
                        {data.price && data.price}
                    </p>
                          <p className={`${styles.productDidcountPrice}`}>
                        { data.priceDiscount && data.priceDiscount } 
                    </p>
                   
                    </div>
                    <span className="font-normal  text-[15px]  text-green-500">{data.totalSell&& data.totalSell+ " "+  "sold"} </span>
                  
                </div>
                      </Link>
                {/* side options */}
           
                  
                            {click ? (<AiFillHeart  
                size={20} 
                color={click? "red":"#333"}
                onClick={()=>setClick(!click)}
                title="remove from wishlist."
                 className="absolute top-5  right-2 cursor-pointer"/>):
                 (<AiOutlineHeart  
                size={20} 
                color={click? "red":"#333"}
                onClick={()=>setClick(!click)}
                title="add to wishlist."
                 className="absolute top-5  right-2 cursor-pointer"/>)
                }
                 
            
                {/* icon-2 */}
               
                      <AiOutlineEye  
                size={20} 
                color={"#333"}
                onClick={()=>setOPen(!open)}
                title="Quick Fill"
               
                 className="absolute top-14  right-2 cursor-pointer"/>
                      <AiOutlineShoppingCart 
                size={20} 
                color={"#444"}
                onClick={()=>setOPen(!open)}
                title="Add to cart"
               
                 className="absolute top-24  right-2 cursor-pointer"/>
                
                
                
                {open ? (<ProductModal setOPen={setOPen} open={open} data={data}/>):null}
                </div>
      
      
      </>
    )
}

export default Card
