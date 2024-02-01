import React, { useState } from 'react';
import './Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubscribeChange = () => {
    setSubscribeToNewsletter(!subscribeToNewsletter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Subscribe to Newsletter:', subscribeToNewsletter);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="signup">Sign Up</span>
      <input
        type="email"
        placeholder="Email address"
        className="form--input"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        className="form--input"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="form--input"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <div className="form--marketing">
        <input
          id="okayToEmail"
          type="checkbox"
          checked={subscribeToNewsletter}
          onChange={handleSubscribeChange}
        />
        <label htmlFor="okayToEmail" className="checkbox">
          I want to join the newsletter
        </label>
      </div>
      <button type="submit" className="form--submit">
        Sign up
      </button>
    </form>
  );
};

export default Signup;
