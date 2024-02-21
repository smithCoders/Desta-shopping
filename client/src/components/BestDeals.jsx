import { useState,useEffect } from "react"
import products from "../static/products";

import Card from "./Card";
function BestDeals() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        const d=products && products.sort((a,b)=>b.value-a.value);
        const  firstFive=d.slice(0,5);
        setData(firstFive)
    },[])

    return (
        <div >
            
                <div className="grid grid-cols-1 gap-[20px] sm-grid-cols-2 sm:gap-[10px]  md:grid-cols-3 md:gap-[10px]   xl:grid-cols-5 xl:gap-[20px]">
                    {products &&  data.map((i,index)=>(
                        <Card  data={i} key={index}/>
                    ))}
              
            </div>
            
        </div>
    )
}

export default BestDeals
