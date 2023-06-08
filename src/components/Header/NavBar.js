import { useContext, useState } from "react";
import { Container, Nav, Navbar, Badge, Button, Card } from "react-bootstrap";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartContext from "../store/cart-context";
import classes from "./NavBar.module.css"

const NavBar = () => {
  const params = useParams();
  console.log(params)
  const location = useLocation();
  console.log(location)

  const [show, setShow] = useState(true);
  const ctx = useContext(CartContext);

  const showCartHandler = () => {
    setShow(!show);
  };
  let itemsInCart = 0;
  ctx.items.forEach((item) => {
    itemsInCart = +itemsInCart + +item.quantity;
  });
  return (
    <div className="mb-5">
      <Navbar
        bg="dark"
        variant="dark"
        className="border-bottom fixed-top"
        style={{ height: "8vh" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className={classes.navbar} id="responsive-navbar-nav">
            <Nav className={classes.listul}>
              <NavLink className="mx-5" to="/home">Home</NavLink>
              <NavLink className="mx-5" to="/store">Store</NavLink>
              <NavLink className="mx-5" to="/about">About</NavLink>
              {!ctx.isLoggedIn && (<NavLink className="mx-5" to="/auth">Login</NavLink>)}
              <NavLink to="/contactus" className="mx-5" >Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          {( location.pathname === '/store' || location.pathname === "/store/:productId") && (<Button
              onClick={showCartHandler}
              variant="primary"
              className="mx-5 border" >
              Cart <Badge bg="primary">{itemsInCart}</Badge>
            </Button>)}
            {ctx.isLoggedIn && <Button onClick={ctx.logout}>Logout</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card>
        {!show && <Cart onShow={showCartHandler} onClose={showCartHandler} />}
      </Card>
    </div>
  );
};

export default NavBar;
