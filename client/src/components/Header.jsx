import { useState } from "react";
import styles from "../styles/styles";
import  logo  from "/logo-colored.png"
import { Link } from "react-router-dom";
import { Dropdown, Button } from 'flowbite-react';
import { MdOutlineManageAccounts } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import products from "../static/products";


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
        <div className="flex  justify-between  items-center h-[96px] px-[32px] py-0 ">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" className="w-[150px]" />
                </Link>
            </div>
            

            


            <div className="px-[150px]  flex items-center">
                <input
                type="text"
                className="w-full  h-full outline-none bg-transparent"
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
                   

                    className="rounded-none bg-[#0D6EFD]">
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
            <div className="flex items-center  justify-center gap-2">
                <MdOutlineManageAccounts size={20} />
                <FiMessageSquare size={20}/>  
                <FiMessageSquare size={20}/>  
                <FiMessageSquare size={20}/>  



            </div>


        </div>
      
           
      
    )
}

export default Header;
