import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataContextProvider = createContext({});

export const DataProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const navigate = useNavigate();

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

  const navtoLogin = () => {
    navigate("/login");
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
  };

  return (
    <DataContextProvider.Provider value={dataContextValue}>
      {children}
    </DataContextProvider.Provider>
  );
};

export default DataContextProvider;
