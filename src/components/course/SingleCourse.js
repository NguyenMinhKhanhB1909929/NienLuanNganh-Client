import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleCourse = ({ course: { _id, title, cost, imgUrl, desc } }) => {
  let price = cost == 0 ? "Free" : `${cost} USD`;
  return (
    <Link to={`/courseDetails/id=${_id}`} className=" text-decoration-none">
      <Card
        style={{ width: "18rem", height: "470px" }}
        className="text-black card--hover"
      >
        <Card.Img
          variant="top"
          src={imgUrl}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title style={{ height: "60px" }}>
            <span
              className=" wrap-text"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            >
              {title}
            </span>
          </Card.Title>
          <Card.Text className="" style={{ height: "115px" }}>
            <span className="wrap-text" style={{ height: "48px" }}>
              {desc}
            </span>
            <span
              className="text-danger "
              style={{ fontSize: "24px", fontWeight: "bolder" }}
            >
              {price}
            </span>
            <div>
              <span>4.0 </span>
              <i className="fa-solid fa-star" style={{ color: "#ffd34b" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#ffd34b" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#ffd34b" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#ffd34b" }}></i>
              <span> (50) </span>
            </div>
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default SingleCourse;
