import React from "react";
import { Accordion } from "react-bootstrap";

import Chapter from "../chapter/Chapter";

function DetailsContentCourse({ course, chapters }) {
  let id = course._id;
  let body = (
    <>
      {chapters.map((chapter, index) => (
        <Chapter chapter={chapter} index={index} key={index}></Chapter>
      ))}
    </>
  );

  return (
    <>
      <h2>Bạn sẽ học những gì</h2>
      <h6>
        <span>{course.lessons.length} chapter</span>
        <span className="mx-5">12 lesson</span>
      </h6>
      <Accordion defaultActiveKey="0" alwaysOpen>
        {body}
      </Accordion>
    </>
  );
}

export default DetailsContentCourse;
