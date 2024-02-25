import { Navbar } from 'flowbite-react';
import { IoMdMenu } from 'react-icons/io';

function NavbarComp({ navLinks }) {
    return (
        <Navbar fluid rounded>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="gap-4  flex-nowrap">
                <Navbar.Link>
                    <span className="cursor-pointer">
                        <IoMdMenu size={25} className="inline pr-2" />
                        All Category
                    </span>
                </Navbar.Link>
                {navLinks.map((link, index) => (
                    <Navbar.Link key={index} href={link.url}>
                        {link.title}
                    </Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComp;
