import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function SignUp() {
  const navigate = useNavigate();
  const { userSignup } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signUpHandler = (e) => {
    e.preventDefault();
    if (
      !userDetails?.firstName.trim() ||
      !userDetails?.lastName.trim() ||
      !userDetails?.username.trim() ||
      !userDetails?.email.trim() ||
      !userDetails?.password.trim() ||
      !userDetails?.confirmPassword.trim()
    ) {
    } else if (userDetails?.password !== userDetails?.confirmPassword) {
      alert("Passwords Do not Match!");
    } else {
      userSignup(userDetails);
    }
  };
  return (
    <div className="flex flex-col justify-center h-[90vh] items-center">
      <form
        className="flex flex-col w-[85%] gap-3 md:w-[350px] lg:w-[400px]"
        onSubmit={(e) => signUpHandler(e)}
      >
        <h2 className="font-semibold">Signup to become a Hero</h2>
        <Input
          type="text"
          id="firstName"
          placeholder="First name"
          required
          value={userDetails?.firstName}
          onChange={(e) =>
            setUserDetails((data) => ({ ...data, firstName: e.target.value }))
          }
        />
        <Input
          type="text"
          id="lastName"
          placeholder="Last name"
          required
          value={userDetails?.lastName}
          onChange={(e) =>
            setUserDetails((data) => ({ ...data, lastName: e.target.value }))
          }
        />
        <Input
          type="text"
          id="userName"
          placeholder="Username"
          required
          value={userDetails?.username}
          onChange={(e) =>
            setUserDetails((data) => ({ ...data, username: e.target.value }))
          }
        />
        <Input
          type="email"
          id="email"
          placeholder="Email"
          required
          value={userDetails?.email}
          onChange={(e) =>
            setUserDetails((data) => ({ ...data, email: e.target.value }))
          }
        />

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            required
            placeholder="Password"
            minLength="8"
            maxLength="10"
            value={userDetails?.password}
            onChange={(e) =>
              setUserDetails((data) => ({
                ...data,
                password: e.target.value,
              }))
            }
          />
          <span
            className="absolute top-[7px] right-3"
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            <i
              className={`fa-regular fa-eye${!showPassword ? "-slash" : ""}`}
            ></i>
          </span>
        </div>
        <div className="relative">
          <Input
            type={showPassword2 ? "text" : "password"}
            id="confirm-password"
            placeholder="Confirm Password"
            required
            minLength="8"
            maxLength="10"
            value={userDetails?.confirmPassword}
            onChange={(e) =>
              setUserDetails((data) => ({
                ...data,
                confirmPassword: e.target.value,
              }))
            }
          />
          <span
            onClick={() => setShowPassword2((showPassword2) => !showPassword2)}
            className="absolute top-[7px] right-3"
          >
            <i
              className={`fa-regular fa-eye${!showPassword2 ? "-slash" : ""}`}
            ></i>
          </span>
        </div>
        <Button type="submit" className="login-btn">
          Signup
        </Button>
        <p onClick={() => navigate("/login")} className="cursor-pointer">
          Already have an account <i className="fa-solid fa-angle-right"></i>
        </p>
      </form>
    </div>
  );
}
