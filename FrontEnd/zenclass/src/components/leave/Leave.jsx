import React, { useState } from "react";
import axios from "axios";
import "./Leave.css"; // Assuming you have a Leave.css file for styling

const Leave = () => {
  const [leaveType, setLeaveType] = useState("singleDay");
  const [singleDate, setSingleDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [comment, setComment] = useState("");

  const handleLeaveTypeChange = (event) => {
    setLeaveType(event.target.value);
    // Reset date fields when changing leave type
    setSingleDate("");
    setFromDate("");
    setToDate("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare form data
    const formData = {
      leaveType,
      singleDate,
      fromDate,
      toDate,
      comment,
    };
    // Send form data to server using Axios
    axios
      .post("http://localhost:5000/leave/submit", formData)
      .then((response) => {
        console.log("Leave application submitted:", response.data);
        // Reset form fields after submission
        setLeaveType("singleDay");
        setSingleDate("");
        setFromDate("");
        setToDate("");
        setComment("");
      })
      .catch((error) => {
        console.error("Error submitting leave application:", error);
      });
  };

  return (
    <div className="leave-container">
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <div className="leave-type">
          <label>
            <input
              type="radio"
              value="singleDay"
              checked={leaveType === "singleDay"}
              onChange={handleLeaveTypeChange}
            />
            Single Day
          </label>
          <label>
            <input
              type="radio"
              value="multipleDays"
              checked={leaveType === "multipleDays"}
              onChange={handleLeaveTypeChange}
            />
            Multiple Days
          </label>
        </div>
        {leaveType === "singleDay" ? (
          <label>
            Date:
            <input
              type="date"
              value={singleDate}
              onChange={(e) => setSingleDate(e.target.value)}
            />
          </label>
        ) : (
          <>
            <label>
              From Date:
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </label>
            <label>
              To Date:
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </label>
          </>
        )}
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            cols={50}
          />
        </label>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default Leave;
