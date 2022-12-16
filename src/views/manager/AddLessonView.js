import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import FormData from "form-data";
import axios from "axios";
import Swal from "sweetalert2";

import { LessonContext } from "../../contexts/LessonContext";

function AddLessonView() {
  let { id, cid } = useParams();
  let history = useHistory();
  const [file, setFile] = useState();
  const { addLesson } = useContext(LessonContext);
  const [lesson, setLesson] = useState({
    title: "",
    chapterId: cid,
  });
  const { title, chapterId } = lesson;
  const onChangeCourse = (event) =>
    setLesson({ ...lesson, [event.target.name]: event.target.value });
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:5000/api/lesson/";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("chapterId", chapterId);
    const response = await axios.post(url, formData);
    if (response.data.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Create lesson successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push(`/course/id=${id}/chapters`);
    }
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "130px" }}
      >
        <h1>Create Lesson</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title lesson:</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            name="title"
            onChange={onChangeCourse}
            value={title}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Video:</Form.Label>
          <Form.Control type="file" onChange={handleChange} />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="me-3 ms-3 btn-lg" type="submit">
            Create Lesson
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

export default AddLessonView;
