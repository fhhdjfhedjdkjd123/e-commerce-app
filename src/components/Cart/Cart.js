import { useContext } from "react";
import {
  Button,
  Image,
  Table,
  Modal,
} from "react-bootstrap";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAMount = ctx.items.reduce((sum,item) => {
    return sum + item.price * item.quantity;
  },0);
  const cartItems = ctx.items.map((item) => {
    return (
      <tr>
        <td>
          <tr>
            <td>
              <Image className="me-3" src={item.imageUrl} width="50px"></Image>
            </td>
            <td>
              <span>{item.title}</span>
            </td>
          </tr>
        </td>
        <td>{item.price * +item.quantity}</td>
        <td>
          <tr>
            <td>{item.quantity}</td>
            <td>
              <Button
                className="ms-3"
                onClick={() => {
                  ctx.removeItems(item);
                }}
              >
                Remove
              </Button>{" "}
            </td>
          </tr>
        </td>
      </tr>
    );
  });
  return (
    <Modal show={props.onShow} onHide={props.onShow}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </Table>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span> ${totalAMount} </span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={props.onShow}>
          Close
        </Button>
        <Button variant="danger">Purchase</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
