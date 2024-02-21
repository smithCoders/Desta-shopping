import { NavLink } from "react-router-dom";
import navItems from "../static/navItems";
import styles from "../styles/styles";

function NavBar() {
  return (
    <div className={`${styles.normalFlex}`}>
      {navItems &&
        navItems.map((link, i) => (
          <div key={i} className="flex">
            <NavLink
             exact={link.url === "/"} // Set exact only for the index route
              to={link.url}
              className="text-[#333] text-lg font-medium px-6 cursor-pointer"
              activeClassName="text-green-600"
            >
              {link.name}
            </NavLink>
          </div>
        ))}
    </div>
  );
}

export default NavBar;
