"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="paul-loader-overlay"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease-out, visibility 0.5s ease-out",
        pointerEvents: fadeOut ? "none" : "auto",
        zIndex: 2147483647,
      }}
    >
      <div className="paul-loader-lockup">
        <div className="paul-loader-logo-wrap">
          <img
            src="/images/paul-logo.png"
            alt="PaulHair"
            className="paul-loader-full-img"
          />
        </div>

        <div className="paul-loader-tagline">
          <div className="paul-loader-line" />
          <span className="paul-loader-subtitle">THE ART OF MODERN HAIRDRESSING</span>
          <div className="paul-loader-line right" />
        </div>
      </div>
    </div>
  );
}
