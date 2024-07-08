import { Dropdown, Button } from "flowbite-react";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import logo from "/logo-colored.png";
import { Link } from "react-router-dom";

function SearchComp({ dropdownItems }) {
  return (
    <div className="flex  justify-between  items-center h-[96px] ">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[150px]" />
      </Link>
      <div className="px-[100px] block md:flex  items-center">
        <input
          type="text"
          className="w-[350px]  h-full  outline-1 outline-sky-500 border border-[##0D6EFD] bg-transparent "
          placeholder="search for products"
        />

        <div className="hidden  md:inine-block">
          <Dropdown
            label="Categories"
            placement="bottom"
            color="transparent"
            className="rounded-none "
          >
            {dropdownItems?.map((item, index) => (
              <Dropdown.Item key={index}>{item}</Dropdown.Item>
            ))}
          </Dropdown>
        </div>
        {/* button */}
        <div>
          <Button className="hidden  md:inine-block  rounded-l-sm px-[14px]   bg-[#0D6EFD] text-white ">
            Search
          </Button>
        </div>
      </div>
      {/* icons */}
      <div className="flex items-center  justify-center gap-6">
        <div className="text-gray-500">
          <MdOutlineManageAccounts size={25} />
          <span className="text-sm">profile</span>
        </div>
        <div className="text-gray-500  hidden  md:inline-block">
          <FiMessageSquare size={25} />
          <span className="text-sm">Messages</span>
        </div>
        <div className="text-gray-500 hidden  md:inline-block">
          <FaRegHeart size={25} />
          <span className="text-sm">Orders</span>
        </div>
        <div className="text-gray-500">
          <IoCartOutline size={25} />
          <span className="text-sm">Mycart</span>
        </div>
      </div>
    </div>
  );
}

export default SearchComp;
