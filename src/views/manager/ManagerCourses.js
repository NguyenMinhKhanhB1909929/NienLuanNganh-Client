import React, { useEffect } from "react";
import { useContext } from "react";
import { Table, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaginationForm from "../../components/layout/PaginationForm";
import Swal from "sweetalert2";

import { CourseContext } from "../../contexts/CourseContext";

function ManagerCourses() {
  let queryString = "?page=1";
  queryString = window.location.search;
  const {
    getAllCourse,
    courseState: { allCourses, courseLength },
    deleteCourse,
  } = useContext(CourseContext);
  useEffect(() => {
    getAllCourse(queryString);
  }, [queryString]);
  const onDeleted = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteCourse(id);

          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          getAllCourse();
        }
      });
    } catch (error) {
      console.log("Loi xoa o ManagerCourse");
    }
  };

  return (
    <>
      <div className="" style={{ height: "130px" }}>
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="">Manager Member</h1>
        </div>
        <Link className="d-flex justify-content-end" to="/add">
          <Button className="btn-lg my-2 ">Create Course</Button>
        </Link>
      </div>
      <Table striped>
        <thead>
          <tr className="text-center">
            <th>STT</th>
            <th>Title</th>
            <th>Cost</th>
            <th>Member</th>
            <th>Rate</th>
            <th>Chapters</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allCourses.map((course, index) => (
            <tr key={index} className="text-center">
              <td>{index}</td>
              <td>{course.title}</td>
              <td>{course.cost}</td>
              <td>{course.member}</td>
              <td>{course.rate}</td>
              <td>{course.lessons.length}</td>

              <td width="200px" className="text-center">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id="button-tooltip-1">Edit Course</Tooltip>}
                >
                  {({ ...triggerHandler }) => (
                    <Link to={`edit/id=${course._id}`}>
                      <button
                        className="p-2 m-1 hover-text border-0"
                        {...triggerHandler}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                      </button>
                    </Link>
                  )}
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-1">Add new lesson</Tooltip>
                  }
                >
                  {({ ...triggerHandler }) => (
                    <Link
                      to={
                        course.lessons.length === 0
                          ? `course/id=${course._id}/addlesson`
                          : `course/id=${course._id}/chapters`
                      }
                    >
                      <button
                        className="p-2 m-1 hover-text border-0"
                        {...triggerHandler}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-circle-fill text-success"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                      </button>
                    </Link>
                  )}
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-1">Deleted Course</Tooltip>
                  }
                >
                  {({ ...triggerHandler }) => (
                    <button
                      className="p-2 m-1 hover-text border-0"
                      {...triggerHandler}
                      onClick={onDeleted.bind(this, course._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x-circle-fill text-danger"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                      </svg>
                    </button>
                  )}
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationForm pageItem={courseLength} pageSize={5}></PaginationForm>
    </>
  );
}

export default ManagerCourses;
