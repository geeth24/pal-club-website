import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../images/Logo.png";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../ButtonElement";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavImage,
  NavBtn,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavLogo to="/" onClick={toggleHome}>
            <NavImage src={Logo} alt="logo" />
          </NavLogo>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-90}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="whoarewe"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-90}
                >
                  Who are we?
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-90}
                >
                  Services
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="contactus"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-90}
                >
                  Contact Us
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
          <NavBtn>
            <Button
              to="contactus"
              // onMouseEnter={onHover}
              // onMouseLeave={onHover}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary="true"
              dark="true"
            >
              Sign Up
            </Button>
          </NavBtn>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
