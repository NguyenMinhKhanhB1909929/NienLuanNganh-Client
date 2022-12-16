import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

import { authReducer } from "../reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import setAuthToken from "../utils/setAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    allMemberLoading: true,
    isAuthenticated: false,
    user: "",
    member: [],
    userLength: 0,
  });

  // GET ALL Memeber
  const getAllMember = async (page) => {
    try {
      const response = await axios.get(`${apiUrl}/auth/all/${page}`);
      if (response.data.success) {
        dispatch({
          type: "ALL_MEMBER_LOADING_SUCCESS",
          payload: {
            member: response.data.user,
            userLength: response.data.userLength,
          },
        });
      }
    } catch (error) {
      console.log("LOI");
    }
  };

  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }

    try {
      const response = await axios.get(`${apiUrl}/auth`);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: false, user: null },
      });
    }
  };

  useEffect(() => loadUser, []);

  // LoginUser
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userForm);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      await loadUser();
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  //logoutUser
  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false, user: "" },
    });
  };

  // RegisterUser
  const registerUser = async (registerForm) => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/register`,
        registerForm
      );

      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      }
      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const addCourseToUser = async (courseId) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/${courseId}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const changePassword = async (formPassword) => {
    try {
      const response = await axios.put(
        `${apiUrl}/auth/changePassword`,
        formPassword
      );
      console.log(response);
      if (response.data.success) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeInfo = async (formInfo) => {
    try {
      const response = await axios.put(`${apiUrl}/auth/changeInfo`, formInfo);
      console.log(response.data);
      if (response.data.success) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const authContextData = {
    loginUser,
    authState,
    registerUser,
    logoutUser,
    getAllMember,
    addCourseToUser,
    loadUser,
    changePassword,
    changeInfo,
  };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
