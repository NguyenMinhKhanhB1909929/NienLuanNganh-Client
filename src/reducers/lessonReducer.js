export const lessonReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_LESSON_BY_ID_SUCCESS":
      return {
        ...state,
        lessons: payload,
        lessonsFindLoading: false,
      };
    case "GET_LESSON_BY_ID_OK":
      return {
        ...state,
        lesson: payload,
        lessonFindLoading: false,
      };

    case "DELETE_LESSON":
      return {
        ...state,
        // courses: state.courses.filter((course) => course._id !== payload),
      };
    default:
      return state;
  }
};
