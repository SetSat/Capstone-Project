import React, { useContext } from 'react';

import './Signup.css';
import DataContextProvider from '../../DataContext/DataContextProvider';

const Signup = () => {
  const {
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
    handleSubscribeChange,
    handleSubmit,
  } = useContext(DataContextProvider);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="signup">Sign Up</span>
      <label htmlFor="name">Full Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your full name"
        className="form--input"
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}
      />

      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email address"
        className="form--input"
        value={email}
        onChange={(e) => handleEmailChange(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        className="form--input"
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm your password"
        className="form--input"
        value={confirmPassword}
        onChange={(e) => handleConfirmPasswordChange(e.target.value)}
      />

      <label htmlFor="education">Education:</label>
      <input
        type="text"
        id="education"
        placeholder="Enter your education"
        className="form--input"
        value={education}
        onChange={(e) => handleEducationChange(e.target.value)}
      />

      <label htmlFor="experience">Experience:</label>
      <input
        type="text"
        id="experience"
        placeholder="Enter your experience"
        className="form--input"
        value={experience}
        onChange={(e) => handleExperienceChange(e.target.value)}
      />

      
      <button type="submit" className="form--submit">
        Sign up
      </button>
    </form>
  );
};

export default Signup;
