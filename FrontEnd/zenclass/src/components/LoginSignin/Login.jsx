import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);

      navigate("/class");
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div className="body-container">
      <form className="form-control login" onSubmit={handleSubmit}>
        <p className="title">Login</p>
        <div className="input-field">
          <input
            required
            className="input"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <label className="label" htmlFor="input">
            Enter Email
          </label>
        </div>
        <div className="input-field">
          <input
            required
            className="input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label className="label" htmlFor="input">
            Enter Password
          </label>
        </div>

        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>

        <button type="submit" className="submit-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
