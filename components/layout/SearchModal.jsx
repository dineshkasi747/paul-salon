"use client";

import { useState } from "react";

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Search for: ${searchTerm}`);
      onClose();
    }
  };

  return (
    <div className={`qodef-search-cover-overlay ${isOpen ? "opened" : ""}`}>
      <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", alignItems: "center", position: "relative" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus={isOpen}
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            borderBottom: "2px solid #ffffff",
            padding: "12px 40px 12px 0",
            color: "#ffffff",
            fontFamily: "Kanit",
            fontSize: "24px",
            outline: "none",
          }}
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          style={{
            position: "absolute",
            right: "0",
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 12.728 12.728"
            style={{ stroke: "#ffffff", strokeWidth: 2 }}
          >
            <line y2="16" transform="translate(12.021 0.707) rotate(45)" />
            <line y2="16" transform="translate(12.021 12.021) rotate(135)" />
          </svg>
        </button>
      </form>
    </div>
  );
}
