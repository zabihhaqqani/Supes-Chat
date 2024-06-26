import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import dataReducer from "../reducer/dataReducer";
import axios from "axios";
import { useAuthContext } from "./authContext";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { authState } = useAuthContext();
  const initialState = {
    users: [],
    posts: [],
    bookmarks: [],
  };
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);
  const [showLoader, setShowLoader] = useState(true);

  const getUsers = async () => {
    try {
      // setShowLoader(true);
      const { status, data } = await axios.get("/api/users");
      if (status === 200) {
        dataDispatch({ type: "SET_USERS", payload: data?.users });
        setShowLoader(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getUserPosts = async () => {
    try {
      const { status, data } = await axios.get("/api/posts");
      if (status === 200) {
        dataDispatch({ type: "SET_USER_POSTS", payload: data?.posts });
        setShowLoader(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAllBookmarks = async () => {
    try {
      const { data, status } = await axios.get("/api/users/bookmark", {
        headers: {
          authorization: authState?.token,
        },
      });
      if (status === 200) {
        dataDispatch({ type: "SET_BOOKMARKS", payload: data?.bookmarks });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const [sortBy, setSortBy] = useState("Latest");

  useEffect(() => {
    if (authState?.token) {
      getUsers();
      getUserPosts();
      getAllBookmarks();
    }
  }, [authState?.token]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <DataContext.Provider
      value={{
        dataState,
        dataDispatch,
        setSortBy,
        sortBy,
        showLoader,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useDataContext = () => useContext(DataContext);
