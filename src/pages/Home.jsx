import MainPage from "./Main";
import LeftSideBar from "src/components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Navbar from "../components/Navbar";
import MobileLeftSideBar from "../components/MobileLeftSideBar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-[50px] relative">
        <LeftSideBar />
        <MainPage />
        <RightSideBar />
      </div>
      <MobileLeftSideBar />
    </div>
  );
}

export default HomePage;
