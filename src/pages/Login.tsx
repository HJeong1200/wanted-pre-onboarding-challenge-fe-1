import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../components/functions/auth/postAuth";
import {
  emailValidation,
  passwordValidation,
} from "../components/functions/auth/validation";

export default function LoginPage() {
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

  const LOGINURL = "http://localhost:8080/users/login";

  const postLogin = () => {
    postAuth(LOGINURL, email, password);
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };

  const submitLoginForm = () => {
    if (emailValidation(email) && passwordValidation(password)) {
      postLogin();
    } else {
      console.log("Invalid");
    }
  };

  return (
    <div className="Login_Form_Container">
      <div className="Login_Title"></div>
      <label htmlFor="Email">Email</label>
      <input
        type="text"
        id="Email"
        className="Login_Email"
        onChange={changeEmail}
      />
      <label htmlFor="Password">Password</label>
      <input
        type="password"
        id="Password"
        className="Login_Password_Input"
        onChange={changePassword}
      />
      <button className="Login_Submit_Button" onClick={submitLoginForm}>
        로그인
      </button>
    </div>
  );
}
