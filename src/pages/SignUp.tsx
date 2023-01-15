import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAuthentication } from "../components/functions/auth/submitAuthentication";
import {
  isValidEmail,
  isValidPassword,
} from "../components/functions/auth/validation";
import { SIGNUPURL } from "../constants/URL";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/auth/login");
    }
  }, []);

  const postSignUp = () => {
    submitAuthentication(SIGNUPURL, email, password);
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };

  const submitSignUpForm = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      postSignUp();
    } else {
      console.log("Invalid");
    }
  };

  return (
    <div className="SignUp_Form_Container">
      <div className="SignUp_Title"></div>
      <label htmlFor="Email">Email</label>
      <input
        type="text"
        id="Email"
        className="SignUp_Email"
        onChange={changeEmail}
      />
      <label htmlFor="Password">Password</label>
      <input
        type="password"
        id="Password"
        className="SignUp_Password_Input"
        onChange={changePassword}
      />
      <button className="SignUp_Submit_Button" onClick={submitSignUpForm}>
        로그인
      </button>
    </div>
  );
}
