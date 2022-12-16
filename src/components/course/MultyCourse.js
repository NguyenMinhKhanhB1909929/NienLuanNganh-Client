import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Col } from "react-bootstrap";

import { CourseContext } from "../../contexts/CourseContext";
import SingleMyCourse from "./SingleMyCourse";

function MultyCourse({ courseId, index }) {
  const {
    getCourseById,
    courseState: { course, courseFindLoading },
  } = useContext(CourseContext);
  console.log(courseId);
  useEffect(() => {
    getCourseById(courseId);
  }, []);
  let body = null;
  if (courseFindLoading);
  else {
    body = (
      <Col xs={6} md={3} className="my-5">
        <SingleMyCourse course={course[0]} courseId={courseId} />
      </Col>
    );
  }
  return <>{body}</>;
}

export default MultyCourse;
