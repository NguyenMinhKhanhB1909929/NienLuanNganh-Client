import React from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "../contexts/AuthContext";

function Auth({ authRoute }) {
  const {
    authState: { authLoading, isAuthenticated, user },
  } = useContext(AuthContext);
  let body;

  if (authLoading) body = <div>HELLo</div>;
  else if (isAuthenticated) {
    return <Redirect to="/dashboard"></Redirect>;
  } else
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );
  return (
    <div className="bg-img">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="bg-green mt-5 py-5">
            <h1 className="text-center">
              {authRoute === "login" ? "Login" : "Register"}
            </h1>
            {body}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Auth;
