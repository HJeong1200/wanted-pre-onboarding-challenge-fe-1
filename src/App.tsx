import React from "react";
import "./App.css";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
