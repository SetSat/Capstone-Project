import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [logemail, setlogEmail] = useState("");
  const [logpassword, setlogPassword] = useState("");
  const [loggedin, setloggedin] = useState(false);
  const [finaltoken, setToken] = useState(null);

  const navigate = useNavigate();

  const handleLoginEmail = (value) => {
    setlogEmail(value);
  };

  const navtoLogin = () => {
    navigate("/login");
  };

  const navtoClass = () => {
    navigate("/class");
  };

  const handleLoginPassword = (value) => {
    setlogPassword(value);
  };

  const handleSubmitlogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        logemail,
        logpassword,
      });
      console.log("API Response:", response.data);
      if (response.status === 400) {
        console.log("Invalid email or password");

        navtoLogin();
      }

      if (response.data) {
        const { token } = response.data;
        const decodetoken = jwtDecode(token);
        setToken(decodetoken);
        setloggedin(true);
        setlogEmail("");
        setlogPassword("");
        navtoClass();
        
      }
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };
  useEffect(() => {
    if (finaltoken) {
      console.log("Name from token", finaltoken.user.name);
    }
  }, [finaltoken]);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const handleEducationChange = (value) => {
    setEducation(value);
  };

  const handleExperienceChange = (value) => {
    setExperience(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        name,
        email,
        password,
        education,
        experience,
      });

      console.log("API Response:", response.data);
      setName("");
      setEmail("");
      setPassword("");
      setEducation("");
      setExperience("");
      setConfirmPassword("");
      navtoLogin();
    } catch (error) {
      console.error("API Error:", error.message);
    }
  };

  const dataContextValue = {
    name,
    email,
    password,
    confirmPassword,
    education,
    experience,
    subscribeToNewsletter,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleEducationChange,
    handleExperienceChange,
    handleSubmit,
    handleSubmitlogin,
    handleLoginEmail,
    handleLoginPassword,
    setloggedin,
    loggedin,
    logemail,
    setlogEmail,
    logpassword,
    setlogPassword,
    finaltoken,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
