import React from "react";

import AddNewCourse from "../components/course/AddNewCourse";
import { Container, Row, Col } from "react-bootstrap";

import NavbarMenu from "../components/layout/NavbarMenu";
import Footer from "../components/layout/Footer";
import EditCourse from "./manager/EditCourse";
import ManagerCourses from "./manager/ManagerCourses";
import ManagerMember from "../components/course/ManagerMember";
import AddLesson from "../components/lesson/AddLesson";
import Sections from "../components/lesson/Sections";
import Chapters from "../views/manager/ChapterView";
import AddLessonView from "./manager/AddLessonView";
import NavbarAdmin from "../components/layout/NavbarAdmin";

function Manager({ managerRoute }) {
  let body = (
    <>
      {managerRoute === "add" && <AddNewCourse />}
      {managerRoute === "edit" && <EditCourse />}
      {managerRoute === "courses" && <ManagerCourses />}
      {managerRoute === "member" && <ManagerMember />}
      {managerRoute === "addChapter" && <AddLesson />}
      {managerRoute === "sections" && <Sections />}
      {managerRoute === "chapters" && <Chapters />}
      {managerRoute === "addLesson" && <AddLessonView />}
    </>
  );
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <Container>
        <Row>
          <Col sm={3}>
            <NavbarAdmin isActive={managerRoute}></NavbarAdmin>
          </Col>
          <Col sm={9}>{body}</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Manager;
