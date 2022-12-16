import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

import { ChapterContext } from "../../contexts/ChapterContext";

function AddLesson() {
  let { id } = useParams();
  let history = useHistory();
  const { addChapter } = useContext(ChapterContext);
  const [chapter, setChapter] = useState({
    title: "",
    chapterId: id,
  });
  const { title, chapterId } = chapter;

  const onChangeCourse = (event) =>
    setChapter({ ...chapter, [event.target.name]: event.target.value });
  const add = async (event) => {
    event.preventDefault();
    try {
      await addChapter(chapter);
      setChapter({ title: "" });
      history.push(`/course/id=${id}/chapters`);
    } catch (error) {
      console.log("Loi them course");
    }
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "130px" }}
      >
        <h1>Create Chapter</h1>
      </div>
      <Form onSubmit={add}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            name="title"
            onChange={onChangeCourse}
            value={title}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="me-3 ms-3 btn-lg" type="submit">
            Create Chapter
          </Button>
          <Button
            className="me-3 ms-3 btn-lg"
            type="reset"
            variant="danger"
            // onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );
}

export default AddLesson;
