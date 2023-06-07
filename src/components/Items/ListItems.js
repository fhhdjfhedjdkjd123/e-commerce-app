import { Col, Container, Row } from "react-bootstrap";
import classes from "./ListItems.module.css";
import Cards from "./Cards";

const ListItems = () => {
    const productsArr = [
      {
        id: "p1",
        title: "Colors",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      },
      {
        id: "p2",
        title: "Black and white Colors",
        price: 50,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      },
      {
        id: "p3",
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      },
      {
        id: "p4",
        title: "Blue Color",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
    ];
    
    const items = (
      <Row className={`row justify-content-center ${classes.product}`}>
        {productsArr.map((itm) => {
          return (
            <Col className="col-sm-10 col-lg-6" key={itm.id}>
              <Cards item={itm} />
            </Col>
          );
        })}
      </Row>
    );
    return (
      <>
        <Container>
          <center>
            <h1>Music</h1>
          </center>
          {items}
        </Container>
      </>
    );
  };
  
  export default ListItems;
  