"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      id="qodef-back-to-top"
      href="#"
      onClick={scrollToTop}
      className={`qodef--predefined ${visible ? "qodef--on" : "qodef--off"}`}
      aria-label="Back to top"
      style={{
        position: "fixed",
        width: "44px",
        height: "44px",
        right: "49px",
        bottom: "30px",
        margin: 0,
        zIndex: 10000,
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transition: "opacity 0.3s ease, visibility 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        color: "#ffffff",
        border: "1px solid #333333",
      }}
    >
      <span className="qodef-back-to-top-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          style={{ fill: "#ffffff" }}
        >
          <path d="M8 2l6 6-1.4 1.4L9 5.8V14H7V5.8L3.4 9.4 2 8z" />
        </svg>
      </span>
    </a>
  );
}
