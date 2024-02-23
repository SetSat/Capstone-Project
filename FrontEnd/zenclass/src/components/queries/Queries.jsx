// QueryForm.jsx

import React, { useState } from "react";
import axios from "axios";
import "./queries.css"; // Assuming you have a QueryForm.css file for styling

const QueryForm = () => {
  const [topic, setTopic] = useState("");
  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        topic,
        language,
        title,
        description,
        fromTime,
        toTime,
      };
      await axios.post("http://localhost:5000/queries/submit", formData);
      alert("Query submitted successfully!");
      // Reset form fields after submission
      setTopic("");
      setLanguage("");
      setTitle("");
      setDescription("");
      setFromTime("");
      setToTime("");
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("Error submitting query. Please try again.");
    }
  };

  return (
    <div className="query-form-container">
      <h2>Submit Query</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Topic:</label>
          <select value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="">Select Topic</option>
            <option value="Zenclass Related">Zenclass Related</option>
            <option value="Prebootcamp Related">Prebootcamp Related</option>
            <option value="Placement Related">Placement Related</option>
            <option value="Coordination Related">Coordination Related</option>
          </select>
        </div>
        <div className="form-group">
          <label>Language:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
        <div className="form-group">
          <label>Query Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Query Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Available Time From:</label>
          <input
            type="time"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Available Time Till:</label>
          <input
            type="time"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QueryForm;
