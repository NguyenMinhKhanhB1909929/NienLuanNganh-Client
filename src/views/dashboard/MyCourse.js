import React, { useContext } from "react";
import { useEffect } from "react";
import { Row, Spinner, Col } from "react-bootstrap";

import { AuthContext } from "../../contexts/AuthContext";
import { CourseContext } from "../../contexts/CourseContext";
import MultyCourse from "../../components/course/MultyCourse";
import Loading from "../../components/layout/Loading";
import SingleMyCourse from "../../components/course/SingleMyCourse";

function MyCourse() {
  const {
    authState: { user, isAuthenticated },
    loadUser,
  } = useContext(AuthContext);
  const { getCourseById, getMyCourses, courseState } =
    useContext(CourseContext);
  let body = null;
  useEffect(() => {
    loadUser();
    getMyCourses();
  }, []);
  if (isAuthenticated || !courseState.myCoursesLoading) {
    let myCourses = courseState.myCourses;
    body = (
      <>
        {myCourses.map((course, index) => (
          <Col xs={6} md={3} className="mb-5" key={index}>
            <SingleMyCourse course={course}></SingleMyCourse>
          </Col>
        ))}
      </>
    );
  } else {
    body = (
      <div>
        <span>
          Vui long <a href="">Dang nhap</a> de xem khoa hoc cua toi
        </span>
      </div>
    );
  }
  return (
    <Row>
      <h1>My course</h1>
      {body}
    </Row>
  );
}

export default MyCourse;
