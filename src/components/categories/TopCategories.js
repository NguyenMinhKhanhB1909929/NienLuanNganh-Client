import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import WrapCategories from "./WrapCategories";
function TopCategories() {
  return (
    <Row>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-4">Categories</h1>
        <Link to="/allCourse" className="" style={{ fontSize: "18px" }}>
          Xem tất cả
        </Link>
      </div>
      <WrapCategories></WrapCategories>
    </Row>
  );
}

export default TopCategories;
