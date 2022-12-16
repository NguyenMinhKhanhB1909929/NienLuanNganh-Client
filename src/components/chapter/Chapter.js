import React from "react";
import { Accordion, useAccordionButton, Card } from "react-bootstrap";

import Lesson from "../lesson/Lesson";

function Chapter({ chapter, index, learn }) {
  let isLearn = learn || false;
  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
      <button
        type="button"
        className="border-0 flex-grow-1 d-flex p-3"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  };
  let lessons = chapter.videos;
  let lessonView = (
    <Accordion.Collapse eventKey={index}>
      <Card.Body></Card.Body>
    </Accordion.Collapse>
  );

  if (lessons.length !== 0) {
    lessonView = lessons.map((lesson, i) => (
      <Lesson index={index} key={i} lesson={lesson} learn={isLearn}></Lesson>
    ));
  }

  return (
    <Card className="my-2">
      <Card.Header className="d-flex justify-content-between p-0">
        <CustomToggle eventKey={index}>{chapter.title}</CustomToggle>
        <div className=" d-flex align-items-center me-5">
          <span>{lessons.length} lessons</span>
        </div>
      </Card.Header>
      {lessonView}
    </Card>
  );
}

export default Chapter;
