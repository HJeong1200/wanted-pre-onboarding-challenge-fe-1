import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  const SIGNUPURL = "http://localhost:8080/users/create";

  const postSignUp = () => {
    const body = {
      email,
      password,
    };

    fetch(SIGNUPURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        const { message, token } = data;
        console.log(message);
        localStorage.setItem("token", token);
        navigate("/");
      });
  };

  const emailValidation = (email: string) => {
    if (email.includes("@") && email.includes(".")) return true;
    return false;
  };

  const passwordValidation = (password: string) => {
    if (password.length >= 8) return true;
    return false;
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
    if (emailValidation(email) && passwordValidation(password)) {
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
