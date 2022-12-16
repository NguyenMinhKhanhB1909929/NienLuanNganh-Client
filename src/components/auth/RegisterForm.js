import React from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button, Stack, Container } from "react-bootstrap";

import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function RegisterForm() {
  const { registerUser } = useContext(AuthContext);

  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    rePassword: "",
    fullname: "",
  });

  const { username, password, rePassword, fullname } = registerForm;

  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };
  const register = async (event) => {
    event.preventDefault();
    try {
      await registerUser(registerForm);
    } catch (error) {
      console.log("LOI");
    }
  };
  return (
    <Form onSubmit={register}>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="fullname"
          value={fullname}
          onChange={onChangeRegisterForm}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail2">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onChangeRegisterForm}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChangeRegisterForm}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Confirm Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="rePassword"
          value={rePassword}
          onChange={onChangeRegisterForm}
        />
      </Form.Group>

      <Row>
        <Col>
          <Stack
            direction="horizontal"
            gap={3}
            className="d-flex justify-content-center"
          >
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Link to="/login">
              <Button variant="success">Have Account ?</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
    </Form>
  );
}

export default RegisterForm;
