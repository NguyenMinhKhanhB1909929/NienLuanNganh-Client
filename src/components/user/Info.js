import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Form, Button, Container, Row, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Info() {
  const {
    authState: { user, isAuthenticated },
    loadUser,
    changeInfo,
  } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    username: user.username,
    fullname: user.fullname,
    phone: user.phone,
    email: user.email,
  });
  const { username, fullname, phone, email } = userInfo;
  useEffect(() => loadUser, [user]);
  const onChangeInfoForm = (event) =>
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

  const onChange = async (event) => {
    event.preventDefault();
    try {
      await changeInfo(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={onChange}>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="fullname"
          value={fullname}
          onChange={onChangeInfoForm}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail2">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onChangeInfoForm}
          disabled
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail3">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="email"
          value={email}
          onChange={onChangeInfoForm}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail4">
        <Form.Label>Phone:</Form.Label>
        <Form.Control
          type="text"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={onChangeInfoForm}
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
                Change
              </Button>
              <Link to="/">
                <Button variant="success">No Account ?</Button>
              </Link>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default Info;
