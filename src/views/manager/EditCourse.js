import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CourseContext } from "../../contexts/CourseContext";
import EditNewCourse from "../../components/course/EditNewCourse ";

function EditCourse() {
  const { courseState, getCourseById } = useContext(CourseContext);
  let { id } = useParams();
  useEffect(() => {
    getCourseById(id);
    return () => getCourseById("x");
  }, []);

  let body = null;
  if (courseState.courseFindLoading) {
    <h1>LOADING</h1>;
  } else if (courseState.course) {
    const courseEdit = courseState.course[0];
    console.log(courseEdit);
    body = (
      <>
        <EditNewCourse courseFind={courseEdit} />
      </>
    );
  }
  return <div>{body}</div>;
}

export default EditCourse;
