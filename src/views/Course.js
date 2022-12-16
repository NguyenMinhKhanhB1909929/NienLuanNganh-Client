import React from "react";
import { Container } from "react-bootstrap";

import CourseDetails from "./course/CourseDetails";
import NavbarMenu from "../components/layout/NavbarMenu";
import Footer from "../components/layout/Footer";
import LeanCourse from "./course/LeanCourse";
import CourseCategories from "./course/CourseCategories";

function Course({ courseRoute }) {
  let body = (
    <>
      {courseRoute === "details" && <CourseDetails />}
      {courseRoute === "learn" && <LeanCourse />}
      {courseRoute === "design" && <CourseCategories title={courseRoute} />}
    </>
  );
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <Container className="my-5">{body}</Container>

      <Footer></Footer>
    </>
  );
}

export default Course;
