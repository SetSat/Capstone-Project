import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log("Email:", email, "Password:", password);
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
