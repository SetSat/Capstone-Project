import React from "react";
import { FaDownload } from "react-icons/fa6";
import "./syllabus.css"; 
function Syllabus() {
  const handleDownload = async () => {
    const pdfPath = "../../assets/mernSyllabus.pdf";

    try {
      const response = await fetch(pdfPath);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "mernSyllabus.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div className="syllabus-container"> 
      <div className="syllabus-top"> 
        <div className="course">Course</div> 
        <div className="syllabus-title">Syllabus</div> 
      </div>
      <div className="syllabus-bottom"> 
        <div className="course-name">FSD-MERN</div> 
        <div className="download-button" onClick={handleDownload}> 
          <FaDownload />
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
