import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {}  from "../components/YouMayLike"
function DescriptionBox() {
    return (
        <div className="w-[880px]  h-auto shadow-md pl-6">
            <Navbar fluid rounded>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Description
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Reviews
        </Navbar.Link>
        <Navbar.Link href="#">About seller</Navbar.Link>
       
      </Navbar.Collapse>
    </Navbar>
    <div>

    </div>
    <p className='text-base text-gray-700 w-['>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

    </p>


            
        </div>
    )
}

export default DescriptionBox
