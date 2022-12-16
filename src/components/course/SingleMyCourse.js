import { useEffect } from "react";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { LessonContext } from "../../contexts/LessonContext";
import { CourseContext } from "../../contexts/CourseContext";
import Loading from "../layout/Loading";

const SingleMyCourse = ({
  course: { _id, title, cost, desc, lessons, imgUrl },
}) => {
  let id = "";
  const { getLessonById, lessonState } = useContext(LessonContext);
  useEffect(() => {
    getLessonById(lessons[0]);
  }, []);
  if (lessonState.lessonsFindLoading) {
    <Loading></Loading>;
  } else {
    id = lessonState.lessons[0]._id;
  }

  return (
    <Link to={`/learn/${_id}/${id}`} className=" text-decoration-none">
      <Card
        style={{ width: "18rem", height: "420px" }}
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
          <Card.Text className="" style={{ height: "80px" }}>
            <span className="wrap-text" style={{ height: "48px" }}>
              {desc}
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
          <Button variant="primary">Learn now</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default SingleMyCourse;
