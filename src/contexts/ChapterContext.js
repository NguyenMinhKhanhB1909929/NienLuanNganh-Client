import { createContext, useReducer } from "react";
import axios from "axios";

import { apiUrl } from "./constants";
import { chapterReducer } from "../reducers/chapterReducer";
import Swal from "sweetalert2";

export const ChapterContext = createContext();

const ChapterContextProvider = ({ children }) => {
  const [chapterState, dispatch] = useReducer(chapterReducer, {
    chapters: [],
    chaptersFindLoading: true,
  });

  // GET all Course
  const getAllChapter = async () => {
    try {
      const response = await axios.get(`${apiUrl}/chapter/`);
      if (response.data.success) {
        dispatch({
          type: "ALL_COURSE_LOADING_SUCCESS",
          payload: response.data.course,
        });
      }
    } catch (error) {
      console.log("LOI");
    }
  };

  // GET Course by Id
  const getChapterById = async (chapterId) => {
    try {
      const response = await axios.get(`${apiUrl}/chapter/${chapterId}`);
      if (response.data.success) {
        dispatch({
          type: "GET_CHAPTER_BY_ID_SUCCESS",
          payload: response.data.chapters,
        });
      }
    } catch (error) {
      console.log("error get course by id");
    }
  };

  // addCourse
  const addChapter = async (addChapterForm) => {
    try {
      const response = await axios.post(`${apiUrl}/chapter`, addChapterForm);
      console.log(response.data.course);
      if (response.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Create chapter successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log("LOI THEM chapter");
    }
  };

  // deletedChapter
  const deleteChapter = async (ChapterId, id) => {
    try {
      console.log(id, ChapterId);
      const response = await axios.delete(
        `${apiUrl}/chapter/${ChapterId}/${id}`
      );
      if (response.data.success) {
        console.log(123456);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const courseContextData = {
    chapterState,

    addChapter,

    getChapterById,

    getAllChapter,
    deleteChapter,
  };
  return (
    <ChapterContext.Provider value={courseContextData}>
      {children}
    </ChapterContext.Provider>
  );
};

export default ChapterContextProvider;
