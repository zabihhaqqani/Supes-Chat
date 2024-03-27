import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Explore from "./pages/Explore";
import BookMarks from "./pages/Bookmark";
import LikedPosts from "./pages/LikedPosts";
import Login from "./pages/Login";
import RequiresAuth from "./Auth/requireAuth";
import { SignUp } from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Error } from "./pages/Error";
import { Toaster } from "./components/ui/toaster";
import UserProfilePage from "./pages/UserProfilePage";
import IndividualPostPage from "./components/IndividualPost";

function App() {
  return (
    <div className="md:text-[16px] sm:text-sm">
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <HomePage />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequiresAuth>
              <BookMarks />
            </RequiresAuth>
          }
        />
        <Route
          path="/likedposts"
          element={
            <RequiresAuth>
              <LikedPosts />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/post/:id"
          element={
            <RequiresAuth>
              <IndividualPostPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/user/:username"
          element={
            <RequiresAuth>
              <UserProfilePage />
            </RequiresAuth>
          }
        />
        <Route path="/page-not-found" element={<Error />} />
        <Route path="*" element={<Navigate to={"/page-not-found"} />} />
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
      />
      <Toaster />
    </div>
  );
}

export default App;
