import React from "react";
import { Row, Col } from "react-bootstrap";

function DetailsLeft({ course }) {
  return (
    <div className="mb-4">
      <h1 style={{ fontSize: "42px" }}>{course.title}</h1>
      <h5 className="my-3 me-3" style={{ fontWeight: "lighter" }}>
        {course.desc}
      </h5>
      <div>
        <h4 style={{ fontSize: "28px" }} className="my-3 mt-4">
          Bạn sẽ học được gì?
        </h4>
        <Row>
          <Col
            sm={6}
            style={{ fontWeight: "lighter", fontSize: "18px" }}
            className="my-1"
          >
            <i className="fa-solid fa-check me-2" style={{ color: "red" }}></i>
            Biết cách xây dựng giao diện web với HTML, CSS
          </Col>
          <Col
            sm={6}
            style={{ fontWeight: "lighter", fontSize: "18px" }}
            className="my-1"
          >
            <i className="fa-solid fa-check me-2" style={{ color: "red" }}></i>
            Biết cách đặt tên class CSS theo chuẩn BEM
          </Col>
          <Col
            sm={6}
            style={{ fontWeight: "lighter", fontSize: "18px" }}
            className="my-1"
          >
            <i className="fa-solid fa-check me-2" style={{ color: "red" }}></i>
            Làm chủ Flexbox khi dựng bố cục website
          </Col>
          <Col
            sm={6}
            style={{ fontWeight: "lighter", fontSize: "18px" }}
            className="my-1"
          >
            <i className="fa-solid fa-check me-2" style={{ color: "red" }}></i>
            Biết cách tự tạo động lực cho bản thân
          </Col>
        </Row>
      </div>
      <h5 className="my-3" style={{ fontSize: "18px" }}>
        <button className="border-0 card--hover text-dark px-3">
          Bestseller
        </button>
        <span className="mx-4">
          <i class="fa-solid fa-star" style={{ color: "#ffd34b" }}></i>
          <i class="fa-solid fa-star" style={{ color: "#ffd34b" }}></i>
          <i class="fa-solid fa-star" style={{ color: "#ffd34b" }}></i>
          <i class="fa-solid fa-star" style={{ color: "#ffd34b" }}></i>
          <span>(25 ratting)</span>
        </span>
        <span> {course.member} members</span>
      </h5>
      <h5 className="my-4">
        <span>
          <i class="fa-sharp fa-solid fa-user-tie me-2"></i>
          Created by: Admin
        </span>
        <span className="ms-5">
          <i class="fa-solid fa-gear me-2"></i>
          Last updated 12/2022
        </span>
      </h5>
    </div>
  );
}

export default DetailsLeft;
