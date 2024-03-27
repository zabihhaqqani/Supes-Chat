import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useToast } from "../components/ui/use-toast";
import HeroList from "../components/HeroList";
import logo from "../assets/icons8-justice-league.svg";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = useAuthContext();
  const { toast } = useToast();

  const [showList, setShowList] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const loginHandler = (e) => {
    e.preventDefault();
    if (!userData.username.trim() || !userData.password.trim()) {
      toast({
        title: "Traitor",
        description: " Enter Valid Credentials!",
      });
    } else {
      userLogin(userData);
    }
  };

  const loginAsGuest = (guestUserData) => {
    userLogin(guestUserData);
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center h-[90vh] items-center">
      <form
        onSubmit={loginHandler}
        className="flex flex-col w-[85%] gap-3 md:w-[350px] lg:w-[400px]"
      >
        <h3 className="flex items-center gap-2 font-bold text-lg">
          Welcome back, hero <img className="w-[35px]" src={logo} alt="logo" />
        </h3>
        <Input
          id="username"
          value={userData.username}
          className="p-5"
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setUserData((data) => ({ ...data, username: e.target.value }))
          }
          required
        />
        <Input
          id="password"
          className="p-5"
          value={userData.password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) =>
            setUserData((data) => ({
              ...data,
              password: e.target.value,
            }))
          }
          required
          minLength="8"
          maxLength="16"
        />
        <div className="relative">
          <span
            onClick={() => setShowPassword((showPassword) => !showPassword)}
            className="absolute top-[-45px] right-3"
          >
            <i
              className={`fa-regular fa-eye${!showPassword ? "-slash" : ""}`}
            ></i>
          </span>
        </div>
        <Button type="submit">Login</Button>
        <Button onClick={() => navigate("/signup")}> Join the league ▶</Button>
      </form>
      <Button
        onClick={() => setShowList(!showList)}
        className="mt-3 w-[85%] md:w-[350px] lg:w-[400px]"
      >
        Login as a Hero
      </Button>

      {showList && (
        <HeroList
          loginAsGuest={loginAsGuest}
          setShowList={setShowList}
          showList={showList}
        />
      )}
    </div>
  );
};

export default Login;
