export const chapterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_CHAPTER_BY_ID_SUCCESS":
      return {
        ...state,
        chapters: payload,
        chaptersFindLoading: false,
      };

    default:
      return state;
  }
};
