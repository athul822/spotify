import React from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from "reactstrap";
import "./NavBar.css";

function NavBar() {
    return (
        <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    full
    light
    container
  >
    <NavbarBrand
      className="me-auto"
      href="/"
    >
      Spotify
    </NavbarBrand>
    <NavbarToggler
      className="me-2"
      onClick={function noRefCheck(){}}
    />
    <Collapse navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="/components/">
            Premium
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Support
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#/">
            Download
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#">
            Sign In
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
    );
}

export default NavBar;
