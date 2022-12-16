import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  design,
  development,
  marketing,
  itAndSortware,
  personalDevelopment,
  business,
  photography,
  music,
} from "./linkCategory";
function Category({ title }) {
  let img = null;
  switch (title) {
    case "Design":
      img = design;
      break;
    case "Development":
      img = development;
      break;
    case "Marketing":
      img = marketing;
      break;
    case "ItAndSortware":
      img = itAndSortware;
      break;
    case "Photography":
      img = photography;
      break;
    case "Music":
      img = music;
      break;
    default:
      break;
  }
  return (
    <Col md={2}>
      <Link to={`/${title}`}>
        <Card className="card--hover">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Text className="text-center text-dark">{title}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default Category;
