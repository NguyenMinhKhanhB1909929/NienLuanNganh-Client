import React, { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import SingleCourse from "./SingleCourse";
import { CourseContext } from "../../contexts/CourseContext";
import Loading from "../layout/Loading";

function FreeCourse() {
  const {
    courseState: { coursesFreeLoading, coursesFree },
    getCourseFree,
  } = useContext(CourseContext);

  useEffect(() => {
    getCourseFree();
  }, []);
  let body = null;
  if (coursesFreeLoading) {
    body = <Loading></Loading>;
  } else if (coursesFree.length === 0) {
    alert("THEM COURSE");
  } else {
    body = (
      <Row>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="my-4">Khóa học miễn phí</h1>
          <Link to="/allCourseFree" className="" style={{ fontSize: "18px" }}>
            Xem thêm...
          </Link>
        </div>
        {coursesFree.map((course) => (
          <Col xs={6} md={3} className="mb-5" key={course._id}>
            <SingleCourse course={course} key={course._id} />
          </Col>
        ))}
      </Row>
    );
  }
  return <>{body}</>;
}

export default FreeCourse;
