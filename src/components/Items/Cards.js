import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";
//import ProductPage from "./ProductPage";
const Cards = (props) => {
  const ctx = useContext(CartContext);
  console.log(`/store/${props.item.id}`)
  const addToCardHandler = (event) => {
    event.preventDefault();
    const quantity = +1;
    ctx.addToItems({ ...props.item, quantity: quantity });
  };
  // const productDetailsHandler = (item) => {
  //   console.log(item)
  //   ctx.addproductObj(item)
    
  // }
  return (
    <Card className="m-5">
      <h3>{props.item.title}</h3>
      <Link to={`/store/${props.item.id}`}>
        <Card.Img  variant="top" src={props.item.imageUrl} />
      </Link>
      <Card.Body>
        <Card.Text>
          <Card.Title>${props.item.price}</Card.Title>
        </Card.Text>
        <Button type="click" onClick={addToCardHandler}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Cards;
