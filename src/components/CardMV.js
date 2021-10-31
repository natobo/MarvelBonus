import React from "react";
import './cardMV.css';
import {Card , Button} from "react-bootstrap"

export default function CardMV(props) {
  const {img, name } = props;
  return (
    <Card className="card card-img-top" style={{ width: "13rem" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="danger">Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}
