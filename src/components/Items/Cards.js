import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <Card className="m-5">
      <h3>{props.item.title}</h3>
      <Link to={`/store/${props.item.id}`}>
        <Card.Img variant="top" src={props.item.imageUrl} />
      </Link>
      <Card.Body>
        <Card.Text>
          <Card.Title>${props.item.price}</Card.Title>
        </Card.Text>
        <Button type="click">
          Add to Card
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Cards;
