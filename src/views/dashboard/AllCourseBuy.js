import React, { useContext, useEffect } from "react";
import SingleCourse from "../../components/course/SingleCourse";
import Loading from "../../components/layout/Loading";
import { CourseContext } from "../../contexts/CourseContext";
import { Col, Row } from "react-bootstrap";
import PaginationForm from "../../components/layout/PaginationForm";

function AllCourseBuy() {
  const {
    getCourse,
    courseState: { courses, coursesLoading },
  } = useContext(CourseContext);
  useEffect(() => {
    getCourse(1);
  }, []);
  let body = null;
  if (coursesLoading) {
    body = <Loading></Loading>;
  } else {
    body = (
      <>
        <h2 className="my-3">Tất cả khóa học bán chạy</h2>
        {courses.map((course, index) => (
          <Col key={index} xs={6} md={3} className="mb-5">
            <SingleCourse course={course}></SingleCourse>
          </Col>
        ))}
      </>
    );
  }
  return (
    <div>
      <Row>{body}</Row>
      <PaginationForm></PaginationForm>
    </div>
  );
}

export default AllCourseBuy;
