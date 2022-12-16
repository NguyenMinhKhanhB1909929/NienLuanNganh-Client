import React, { useContext, useEffect } from "react";
import SingleCourse from "../../components/course/SingleCourse";
import Loading from "../../components/layout/Loading";
import { CourseContext } from "../../contexts/CourseContext";
import { Col, Row } from "react-bootstrap";
import PaginationForm from "../../components/layout/PaginationForm";

function AllCourseFree() {
  const {
    getCourseFree,
    courseState: { coursesFree, coursesFreeLoading },
  } = useContext(CourseContext);
  useEffect(() => {
    getCourseFree();
  }, []);
  let body = null;
  if (coursesFreeLoading) {
    body = <Loading></Loading>;
  } else {
    body = (
      <>
        <h2 className="my-3">Tất cả khóa học miễn phí</h2>
        {coursesFree.map((course, index) => (
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

export default AllCourseFree;
