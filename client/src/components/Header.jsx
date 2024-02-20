import { useState } from "react";
import styles from "../styles/styles";
import logo from "/logo.svg";
import { Link } from "react-router-dom";
import products from "../static/products";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BiMenuAltLeft } from "react-icons/bi";
import Dropdown from "./Dropdown";
import NavBar from "./NavBar";

function Header() {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState(null);
    const [active, setActive] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearch(term);
        const filteredProduct = products && products.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase()));
        setSearchData(filteredProduct);

    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) setActive(true)
        else setActive(false)
    })

    return (
        <>
            <div>
                <div className= "bg-[#fdf2e9]  flex items-center justify-between h-[96px] py-0 px-[48px]">
                    <div>
                        <Link to={"/"}>
                            <img src={logo} alt="logo" className="w-[90px] h-[90px] rounded-full object-cover" />
                        </Link>
                    </div>
                    {/* search bar */}
                    <div className="w-[50%] relative">
                        <input type="text"
                            placeholder="search Products..."
                            value={search}
                            onChange={handleSearch}
                            className="h-10 w-full  border-[#fdf2e9] border-[2px] rounded-md"
                        />
                        <AiOutlineSearch size={30} color="gray" className="absolute right-2 top-1.5 cursor-pointer" />

                        {searchData && searchData.length !== 0 ? (
                            <div className="absolute min-h-[30vh] bg-slate-50  shadow-sm p-4 z-[9]">
                                {searchData && searchData.map((data, index) => {
                                    const d = data.name;
                                    const productName = d.replace(/\s+/g, "-")
                                    return (<Link to={`/product/${productName}`} key={index}>
                                        <div className="w-full flex items-start py-3">
                                            <img src={data.img} alt="" className="w-10 h-10 mr-3" />
                                            <h1>{data.name}</h1>
                                        </div>

                                    </Link>
                                    )
                                })}




                            </div>
                        ) : null}
                    </div>
                    {/* btn */}

                    <Link to={"/seller"}
                        className="inline-block font-medium  transition duration-300  px-3 py-3 rounded-lg bg-[#e67e22] ">
                        <p className="text-white  text-base  flex items-center">Become Seller  <IoIosArrowForward size={25} /></p>

                    </Link>




                </div>


            </div>
            {/* navbar */}
            <div className={`${active ? " fixed top-0 left-0 z-10 w-full" : null} hidden transition md:flex  items-center justify-between  bg-[#fdf2e9] px-[48px] py-0   text-[#333] h-[70px]  ${active ? 'bg-white' : 'bg-[#fdf2e9]'} `}>

                {/* categories */}
                <div className="relative h-14 w-[270px] mt-3  max-large:block">
                    <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
                    <button className="h-full   w-full flex items-center justify-center pl-10 bg-white font-sans text-lg font-medium select-none rounded-t-md text-slate-800">All  Categories</button>
                    <IoIosArrowDown size={30} className="absolute  top-3 right-2 cursor-pointer" onClick={() => setDropDown(drop => !drop)} />
                    <Dropdown categoryData={dropDown} setDropdown={setDropDown} />


                </div>
                {/* nav items */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center">
                        <NavBar />

                    </div>
                    <div className={`flex items-center justify-center`}>
                        <div className={`${styles.normalFlex}`}>
                            <div className="relative cursor-pointer  mr-[15px]">
                                <AiOutlineHeart size={30} />
                                <span className="absolute right-0 top-0 rounded-full bg-green-500 w-5 h-5 p-0 m-0 text-white font-mono  text-center ">0</span>
                            </div>
                        </div>
                        <div className={`${styles.normalFlex}`}>
                            <div className="relative cursor-pointer  mr-[15px]">
                                <AiOutlineShoppingCart size={30} />
                                <span className="absolute right-0 top-0 rounded-full bg-green-500 w-5 h-5 p-0 m-0 text-white font-mono  text-center ">0</span>
                            </div>
                        </div>
                        <div className={`${styles.normalFlex}`}>
                            <div className="relative cursor-pointer  mr-[15px]">
                                <Link to={"/login"}>
                                    <CgProfile size={30} />
                                </Link>


                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default Header;
