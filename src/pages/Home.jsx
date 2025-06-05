import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="home">
        <div className="homediv">
          <p className="popx">Welcome to PopX</p>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <button className="btn create" onClick={() => navigate("/register")}>
            Create Account
          </button>
          <button className="loginbtn btn" onClick={() => navigate("/login")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
