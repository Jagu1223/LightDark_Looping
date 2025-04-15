import React, { useState } from "react";

const FAQ = ({ curElem, onToggle, isActive }) => {
  const { question, answer } = curElem;

  return (
    <li>
      <div className="accordion-grid">
        <p>{question}</p>
        <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
          {isActive ? "close" : "show"}
        </button>
      </div>
      <p>{isActive && answer}</p>
    </li>
  );
};

export default FAQ;
