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
        { title: 'Gift offers', url: '/search-listView' },
        { title: 'cart', url: '/cart' },
        { title: 'Products', url: '/products' },
     
        { title: 'Contact', url: '/contact' },
    ]}
/>
            
        </div>
    )
}

export default Header
