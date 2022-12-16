import React, { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { Form } from "react-bootstrap";

function Test() {
  const [file, setFile] = useState();
  const [course, setCourse] = useState({
    title: "",
    desc: "",
    cost: "",
  });
  const { title, desc, cost } = course;
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const onChangeCourse = (event) =>
    setCourse({ ...course, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:5000/api/course/uploadsImg";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("desc", desc);

    const response = await axios.post(url, formData);
    console.log(response);
  };
  // const pay = async (event) => {
  //   event.preventDefault();

  //   const response = await axios.post("http://localhost:5000/pay", course);

  //   if (response.data.link) {
  //     window.location.assign(response.data.link);
  //   }
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" onChange={handleChange} />
        </Form.Group>
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

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            name="desc"
            onChange={onChangeCourse}
            value={desc}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>COST:</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            name="cost"
            onChange={onChangeCourse}
            value={cost}
          />
        </Form.Group>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Test;
