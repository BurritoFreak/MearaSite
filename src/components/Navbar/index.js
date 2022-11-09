import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
        <NavLink to="/PortTestThree/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/PortTestThree/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/PortTestThree/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/PortTestThree/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/PortTestThree/sign-up" activeStyle>
			Sign Up
		</NavLink>
        <NavLink to="/PortTestThree/photos" activeStyle>
			Photos
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
