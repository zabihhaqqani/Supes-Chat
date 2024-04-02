import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import RequiresAuth from "./Auth/requireAuth";
import { Toaster } from "./components/ui/toaster";
import { useAuthContext } from "./context/authContext";
import BookMarks from "./pages/Bookmark";
import { Error } from "./pages/Error";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import IndividualPost from "./pages/IndividualPost";
import LikedPosts from "./pages/LikedPosts";
import Login from "./pages/Login";
import { SignUp } from "./pages/Signup";
import UserProfilePage from "./pages/UserProfilePage";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { authState } = useAuthContext();

  const { token } = authState;

  return (
    <div className="md:text-[16px]  text-[15px]">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<RequiresAuth isLoggedIn={token} children={<Home />} />}
        >
          <Route
            path="/explore"
            element={<RequiresAuth isLoggedIn={token} children={<Explore />} />}
          />
          <Route
            path="/bookmarks"
            element={
              <RequiresAuth isLoggedIn={token} children={<BookMarks />} />
            }
          />
          <Route
            path="/likedposts"
            element={
              <RequiresAuth isLoggedIn={token} children={<LikedPosts />} />
            }
          />
          <Route
            path="/user/:username"
            element={
              <RequiresAuth isLoggedIn={token} children={<UserProfilePage />} />
            }
          />
          <Route
            path="/post/:id"
            element={
              <RequiresAuth isLoggedIn={token} children={<IndividualPost />} />
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/page-not-found" element={<Error />} />
        {/* <Route path="*" element={<Navigate to={"/page-not-found"} />} /> */}
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />{" "}
      <Toaster />
    </div>
  );
}

export default App;
