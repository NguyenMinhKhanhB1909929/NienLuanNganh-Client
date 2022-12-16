import React from "react";

function CourseCategories({ title }) {
  let categories;
  switch (title) {
    case "design":
      categories = "Design";
      break;

    default:
      break;
  }
  return (
    <>
      <div>
        <h1>{categories}</h1>
      </div>
    </>
  );
}

export default CourseCategories;
