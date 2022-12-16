import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import { CourseContext } from "../../contexts/CourseContext";

function AddNewCourse() {
  const history = useHistory();
  const { addCourse } = useContext(CourseContext);
  const [file, setFile] = useState();
  const [course, setCourse] = useState({
    title: "",
    cost: 0,
    desc: "",
  });

  const { title, cost, desc } = course;

  const onChangeCourse = (event) =>
    setCourse({ ...course, [event.target.name]: event.target.value });
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const add = async (event) => {
    event.preventDefault();
    try {
      await addCourse(course);
      setCourse({ title: "", cost: 0, desc: "" });
      history.push("/courses");
    } catch (error) {
      console.log("Loi them course");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:5000/api/course/";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("cost", cost);
    formData.append("desc", desc);

    const response = await axios.post(url, formData);
    if (response.data.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Create Courses successfully",
        showConfirmButton: false,
        timer: 1000,
      });
      history.push("/courses");
    }
  };

  const onCancel = (event) => {
    event.preventDefault();
    setCourse({ title: "", cost: 0, desc: "" });
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "130px" }}
      >
        <h1 className="">Create Course</h1>
      </div>
      <Form onSubmit={handleSubmit}>
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
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="file" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Cost:</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            name="cost"
            onChange={onChangeCourse}
            value={cost}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="desc"
            onChange={onChangeCourse}
            value={desc}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="me-3 ms-3 btn-lg" type="submit">
            Create Course
          </Button>
          <Button
            className="me-3 ms-3 btn-lg"
            type="reset"
            variant="danger"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );
}

export default AddNewCourse;
