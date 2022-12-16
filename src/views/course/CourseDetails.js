import React, { useContext, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import DetailsContentCourse from "../../components/course/DetailsContentCourse";
import DetailsLeft from "../../components/course/DetailsLeft";
import DetailsRight from "../../components/course/DetailsRight";
import { CourseContext } from "../../contexts/CourseContext";
import { ChapterContext } from "../../contexts/ChapterContext";
import { AuthContext } from "../../contexts/AuthContext";

function CourseDetails() {
  let { id } = useParams();
  let body = null;
  const {
    authState: { user, isAuthenticated },
    loadUser,
  } = useContext(AuthContext);
  const {
    getChapterById,
    chapterState: { chaptersFindLoading, chapters },
  } = useContext(ChapterContext);
  const {
    getCourseById,
    courseState: { course, courseFindLoading },
  } = useContext(CourseContext);
  useEffect(() => {
    getCourseById(id);
    getChapterById(id);
    loadUser();
  }, [id]);
  let myCourses = [];
  if (isAuthenticated) {
    myCourses = user.myCourses;
  }
  if (courseFindLoading || chaptersFindLoading) {
    console.log(chaptersFindLoading);
  } else {
    body = (
      <>
        <Col sm={8}>
          <DetailsLeft course={course[0]}></DetailsLeft>
          <DetailsContentCourse
            course={course[0]}
            chapters={chapters}
          ></DetailsContentCourse>
        </Col>
        <Col sm={4}>
          <DetailsRight
            course={course[0]}
            id={id}
            chapters={chapters}
            myCourses={myCourses}
          ></DetailsRight>
        </Col>
      </>
    );
  }
  return (
    <>
      <Row>{body}</Row>
    </>
  );
}

export default CourseDetails;
