import React from "react";
import { useContext } from "react";
import { Card, Accordion } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { LessonContext } from "../../contexts/LessonContext";

function Lesson({ index, lesson, chapter, learn, manager }) {
  let history = useHistory();
  const { deleteLesson } = useContext(LessonContext);
  let { id } = useParams();
  let isLearn = learn || false;
  let isManager = manager || false;

  const onDelete = async (id) => {
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
          deleteLesson(id, chapter._id);
          Swal.fire("Deleted!", "Your lesson has been deleted.", "success");
          // history.push(`/course/id=${id}/chapters`);
        }
      });
    } catch (error) {
      console.log("loi");
    }
  };

  let body = (
    <button className="w-100 p-2 px-4 text-start border-0">
      {lesson.title}
    </button>
  );
  if (isLearn) {
    body = (
      <Link to={`/learn/${id}/${lesson._id}`}>
        <button className="w-100 p-2 px-4 text-start border-0">
          {lesson.title}
        </button>
      </Link>
    );
  }
  if (isManager) {
    body = (
      <div className="w-100 p-2 px-4 text-start border-0 d-flex justify-content-between">
        <span>{lesson.title}</span>
        <div className="">
          <button className="btn btn-success border-0">edit</button>
          <button
            className="btn btn-danger border-0 mx-3"
            onClick={onDelete.bind(this, lesson._id)}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
  return (
    <Accordion.Collapse eventKey={index}>
      <Card.Body className="p-0 border-top border-bottom ">{body}</Card.Body>
    </Accordion.Collapse>
  );
}

export default Lesson;
