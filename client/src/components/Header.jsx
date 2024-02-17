import { useState } from "react"
import styles from "../styles/styles"
import logo  from "/logo2.png"
import { Link } from "react-router-dom";
import  products from "../static/products"
import {AiOutlineSearch} from "react-icons/ai";
import {IoIosArrowForward,IoIosArrowDown} from "react-icons/io"
import {BiMenuAltLeft} from "react-icons/bi"
import Dropdown from "./Dropdown";
import NavBar from "./NavBar";
function Header() {
    const[search,setSearch]=useState("");
    const[searchData,setSearchData]=useState(null);
    const[active,setActive]=useState(false)
    const[dropDown,setDropDown]=useState(false)
    const handleSearch=(e)=>{
        const term=e.target.value;
        setSearch(term);
        const filteredProduct=products && products.filter((product)=>
            product.name.toLowerCase().includes(term.toLowerCase()));
           setSearchData(filteredProduct)
        
    }


    window.addEventListener("scroll",()=>{
        if(window.screenY===70) setActive(true)
        else setActive(false)
    })
    return (
        <>
        <div className={`${styles.section}`}>
            <div className="hidden  md:h-[50px] md:my-[20px] md:flex items-center justify-between">
                <div>
                    <Link to={"/"}>
                        <img  src={logo} alt="logo" className="w-36 h-36 rounded-full object-cover"/>
                    </Link>
                </div>
                {/* search bar */}
                 <div className="w-[50%]  relative">
                        <input type="text" 
                        placeholder="search Products..." 
                        value={search} 
                        onChange={handleSearch}
                        className="h-10 w-full  border-[#3957db] border-[2px] rounded-md"
                        />
                        <AiOutlineSearch size={30} color="gray" className="absolute right-2 top-1.5 cursor-pointer"/>

                        {  searchData && searchData.length!==0 ?(
                            <div className="absolute min-h-[30vh] bg-slate-50  shadow-sm p-4 z-[9]">
                                {searchData && searchData.map((data,index)=>{
                                    const d=data.name;
                                    const productName=d.replace(/\s+/g,"-")
                                    return(<Link to={`/product/${productName}` } key={index}>
                                        <div className="w-full flex items-start py-3">
                                            <img src={data.img} alt="" className="w-10 h-10 mr-3"/>
                                            <h1>{data.name}</h1>
                                        </div>

                                    </Link>
                                        )
                                    })}




                            </div>
                        ):null}
                    </div>
                    {/* btn */}
                    <div className={`${styles.button}`}>
                        <Link to={"/seller"}>
                            <h1 className="text-white flex items-center">Become Seller  <IoIosArrowForward size={25} color="white"/></h1>
                           
                        </Link>

                    </div>
                 
            </div>
              
                   
        </div>
         {/* navbar */}
               <div className={`${active===true? "shadow-sm fixed top-0 left-0 z-10":null} hidden transition md:flex  items-center justify-between w-full bg-[#3321c8] h-[70px] `}>
                 <div className={`${styles.section} relative ${styles.normalFlex} justify-between`}>
                        {/* categories */}
                        <div className="relative h-14 w-[270px] mt-3  max-large:block">
                            <BiMenuAltLeft size={30} className="absolute top-3 left-2"/> 
                            <button className="h-full   w-full flex items-center justify-center pl-10 bg-white font-sans text-lg font-medium select-none rounded-t-md text-slate-800">All  Categories</button>
                            <IoIosArrowDown size={30} className="absolute  top-3 right-2 cursor-pointer" onClick={()=>setDropDown(drop=>!drop)} />
                            <Dropdown  categoryData={dropDown} setDropdown={setDropDown}/>
                            {/* nav items */}
                            <div className={`${styles.normalFlex}`}>
                                <NavBar/>
                            </div>

                        </div>
                    </div>
               </div>
               </>
    )
}

export default Header
