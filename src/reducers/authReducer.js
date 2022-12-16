export const authReducer = (state, action) => {
  const {
    type,
    payload: { isAuthenticated, user, rule, member, userLength },
  } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        authLoading: false,
        isAuthenticated,
        user,
      };
    case "ALL_MEMBER_LOADING_SUCCESS":
      return {
        ...state,
        allMemberLoading: false,
        member,
        userLength,
      };
    default:
      return state;
  }
};
