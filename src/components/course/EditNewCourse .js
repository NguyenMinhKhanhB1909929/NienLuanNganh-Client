import { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { CourseContext } from "../../contexts/CourseContext";

function EditNewCourse({ courseFind }) {
  const { EditCourse } = useContext(CourseContext);
  const [course, setCourse] = useState({
    title: courseFind.title,
    img: courseFind.img,
    link: courseFind.link,
    cost: courseFind.cost,
    desc: courseFind.desc,
  });
  const { title, img, link, cost, desc } = course;

  const onChangeCourse = (event) =>
    setCourse({ ...course, [event.target.name]: event.target.value });

  const edit = async (event) => {
    event.preventDefault();
    try {
      await EditCourse(course, courseFind._id);
    } catch (error) {
      console.log("LOI EDIT O COMPONENT");
      console.log(error);
    }
  };

  const onCancel = (event) => {
    event.preventDefault();
    console.log("da huy");
    setCourse({
      title: courseFind.title,
      img: courseFind.img,
      link: courseFind.link,
      cost: courseFind.cost,
      desc: courseFind.desc,
    });
  };

  return (
    <>
      <h1 className="text-center">Edit Course</h1>
      <Form onSubmit={edit}>
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
          <Form.Control
            type="text"
            name="img"
            onChange={onChangeCourse}
            value={img}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Link:</Form.Label>
          <Form.Control
            type="text"
            placeholder="name@example.com"
            name="link"
            onChange={onChangeCourse}
            value={link}
          />
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
            Edit
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

export default EditNewCourse;
