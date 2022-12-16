import React from "react";
import { Container } from "react-bootstrap";

import NavbarMenu from "../components/layout/NavbarMenu";
import Footer from "../components/layout/Footer";
import CarouselView from "../components/layout/CarouselView";
import ContentHome from "./dashboard/ContentHome";
import MyCourse from "./dashboard/MyCourse";
import PaySuccess from "./dashboard/PaySuccess";
import PayFail from "./dashboard/PayFail";
import SearchCourse from "./dashboard/SearchCourse";
import AllCourse from "./dashboard/AllCourse";
import AllCourseBuy from "./dashboard/AllCourseBuy";
import AllCourseFree from "./dashboard/AllCourseFree";

function Dashboard({ homeRoute }) {
  let body = (
    <>
      {homeRoute === "home" && <ContentHome />}
      {homeRoute === "myCourses" && <MyCourse />}
      {homeRoute === "paySuccess" && <PaySuccess />}
      {homeRoute === "payFail" && <PayFail />}
      {homeRoute === "search" && <SearchCourse />}
      {homeRoute === "all" && <AllCourse />}
      {homeRoute === "allCourseBuy" && <AllCourseBuy />}
      {homeRoute === "allCourseFree" && <AllCourseFree />}
    </>
  );
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <Container>
        <CarouselView></CarouselView>
        {body}
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
