import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function ChangePassword() {
  const queryString = window.location.search;
  console.log(queryString);
  const {
    authState: { user, isAuthenticated },
    changePassword,
  } = useContext(AuthContext);
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    reNewPassword: "",
  });
  const { oldPassword, newPassword, reNewPassword } = password;

  const onChangePasswordForm = (event) =>
    setPassword({ ...password, [event.target.name]: event.target.value });

  const onChangePassword = async (event) => {
    event.preventDefault();
    try {
      await changePassword(password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={{ height: "130px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <h1>Change Info</h1>
      </div>
      <Form onSubmit={onChangePassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Old password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Username"
            name="oldPassword"
            value={oldPassword}
            onChange={onChangePasswordForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Username"
            name="newPassword"
            value={newPassword}
            onChange={onChangePasswordForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Retype new password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Username"
            name="reNewPassword"
            value={reNewPassword}
            onChange={onChangePasswordForm}
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
                <Link to="/changePassword">
                  <Button variant="success">Cancel</Button>
                </Link>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}

export default ChangePassword;
