import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const submitLoginForm = () => {
    if (emailValidation(email) && passwordValidation(password)) {
      console.log(email, password);
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
        type="text"
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
