import React from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

function PaginationForm({ pageItem, pageSize }) {
  let numberPage = Math.ceil(pageItem / pageSize) || 3;
  let queryString = window.location.search || "?page=1";
  let body = (
    <Pagination.Item className={`${queryString == "?page=1" ? "active" : ""}`}>
      <Link
        to="?page=1"
        className={`${queryString == "?page=1" ? "text-white" : ""} p-2`}
      >
        {1}
      </Link>
    </Pagination.Item>
  );
  if (numberPage > 1) {
    body = (
      <>
        {[...Array(numberPage)].map((x, i) => (
          <Pagination.Item
            key={i}
            className={`${queryString == `?page=${i + 1}` ? "active" : ""}`}
          >
            <Link
              to={`?page=${i + 1}`}
              className={`${
                queryString == `?page=${i + 1}` ? "text-white" : ""
              } p-2`}
            >
              {i + 1}
            </Link>
          </Pagination.Item>
        ))}
      </>
    );
  }

  return (
    <Pagination className="d-flex justify-content-center mt-3">
      <Pagination.First />
      <Pagination.Prev />

      {body}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationForm;
