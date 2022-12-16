import React, { useContext, useEffect } from "react";
import { Accordion, useAccordionButton, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChapterContext } from "../../contexts/ChapterContext";
import Swal from "sweetalert2";

import Lesson from "./Lesson";

function Sections({ chapter, index, id }) {
  const { deleteChapter } = useContext(ChapterContext);
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
  const onDelete = async (chapterId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteChapter(chapterId, id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  let lessons = chapter.videos;
  let lessonView = (
    <Accordion.Collapse eventKey={index}>
      <Card.Body>Null</Card.Body>
    </Accordion.Collapse>
  );

  if (lessons.length !== 0) {
    lessonView = lessons.map((lesson, i) => (
      <Lesson
        index={index}
        key={i}
        lesson={lesson}
        chapter={chapter}
        manager={true}
      ></Lesson>
    ));
  }

  return (
    <Card className="mb-2">
      <Card.Header className="d-flex justify-content-between p-0">
        <CustomToggle eventKey={index}>{chapter.title}</CustomToggle>
        <div className=" d-flex align-items-center me-5 ">
          <Link to={`/course/id=${id}/addVideo/${chapter._id}`}>
            <button className="btn btn-primary border-0">Add</button>
          </Link>
          <button className="btn btn-success border-0 mx-3">Edit</button>
          <button
            onClick={onDelete.bind(this, chapter._id)}
            className="btn btn-danger border-0"
          >
            Delete
          </button>
        </div>
      </Card.Header>
      {lessonView}
    </Card>
  );
}

export default Sections;
