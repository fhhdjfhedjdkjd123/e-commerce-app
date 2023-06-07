import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink} from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar=()=>{
    return(
        <div className="mb-5">
        <Navbar bg="dark" variant="dark" className="border-bottom fixed-top" style={{ height: "8vh" }}>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className={classes.navbar} id="responsive-navbar-nav">
              <Nav className={classes.listul}>
                <NavLink className="mx-5" to="/home">Home</NavLink>
                <NavLink className="mx-5" to="/store">Store</NavLink>
                <NavLink className="mx-5" >About</NavLink>
                <NavLink className="mx-5" to="/auth">Login</NavLink>
                <NavLink to="/contactus" className="mx-5" >Contact Us</NavLink>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  
    );
};
export default NavBar;