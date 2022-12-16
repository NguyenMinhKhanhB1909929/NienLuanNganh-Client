export const courseReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "COURSE_LOADING_SUCCESS":
      return {
        ...state,
        coursesLoading: false,
        courses: payload,
      };
    case "MY_COURSE_LOADING_SUCCESS":
      return {
        ...state,
        myCoursesLoading: false,
        myCourses: payload,
      };

    case "SEARCH_COURSE_LOADING_SUCCESS":
      return {
        ...state,
        searchLoading: false,
        courseSearch: payload.courseSearch,
        keyWord: payload.keyWord,
      };
    case "ALL_COURSE_LOADING_SUCCESS":
      return {
        ...state,
        allCoursesLoading: false,
        allCourses: payload.allCourses,
        courseLength: payload.courseLength,
      };
    case "GET_COURSE_BY_ID_SUCCESS":
      return {
        ...state,
        course: payload,
        courseFindLoading: false,
      };
    case "GET_COURSE_BY_ID_FAIL":
      return {
        ...state,
        course: payload,
        courseFindLoading: true,
      };
    case "GET_COURSE_FREE":
      return {
        ...state,
        coursesFree: payload,
        coursesFreeLoading: false,
      };
    case "DELETE_COURSE":
      return {
        ...state,
        courses: state.courses.filter((course) => course._id !== payload),
      };
    default:
      return state;
  }
};
