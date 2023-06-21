import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
//  Name,email Id, phone number
import classes from "./ContactUs.module.css";
const ContactUs = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phNum: "",
    msg: "",
  });
  const nameChangeHandler = (event) => {
    setContact({ ...contact, name: event.target.value });
  };
  const emailChangeHandler = (event) => {
    setContact({ ...contact, email: event.target.value });
  };

  const phNumChangeHandler = (event) => {
    setContact({ ...contact, phNum: event.target.value });
  };
  const buttonControlHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://react-project-ee95a-default-rtdb.firebaseio.com/contact-us.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data)
    setContact({
      name: "",
      email: "",
      phNum: "",
      msg: "",
    });
  };
  return (
    <Container className={classes.container}>
      <header className={classes.header}>
        <h1>Get in Touch with us</h1>
        <span>kindly leave a message and we'll connect.</span>
      </header>
      <Form className={classes.Form} onSubmit={buttonControlHandler}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="nameInput">Name</Form.Label>
          <Form.Control
            value={contact.name}
            onChange={nameChangeHandler}
            type="text"
            id="nameInput"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="emailInput">Email</Form.Label>
          <Form.Control
            value={contact.email}
            onChange={emailChangeHandler}
            type="email"
            id="emailInput"
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="detailsInput">Phone No.</Form.Label>
          <Form.Control
            value={contact.phNum}
            onChange={phNumChangeHandler}
            type="numbers"
            id="detailsInput"
            placeholder="Contact Details"
          />
        </Form.Group>
        <Button className={classes.btn} type="submit">
          Submit Store
        </Button>
      </Form>
    </Container>
  );
};
export default ContactUs;
