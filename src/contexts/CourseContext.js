import { createContext, useReducer } from "react";
import axios from "axios";

import { apiUrl } from "./constants";
import { courseReducer } from "../reducers/courseReducer";
import Swal from "sweetalert2";

export const CourseContext = createContext();

const CourseContextProvider = ({ children }) => {
  const [courseState, dispatch] = useReducer(courseReducer, {
    course: null,
    courses: [],
    allCourses: [],
    coursesLoading: true,
    courseFindLoading: true,
    coursesFreeLoading: true,
    allCoursesLoading: true,
    coursesFree: [],
    myCoursesLoading: true,
    myCourses: [],
    searchLoading: true,
    courseSearch: [],
    keyWord: "",
    courseLength: 0,
  });

  // GET all Course
  const getAllCourse = async (queryString) => {
    try {
      const response = await axios.get(`${apiUrl}/course/${queryString}`);
      if (response.data.success) {
        dispatch({
          type: "ALL_COURSE_LOADING_SUCCESS",
          payload: {
            allCourses: response.data.course,
            courseLength: response.data.courseLength,
          },
        });
      }
    } catch (error) {
      console.log("LOI");
    }
  };

  const getMyCourses = async () => {
    try {
      const response = await axios.get(`${apiUrl}/course/myCourse`);
      if (response.data.success) {
        dispatch({
          type: "MY_COURSE_LOADING_SUCCESS",
          payload: response.data.myCourses,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // GET Course buy
  const getCourse = async (isAll) => {
    let all = isAll || "";
    try {
      const response = await axios.get(`${apiUrl}/course/buy?isAll=${all}`);
      if (response.data.success) {
        dispatch({
          type: "COURSE_LOADING_SUCCESS",
          payload: response.data.course,
        });
      }
    } catch (error) {
      console.log("LOI");
    }
  };

  // GET Course by Id
  const getCourseById = async (courseId) => {
    if (courseId === "x")
      return dispatch({
        type: "GET_COURSE_BY_ID_FAIL",
        payload: null,
      });
    try {
      const response = await axios.get(`${apiUrl}/course/${courseId}`);
      if (response.data.success) {
        dispatch({
          type: "GET_COURSE_BY_ID_SUCCESS",
          payload: response.data.course,
        });
      }
    } catch (error) {
      console.log("error get course by id");
    }
  };

  // GET Course Free
  const getCourseFree = async () => {
    try {
      const response = await axios.get(`${apiUrl}/course/free`);
      if (response.data.success) {
        dispatch({
          type: "GET_COURSE_FREE",
          payload: response.data.course,
        });
      }
    } catch (error) {
      console.log("error get course free");
    }
  };

  const getCourseSearch = async (keyWord) => {
    try {
      const response = await axios.get(`${apiUrl}/course/search/${keyWord}`);
      if (response.data.success) {
        dispatch({
          type: "SEARCH_COURSE_LOADING_SUCCESS",
          payload: {
            courseSearch: response.data.courseFind,
            keyWord: response.data.keyWord,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // addCourse
  const addCourse = async (addCourseForm) => {
    try {
      const response = await axios.post(`${apiUrl}/course`, addCourseForm);

      if (response.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Create new course successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log("LOI THEM COURSE");
    }
  };

  // Edit Course
  const EditCourse = async (editCourseForm, courseId) => {
    try {
      const response = await axios.put(
        `${apiUrl}/course/${courseId}`,
        editCourseForm
      );
      console.log(response);
      if (response.data.success) {
        console.log("Sua THANH CONG context");
        console.log(response.data.message);
      }
    } catch (error) {
      console.log("LOI SUA o context");
    }
  };
  // Deleted Course
  const deleteCourse = async (courseId) => {
    try {
      const response = await axios.delete(`${apiUrl}/course/${courseId}`);
      if (response.data.success) {
        dispatch({
          type: "DELETE_COURSE",
          payload: courseId,
        });
      }
    } catch (error) {
      console.log("LOI XOA ");
    }
  };

  const buyCourse = async (formBuy) => {
    try {
      const response = await axios.post("http://localhost:5000/pay", formBuy);
      if (response.data) {
        window.location.assign(response.data.link);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const recieveMoney = async (cost, queryString) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/success/${cost}${queryString}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const courseContextData = {
    courseState,
    getCourse,
    addCourse,
    deleteCourse,
    EditCourse,
    getCourseById,
    getCourseFree,
    getAllCourse,
    buyCourse,
    recieveMoney,
    getMyCourses,
    getCourseSearch,
  };
  return (
    <CourseContext.Provider value={courseContextData}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
