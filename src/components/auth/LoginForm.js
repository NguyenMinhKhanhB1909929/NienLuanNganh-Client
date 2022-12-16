import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, Stack, Row, Col, Container, Form } from "react-bootstrap";

function LoginForm() {
  const { loginUser } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        console.log(loginData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={login}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onChangeLoginForm}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChangeLoginForm}
        />
      </Form.Group>

      <Container>
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
              <Link to="/register">
                <Button variant="success">No Account ?</Button>
              </Link>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default LoginForm;
