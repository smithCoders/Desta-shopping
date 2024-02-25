import NavbarComp from "../components/Header/NavbarComp";
import SearchComp from "../components/Header/SearchComp";

function Header() {
    return (
        <div >
            
           <SearchComp 
           dropdownItems={['Hakuna', 'Clothes', 'Electronics', 'Books', 'Toys']} />
        <NavbarComp
    navLinks={[
        { title: 'Home', url: '/' },
        { title: 'Gift offers', url: '/gift-offers' },
        { title: 'FAQ', url: '/faq' },
        { title: 'Products', url: '/products' },
     
        { title: 'Contact', url: '/contact' },
    ]}
/>
            
        </div>
    )
}

export default Header
