import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarMenu from "../components/layout/NavbarMenu";
import Footer from "../components/layout/Footer";

import ChangePassword from "./userManager/ChangePassword";
import ChangeInfo from "./userManager/ChangeInfo";
import NavbarUser from "../components/layout/NavbarUser";
function UserManager({ userRoute }) {
  let body = (
    <>
      {userRoute === "changePassword" && <ChangePassword />}
      {userRoute === "changeInfo" && <ChangeInfo />}
    </>
  );
  return (
    <>
      <NavbarMenu></NavbarMenu>

      <Container>
        <Row>
          <Col sm={3}>
            <NavbarUser isRoute={userRoute}></NavbarUser>
          </Col>
          <Col sm={9}>{body}</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default UserManager;
