import { useState } from "react";

import  logo  from "/logo-colored.png"
import { Link } from "react-router-dom";
import { Dropdown, Button,Navbar } from 'flowbite-react';
import { MdOutlineManageAccounts } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";




function Header() {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState(null);
    const [active, setActive] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearch(term);
        
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) setActive(true)
        else setActive(false)
    })

    return (
        <div className="px-[96px] py-0 ">
             <div className="flex  justify-between  items-center h-[96px] ">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" className="w-[150px]" />
                </Link>
            </div>
            

            


            <div className="px-[100px]  flex items-center">
                <input
                type="text"
                className="w-[350px]  h-full  outline-1 outline-sky-500 border border-[##0D6EFD] bg-transparent"
                placeholder="search for products"
                value={search}
                onChange={handleSearch}

                />
                {/* category dropdown */}
                <div >
                    <Dropdown 
                    label="Categories" 
                    placement="bottom" 
                    color="transparent"
                   

                    className="rounded-none ">
        <Dropdown.Item>Hakuna</Dropdown.Item>
        <Dropdown.Item>cothes</Dropdown.Item>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Electronics</Dropdown.Item>
       
      </Dropdown>
                </div>
                {/* button */}
                <div>
                    <Button   className="rounded-l-sm px-[14px]   bg-[#0D6EFD] text-white ">Search</Button>

                </div>
            </div>
            {/* icons */}
            <div className="flex items-center  justify-center gap-6">
                <div className="text-gray-500">
                    <MdOutlineManageAccounts size={25}   />
                    <span className="text-sm">profile</span>
                </div>
                <div className="text-gray-500">
                    <FiMessageSquare size={25} /> 
                    <span className="text-sm">Messages</span>
                </div>
                 <div className="text-gray-500" >
                     <FaRegHeart size={25}  />
                     <span className="text-sm">Orders</span>
                 </div>
                 <div className="text-gray-500">
                <IoCartOutline  size={25} /> 
                <span className="text-sm">Mycart</span> 

                 </div>
              



            </div>


        </div>
        {/* navbar */}
         <Navbar fluid rounded>
      <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="gap-4  flex-nowrap">
        <Navbar.Link>
            <span className="cursor-pointer">
                 <IoMdMenu size={25} className="inline pr-2"/>
           All Category
            </span>
           
        </Navbar.Link>
        
        <Navbar.Link href="/" >
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Hot offers</Navbar.Link>
        <Navbar.Link href="#">Gift offers</Navbar.Link>
        <Navbar.Link href="#">FAQ</Navbar.Link>
        <Navbar.Link href="#">Menu Items</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>

        </div>
       
      
           
      
    )
}

export default Header;
