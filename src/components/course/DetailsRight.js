import React from "react";
import { useContext } from "react";
import { Image, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CourseContext } from "../../contexts/CourseContext";

function DetailsRight({ course, id, chapters, myCourses }) {
  let find = false;
  find = myCourses.includes(id);
  const { buyCourse } = useContext(CourseContext);
  let lessonId = chapters[0].videos[0]?._id;
  let cost = course.cost === 0 ? "Free" : `${course.cost} USD`;
  let body = null;

  const onBuyCourse = async (event) => {
    event.preventDefault();
    const formBuy = {
      title: course.title,
      cost: course.cost,
      desc: course.desc,
      id: course._id,
      lessonId,
    };
    await buyCourse(formBuy);
  };

  if (course.cost) {
    if (!find) {
      body = (
        <form action="" onSubmit={onBuyCourse}>
          <Button className="btn-lg card--hover text-center" type="submit">
            Buy Now
          </Button>
        </form>
      );
    } else {
      cost = "Đã mua";
      body = (
        <Link to={`/learn/${id}/${lessonId}`}>
          <Button className="btn-lg card--hover text-center">Learn Now </Button>
        </Link>
      );
    }
  } else {
    body = (
      <Link to={`/learn/${id}/${lessonId}`}>
        <Button className="btn-lg card--hover text-center">Learn Now</Button>
      </Link>
    );
  }
  return (
    <div className="">
      <Image
        src={course.imgUrl}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      ></Image>
      <Container fluid className="text-center">
        <h4 className="my-3 text-center">{cost} </h4>
        {body}
        <div className="text-left">
          <h5 className="my-3">
            <i className="fa-brands fa-algolia me-2"></i>Trình độ cơ bản
          </h5>
          <h5 className="my-3">
            <i className="fa-solid fa-book me-2"></i>Tổng số 12 bài học{" "}
          </h5>
          <h5 className="my-3">
            <i className="fa-solid fa-calendar-days me-2"></i>Học mọi lúc mọi
            nơi
          </h5>
        </div>
      </Container>
    </div>
  );
}

export default DetailsRight;
