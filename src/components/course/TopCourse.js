import React, { useContext, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import SingleCourse from "./SingleCourse";
import { CourseContext } from "../../contexts/CourseContext";
import Loading from "../layout/Loading";

function TopCourse() {
  const {
    courseState: { coursesLoading, courses },
    getCourse,
  } = useContext(CourseContext);

  useEffect(() => {
    getCourse();
  }, []);
  let body = null;

  if (coursesLoading) {
    body = <Loading></Loading>;
  } else if (courses.length === 0) {
    alert("THEM COURSE");
  } else {
    body = (
      <Row>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="my-4">Khóa học bán chạy</h1>
          <Link to="/allCourseBuy" className="" style={{ fontSize: "18px" }}>
            Xem thêm...
          </Link>
        </div>

        {courses.map((course) => (
          <Col xs={6} md={3} className="mb-5" key={course._id}>
            <SingleCourse course={course} key={course._id} />
          </Col>
        ))}
      </Row>
    );
  }
  return <>{body}</>;
}

export default TopCourse;
