import { createContext, useReducer } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { apiUrl } from "./constants";
import { lessonReducer } from "../reducers/lessonReducer";

export const LessonContext = createContext();

const LessonContextProvider = ({ children }) => {
  const [lessonState, dispatch] = useReducer(lessonReducer, {
    lessons: [],
    lessonsFindLoading: true,
    lesson: [],
    lessonFindLoading: true,
  });

  // GET Lesson by Id
  const getLessonById = async (LessonId) => {
    try {
      const response = await axios.get(`${apiUrl}/lesson/${LessonId}`);
      if (response.data.success) {
        dispatch({
          type: "GET_LESSON_BY_ID_SUCCESS",
          payload: response.data.lessons,
        });
      }
    } catch (error) {
      console.log("error get course by id");
    }
  };

  const getLessonByIdx = async (LessonId) => {
    try {
      const response = await axios.get(`${apiUrl}/lesson/lessonId/${LessonId}`);
      if (response.data.success) {
        dispatch({
          type: "GET_LESSON_BY_ID_OK",
          payload: response.data.lesson,
        });
      }
    } catch (error) {
      console.log("error get course by id");
    }
  };

  // addCourse
  const addLesson = async (addLessonForm) => {
    try {
      const response = await axios.post(`${apiUrl}/lesson`, addLessonForm);
      console.log(response.data.course);
      if (response.data.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log("LOI THEM chapter");
    }
  };

  // Edit Course

  // Deleted Course
  const deleteLesson = async (lessonId, chapterId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/lesson/${lessonId}/${chapterId}`
      );
      if (response.data.success) {
        dispatch({
          type: "DELETE_LESSON",
          payload: lessonId,
        });
      }
    } catch (error) {
      console.log("LOI XOA ");
    }
  };

  const courseContextData = {
    lessonState,

    addLesson,
    deleteLesson,

    getLessonById,
    getLessonByIdx,
  };
  return (
    <LessonContext.Provider value={courseContextData}>
      {children}
    </LessonContext.Provider>
  );
};

export default LessonContextProvider;
