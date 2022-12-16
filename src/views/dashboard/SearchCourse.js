import React, { useContext, useEffect } from "react";
import SingleCourse from "../../components/course/SingleCourse";
import Loading from "../../components/layout/Loading";
import { CourseContext } from "../../contexts/CourseContext";
import { Col, Row } from "react-bootstrap";

function SearchCourse() {
  let queryString = window.location.search;
  const {
    getCourseSearch,
    courseState: { keyWord, searchLoading, courseSearch },
  } = useContext(CourseContext);
  useEffect(() => {
    getCourseSearch(queryString);
  }, [queryString]);
  let body = null;
  if (searchLoading) {
    body = <Loading></Loading>;
  } else {
    if (courseSearch.length == 0) {
      body = <h1>Không tìm thấy với từ khóa "{keyWord}"</h1>;
    } else {
      body = (
        <>
          <h2 className="my-3">
            Kết quả tìm kiếm của "
            <span className="text-primary">{keyWord}</span>"
          </h2>
          {courseSearch.map((course, index) => (
            <Col key={index} xs={6} md={3} className="mb-5">
              <SingleCourse course={course}></SingleCourse>
            </Col>
          ))}
        </>
      );
    }
  }
  return (
    <div>
      <Row>{body}</Row>
    </div>
  );
}

export default SearchCourse;
