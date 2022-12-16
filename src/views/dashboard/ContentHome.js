import React from "react";

import TopCourse from "../../components/course/TopCourse";
import FreeCourse from "../../components/course/FreeCourse";
import TopCategories from "../../components/categories/TopCategories";

function ContentHome() {
  return (
    <>
      <TopCourse></TopCourse>
      <FreeCourse></FreeCourse>
      <TopCategories></TopCategories>
    </>
  );
}

export default ContentHome;
