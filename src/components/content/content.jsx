import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import cssModules from "./content.module.css";

export default function Content() {
  return (
    <Container className={cssModules.container}>
      <Card className={cssModules.card}>
      <Card.Img variant="top" src="holder.js/100px180" className={cssModules.cardImg}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}
